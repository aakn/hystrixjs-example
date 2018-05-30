import request from 'request-promise-native';
import {
	commandFactory as CommandFactory
} from 'hystrixjs';

const makeRequest = (id) => request.get({
	uri: `http://localhost:3010/users/${id}`,
	json: true,
});

const fallback = (err, args) => {
	console.log("error in fallback", err);
	return Promise.resolve({
		oops: "from fallback",
		error: err.message,
		args,
	})
};

const commandBuilder = CommandFactory.getOrCreate('sample')
	.run(makeRequest)
	.timeout(10)
	.fallbackTo(fallback);

export default (req, res) => {
	const cmd = commandBuilder.build();

	cmd.execute(1)
		.then(user => {
			return res.json({
				user,
			});
		}).catch(err => {
			console.log("error in catch", err);
			return res.status(500).send({
				error: err.message,
				oops: "direct error",
			});
		});
};
import request from 'request-promise-native';
import {
	commandFactory as CommandFactory
} from 'hystrixjs';

export default (req, res) => {

	const promise = (id) => request.get({
		uri: `https://jsonplaceholder.typicode.com/users/${id}`,
		json: true,
	});

	const fallback = (err, args) => ({
		oops: "from fallback",
		err,
		args,
	});

	const cmd = CommandFactory.getOrCreate('sample')
		.run(promise)
		.timeout(1000)
		.fallbackTo(fallback)
		.build();

	cmd.execute(1)
		.then(user => {
			return res.json({
				user,
			});
		}).catch(err => {
			return res.status(500).send({
				err,
				oops: "direct error",
			});
		});
};
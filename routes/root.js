import request from 'request-promise-native';

export default (req, res) => {

	const promise = request.get({
		uri: 'https://jsonplaceholder.typicode.com/users/1',
		json: true,
	});

	promise.then(user => {
		return res.json({
			user,
		});
	}).catch(err => {
		return res.status(500).send(err);
	});
};
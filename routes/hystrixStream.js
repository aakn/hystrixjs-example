import {
	hystrixStream
} from 'hystrixjs';

export default (request, response) => {
	response.append('Content-Type', 'text/event-stream;charset=UTF-8');
	response.append('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
	response.append('Pragma', 'no-cache');
	return hystrixStream.toObservable().subscribe(
		sseData => (response.write('data: ' + sseData + '\n\n')),
		error => (console.log(error)),
		() => (response.end())
	);
};
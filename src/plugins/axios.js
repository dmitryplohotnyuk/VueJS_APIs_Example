import axios from 'axios';

let server = axios.create({
	baseURL: 'https://newsapi.org/v2/'
});

server.interceptors.request.use(function(request){
    request.headers = {
        'Authorization': 'Bearer f76fbc82c3574afdb0c026155c641ec8'
    };
    return request;
});

export default server;
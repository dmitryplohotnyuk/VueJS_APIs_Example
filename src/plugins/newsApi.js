import axios from 'axios';

let serverNews = axios.create({
	baseURL: 'https://newsapi.org/v2/'
});

serverNews.interceptors.request.use(function(request){
    request.headers = {
        'Authorization': 'Bearer f76fbc82c3574afdb0c026155c641ec8'
    };
    return request;
});

export default serverNews;
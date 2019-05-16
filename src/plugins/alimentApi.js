import axios from 'axios';

let serverAliment = axios.create({
	baseURL: 'https://opendatabot.com/api/v2/'
});

serverAliment.interceptors.request.use(function(request){
    request.params = {
        'apiKey': 'qHqFXGYbtbeK'
    };
    return request;
});

export default serverAliment;
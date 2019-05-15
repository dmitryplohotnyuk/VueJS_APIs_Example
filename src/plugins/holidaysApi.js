import axios from 'axios';

let serverHolidays = axios.create({
	baseURL: 'https://holidayapi.com/v1/'
});

serverHolidays.interceptors.request.use(function(request){
    request.params = {
        'key': 'a70d7226-6255-4094-8fc9-b4e63e9eec4f',
        'year': '2018'
    };
    return request;
});

export default serverHolidays;
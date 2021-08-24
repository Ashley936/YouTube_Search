import axios from 'axios';

const API_KEY = 'AIzaSyAMmkirC5RMX5sKFAf9wjf3aE-W96BqWe4';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResult: 5,
        key: API_KEY
    }
})
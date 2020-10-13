import axios from "axios";

const KEY = "AIzaSyA2oMecdcGyjueWD8XsQSVYuzNk90aVFQY";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});
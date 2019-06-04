import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-95eca.firebaseio.com/'
})
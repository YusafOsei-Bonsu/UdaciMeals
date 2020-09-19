import Route from '@ember/routing/route';
import axios from 'axios';

export default class MenuRoute extends Route {
    model() {
        // Getting data from the local menu.json file
       return axios.get('/menu/menu.json')
        .then(response => response.data)
        .catch(err => {
            console.error(err);
        });
    }
}

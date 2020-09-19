import Route from '@ember/routing/route';
import axios from 'axios';

export default class ItemRoute extends Route {
    model(params) {
        const itemName = params.item_name;
        return axios.get(`/menu/${itemName}.json`)
            .then(response => {
                return response.data;
            }).catch(err => {
                console.error(err);
            });
    }
}

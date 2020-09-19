import Route from '@ember/routing/route';

export default class MenuRoute extends Route {
    model() {
        // Getting data from the local menu.json file
       return fetch('/menu/menu.json')
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.error(err);
        });
    }
}

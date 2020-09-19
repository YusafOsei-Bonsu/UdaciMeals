import EmberRouter from '@ember/routing/router';
import config from 'udaci-meals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('menu');
  this.route('item', { path: 'item/:item_name' });
});

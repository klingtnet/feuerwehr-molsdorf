import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('association');
  this.route('education');
  this.route('youth');
  this.route('honor');
  this.route('imprint');
});

export default Router;

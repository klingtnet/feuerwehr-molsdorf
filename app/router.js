import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('association');
  this.route('operation', function() {
    this.route('timetable');
    this.route('technology');
    this.route('members');
  });
  this.route('youth', function() {
    this.route('department', function() {
      this.route('education');
    });
    this.route('child-fire-brigade');
  });
  this.route('honor');
  this.route('imprint');
  this.route('disclaimer');
  this.route('dataprotection');
});

export default Router;

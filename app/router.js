import Ember from 'ember';
import config from './config/environment';
import { translationMacro as t } from "ember-i18n";

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route( 'association', { path: 'association' });
  this.route('education');
});

export default Router;

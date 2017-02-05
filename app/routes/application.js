import Ember from 'ember';

export default Ember.Route.extend({

  model() {

    return Ember.RSVP.hash({
      navigation: [{
        ico: "home",
        localization: "navigation.welcome",
        link: "/",
        active: true
      }, {
        ico: "home",
        localization: "navigation.association",
        link: "association",
        active: false
      }, {
        ico: "home",
        localization: "navigation.education",
        link: "education",
        active: false
      }, {
        ico: "home",
        localization: "navigation.youth",
        link: "youth",
        active: false
      }, {
        ico: "home",
        localization: "navigation.honor",
        link: "honor",
        active: false
      }],
      copyrightTo: new Date().getFullYear()
    });

  }

});

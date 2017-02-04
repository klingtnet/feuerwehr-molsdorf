import Ember from 'ember';

export default Ember.Route.extend({

  model() {

    return Ember.RSVP.hash({
      navigation: [{
        localization: "navigation.welcome",
        link: "/",
        active: true
      }, {
        localization: "navigation.association",
        link: "association",
        active: false
      }, {
        localization: "navigation.education",
        link: "education",
        active: false
      }, {
        localization: "navigation.youth",
        link: "youth",
        active: false
      }, {
        localization: "navigation.honor",
        link: "honor",
        active: false
      }]
    });

  }

});

import Ember from 'ember';
import ResetScrollMixin from 'ember-cli-reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {

  // Scroll to a specific position based on the route name (in px)
  resetScroll: 0,
  
  model() {

    return Ember.RSVP.hash({
      navigation: [{
          ico: "home",
          localization: "navigation.welcome",
          link: "index",
          active: true
        },
        {
          ico: "group",
          localization: "navigation.association",
          link: "association",
          active: false
        },
        {
          ico: "truck",
          localization: "navigation.operation",
          link: "operation",
          active: false
        },
        {
          ico: "child",
          localization: "navigation.youth",
          link: "youth",
          active: false
        },
        {
          ico: "flag",
          localization: "navigation.honor",
          link: "honor",
          active: false
        }
      ],
      copyrightTo: new Date().getFullYear()
    });

  },

  actions: {

    linkTo(route) {
      this.transitionTo(route);
    }

  }

});

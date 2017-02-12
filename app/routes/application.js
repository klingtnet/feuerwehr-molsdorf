import Ember from 'ember';

export default Ember.Route.extend({

  model() {

    return Ember.RSVP.hash({
      navigation: [
				{
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
	        localization: "navigation.education",
	        link: "education",
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

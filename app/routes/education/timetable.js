import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let month = new Date().getMonth();

    switch (month) {
      case 1:
        return Ember.RSVP.hash({
          january: true
        });
        break;
      case 2:
        return Ember.RSVP.hash({
          february: true
        });
        break;
      case 3:
        return Ember.RSVP.hash({
          march: true
        });
        break;
      case 4:
        return Ember.RSVP.hash({
          april: true
        });
        break;
      case 5:
        return Ember.RSVP.hash({
          may: true
        });
        break;
      case 6:
        return Ember.RSVP.hash({
          june: true
        });
        break;
      case 7:
        return Ember.RSVP.hash({
          juli: true
        });
        break;
      case 8:
        return Ember.RSVP.hash({
          august: true
        });
        break;
      case 9:
        return Ember.RSVP.hash({
          september: true
        });
        break;
      case 10:
        return Ember.RSVP.hash({
          october: true
        });
        break;
      case 11:
        return Ember.RSVP.hash({
          november: true
        });
        break;
      case 12:
        return Ember.RSVP.hash({
          december: true
        });
        break;
    }

  }

});

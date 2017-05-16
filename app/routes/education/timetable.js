import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let month = new Date().getMonth();
    let hash = null;
    
    switch (month) {
      case 1:
        hash = Ember.RSVP.hash({
          january: true
        });
        break;
      case 2:
        hash = Ember.RSVP.hash({
          february: true
        });
        break;
      case 3:
        hash = Ember.RSVP.hash({
          march: true
        });
        break;
      case 4:
        hash = Ember.RSVP.hash({
          april: true
        });
        break;
      case 5:
        hash = Ember.RSVP.hash({
          may: true
        });
        break;
      case 6:
        hash = Ember.RSVP.hash({
          june: true
        });
        break;
      case 7:
        hash = Ember.RSVP.hash({
          juli: true
        });
        break;
      case 8:
        hash = Ember.RSVP.hash({
          august: true
        });
        break;
      case 9:
        hash = Ember.RSVP.hash({
          september: true
        });
        break;
      case 10:
        hash = Ember.RSVP.hash({
          october: true
        });
        break;
      case 11:
        hash = Ember.RSVP.hash({
          november: true
        });
        break;
      case 12:
        hash = Ember.RSVP.hash({
          december: true
        });
        break;
    }

    return hash;

  }

});

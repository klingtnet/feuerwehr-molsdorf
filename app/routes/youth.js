import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      showPageContent: true
    });
  },

  actions: {
    
    showYouthDepartment() {
      this.set('showPageContent', false);
      this.transitionTo('youth.department');
    },
    
    showChildFireBrigade() {
      this.set('showPageContent', false);
      this.transitionTo('youth.child-fire-brigade');
    }

  }

});

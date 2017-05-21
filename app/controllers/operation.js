import Ember from 'ember';

export default Ember.Controller.extend({
  
  operationMembersCount: Ember.computed('operationMembers', function() {
    debugger;
    return this.get('operationMembers').get('length');
  })

});

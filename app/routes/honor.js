import Ember from 'ember';

export default Ember.Route.extend({

    store: Ember.inject.service(),

    beforeModel() {
        return this.get('store').findAll('member');
    }

});

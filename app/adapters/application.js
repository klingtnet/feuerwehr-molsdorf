// import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    
    urlForFindRecord(id, modelName, snapshot) {
        let baseUrl = this.buildURL();
        return baseUrl + '/' + Ember.String.pluralize(modelName) + '/' + id + '.json';
    }
    
});

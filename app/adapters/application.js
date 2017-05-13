import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    
    urlForFindAll(modelName/*, snapshot*/) {
        let baseUrl = this.buildURL();
        return baseUrl + '/rest/' + Ember.String.pluralize(modelName) + '.json';
    },
    
    urlForFindRecord(id, modelName/*, snapshot*/) {
        let baseUrl = this.buildURL();
        return baseUrl + '/rest/' + Ember.String.pluralize(modelName) + '/' + id + '.json';
    }
    
});

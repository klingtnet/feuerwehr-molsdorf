import DS from 'ember-data';

export default DS.Model.extend({
    firstName: DS.attr("string"),
    lastName: DS.attr("string"),
    honor: DS.attr('boolean'),
    associationChairman: DS.attr('boolean'),
    deputyAssociationChairman: DS.attr('boolean'),
    treasurer: DS.attr('boolean'),
    secretary: DS.attr('boolean'),
    assessor: DS.attr('boolean'),
    fireChief: DS.attr('boolean'),
    operations: DS.attr('boolean'),
    deputyFireChief: DS.attr('boolean'),
    youthOfficer: DS.attr('boolean'),
    childrenOfficer: DS.attr('boolean'),
    equipmentOfficer: DS.attr('boolean'),
    representativeHonorDepartment: DS.attr('boolean'),
    safetyOfficer: DS.attr('boolean')
});
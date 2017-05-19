import DS from 'ember-data';

export default DS.Model.extend({
    type: DS.attr("string"),
    firstName: DS.attr("string"),
    lastName: DS.attr("string"),
    board: DS.attr("boolean"),
    honor: DS.attr('boolean'),
    representativeHonorDepartment: DS.attr('boolean'),
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
    safetyOfficer: DS.attr('boolean'),
    groupLeader: DS.attr('boolean'),
    militaryCommittee: DS.attr('boolean')
});

import DS from 'ember-data';

export default DS.Model.extend({
    type: DS.attr("string"),
    firstName: DS.attr("string"),
    lastName: DS.attr("string"),
    board: DS.attr("boolean"),
    boardChairman: DS.attr('boolean'),
    deputyBoardChairman: DS.attr('boolean'),
    
    operationsDepartment: DS.attr(),
    honor: DS.attr('boolean'),
    
    representativeHonorDepartment: DS.attr('boolean'),
    treasurer: DS.attr('boolean'),
    secretary: DS.attr('boolean'),
    assessor: DS.attr('boolean'),
    fireChief: DS.attr('boolean'),
    operationalMembers: DS.attr('boolean'),
    deputyFireChief: DS.attr('boolean'),
    youthOfficer: DS.attr('boolean'),
    childrenOfficer: DS.attr('boolean'),
    equipmentOfficer: DS.attr('boolean'),
    safetyOfficer: DS.attr('boolean'),
    groupLeader: DS.attr('boolean'),
    chiefGuard: DS.attr('boolean'),
    militaryCommittee: DS.attr('boolean'),
    agt: DS.attr('string'),
    ma: DS.attr('string'),
    ksf: DS.attr('string'),
    operationTasks: DS.attr(),
    troopMan: DS.attr('boolean'),
    squadLeader: DS.attr('boolean')
});

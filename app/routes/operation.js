import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      timetable: this.get('store').findAll('operation-timetable').then((data) => {
        let date = new Date();
        let month = date.getMonth();
        
        data.forEach(function(element) {
          console.log(element.get('id'), month);
          if (parseInt(element.get('id')) === month) {
            element.set('currentMonth', true);
          }
        });

        console.log(data);
        return data;
      }),
      members: this.get('store').findAll('member').then((members) => {
        let list = Ember.A();
        
        let fireChiefList = Ember.A();
        members.forEach((member) => {
          if (member.get('militaryCommittee') && member.get('fireChief')) {
            fireChiefList.push({
              type: 'fireChief',
              member: member
            });
          }
        });
        list.push(fireChiefList);

        let deputyFireChiefList = Ember.A();
        members.forEach((member) => {
          if (member.get('militaryCommittee') && member.get('deputyFireChief')) {
            fireChiefList.push({
              type: 'deputyFireChief',
              member: member
            });
          }
        });
        list.push(deputyFireChiefList);
        
        let youthOfficerList = Ember.A();
        members.forEach((member) => {
          if (member.get('militaryCommittee') && member.get('youthOfficer')) {
            fireChiefList.push({
              type: 'youthOfficer',
              member: member
            });
          }
        });
        list.push(youthOfficerList);
        
        let childrenOfficerList = Ember.A();
        members.forEach((member) => {
          if (member.get('militaryCommittee') && member.get('childrenOfficer')) {
            fireChiefList.push({
              type: 'childrenOfficer',
              member: member
            });
          }
        });
        list.push(childrenOfficerList);
        
        let equipmentOfficerList = Ember.A();
        members.forEach((member) => {
          if (member.get('militaryCommittee') && member.get('equipmentOfficer')) {
            fireChiefList.push({
              type: 'equipmentOfficer',
              member: member
            });
          }
        });
        list.push(equipmentOfficerList);
        
        let assessorList = Ember.A();
        members.forEach((member) => {
          if (member.get('militaryCommittee') && member.get('assessor')) {
            fireChiefList.push({
              type: 'assessor',
              member: member
            });
          }
        });
        list.push(assessorList);
        
        let representativeHonorDepartmentList = Ember.A();
        members.forEach((member) => {
          if (member.get('militaryCommittee') && member.get('representativeHonorDepartment')) {
            fireChiefList.push({
              type: 'representativeHonorDepartment',
              member: member
            });
          }
        });
        list.push(representativeHonorDepartmentList);
        
        let safetyOfficerList = Ember.A();
        members.forEach((member) => {
          if (member.get('militaryCommittee') && member.get('safetyOfficer')) {
            fireChiefList.push({
              type: 'safetyOfficer',
              member: member
            });
          }
        });
        list.push(safetyOfficerList);
        
        return list;
      }),
      headerSlides: [
        {
          img: '/img/main-1.jpg',
          headline: 'Sei dabei!',
          text: 'Mach mit im Förderverein der freiwilligen Feuerwehr Erfurt-Molsdorf.'
        },
        {
          img: '/img/main-2.jpg',
          headline: 'Unsere Jugend',
          text: 'Lerne alles rund um die Feuerwehr.'
        },
        {
          img: '/img/main-3.jpg',
          headline: 'Ehrenabteilung',
          text: 'Einen wehrtvoller Beitrag leisten.'
        },
        {
          img: '/img/main-4.jpg',
          headline: 'Einsatzabteilung',
          text: 'Gemeinsam für euch.'
        }
      ]
    });
  },

  beforeModel() {
    this.transitionTo('operation.members');
  }

});

import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      members: this.get('store').findAll('member').then((members) => {
        let list = Ember.A();
        
        members.forEach((member) => {
          if (member.get('board') && member.get('boardChairman')) {
            member.set('type', 'boardChairman');
            list.push(member);
          }
        });
        members.forEach((member) => {
          if (member.get('board') && member.get('deputyBoardChairman')) {
            member.set('type', 'deputyBoardChairman');
            list.push(member);
          }
        });
        members.forEach((member) => {
          if (member.get('board') && member.get('treasurer')) {
            member.set('type', 'treasurer');
            list.push(member);
          }
        });
        members.forEach((member) => {
          if (member.get('board') && member.get('secretary')) {
            member.set('type', 'secretary');
            list.push(member);
          }
        });
        members.forEach((member) => {
          if (member.get('board') && member.get('assessor')) {
            member.set('type', 'assessor');
            list.push(member);
          }
        });

        return list;
      }),
      membership: this.get('store').findAll('member').then((members) => {
        return members.get("length");
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
  }
  
});

import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      members: this.get('store').findAll('member').then((members) => {
        let list = Ember.A();
        
        members.forEach((member) => {
          if (member.get('onBoard') && member.get('associationChairman')) {
            member.set('type', 'Vereinsvorsitzender');
            list.push(member);
          }
        });
        members.forEach((member) => {
          if (member.get('onBoard') && member.get('deputyAssociationChairman')) {
            member.set('type', 'Stellv. Vereinsvorsitzender');
            list.push(member);
          }
        });
        members.forEach((member) => {
          if (member.get('onBoard') && member.get('treasurer')) {
            member.set('type', 'Kassenwart');
            list.push(member);
          }
        });
        members.forEach((member) => {
          if (member.get('onBoard') && member.get('secretary')) {
            member.set('type', 'Schriftführer');
            list.push(member);
          }
        });
        members.forEach((member) => {
          if (member.get('onBoard') && member.get('assessor')) {
            member.set('type', 'Beisitzer');
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

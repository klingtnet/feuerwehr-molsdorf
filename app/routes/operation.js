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
      members: this.get('store').findAll('member'),
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
    this.transitionTo('operation.timetable');
  }

});

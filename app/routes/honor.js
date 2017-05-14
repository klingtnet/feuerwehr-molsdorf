import Ember from 'ember';

export default Ember.Route.extend({

    store: Ember.inject.service(),

    model() {
        return Ember.RSVP.hash({
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
    }

});

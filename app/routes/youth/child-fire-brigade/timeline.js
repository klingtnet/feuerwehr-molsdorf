import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      challenges: [
        { date: '2008', subject: '15. Stadtausscheid der Stadt Erfurt', city: 'EF-Dittelstedt / EF-Büßleben', team: '2.', place: 1 },
        { date: '2008', subject: '15. Stadtausscheid der Stadt Erfurt', city: 'EF-Dittelstedt / EF-Büßleben', team: '1.', place: 6 },
        { date: '2009', subject: '16. Stadtausscheid der Stadt Erfurt', city: 'EF-Gispersleben', team: '2.', place: 2 },
        { date: '2009', subject: '16. Stadtausscheid der Stadt Erfurt', city: 'EF-Gispersleben', team: '1.', place: 4 },
        { date: '2010', subject: '17. Stadtausscheid der Stadt Erfurt', city: 'EF-Töttelstädt', team: null, place: 2 },
        { date: '2011', subject: '18. Stadtausscheid der Stadt Erfurt', city: 'EF-Töttelstädt', team: null, place: 2 },
        { date: '2012', subject: '19. Stadtausscheid der Stadt Erfurt', city: 'EF-Hochheim', team: '	Molsdorf/Möbisburg', place: 3 },
        { date: '2012', subject: '19. Stadtausscheid der Stadt Erfurt', city: 'EF-Hochheim', team: '	Molsdorf', place: 5 },
        { date: '2013', subject: '20. Stadtausscheid der Stadt Erfurt', city: 'EF-Schwerborn', team: null, place: null },
        { date: '2014', subject: '2. Pokalwettbewerb', city: 'Sonneberg (Thür.)', team: null, place: 1 },
        { date: '2014', subject: '21. Stadtausscheid der Stadt Erfurt', city: 'EF-Waltersleben', team: 'Molsdorf', place: 2 },
        { date: '2014', subject: '21. Stadtausscheid der Stadt Erfurt', city: 'EF-Waltersleben', team: 'Molsdorf/Marbach', place: null },
        { date: '2015', subject: '22. Stadtausscheid der Stadt Erfurt', city: 'EF-Johannesplatz', team: '1.', place: 2 },
        { date: '2015', subject: '22. Stadtausscheid der Stadt Erfurt', city: 'EF-Johannesplatz', team: '2.', place: 6 },
        { date: '2016', subject: '3. Pokalwettbewerb', city: 'Nägelstedt (Thür.)', team: null, place: null },
        { date: '2016', subject: '23. Stadtausscheid der Stadt Erfurt', city: 'EF-Bischleben', team: null, place: null },
        { date: '2016', subject: '23. Stadtausscheid der Stadt Erfurt', city: 'EF-Bischleben', team: null, place: null }
      ],
      football: [
        { date: '2007', ageclass: '0', place: 2 },
        { date: '2008', ageclass: '0', place: 2 },
        { date: '2009', ageclass: '0', place: 2 }
      ]
    });
  }

});

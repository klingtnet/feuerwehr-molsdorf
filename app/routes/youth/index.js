import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      youth_timetable: [
        { date: '05.01', time: '17.30 Uhr', description: 'Erste Hilfe Verbände' },
        { date: '19.01', time: '17.30 Uhr', description: 'Brennen und Löschen' },
        { date: '16.02', time: '17.30 Uhr', description: 'Fahrzeugkunde' },
        { date: '01.03', time: '17.30 Uhr', description: 'BWB' },
        { date: '15.03', time: '17.30 Uhr', description: 'BWB' },
        { date: '26.03', time: '17.30 Uhr', description: 'Osterfeuer' },
        { date: '12.04', time: '17.30 Uhr', description: 'BWB' },
        { date: '26.04', time: '17.30 Uhr', description: 'BWB' }
      ],
      youth_members: [
        { name: 'Schwabe Kristina', role: 'Jugendwart' },
        { name: 'Berlth Hannah', role: 'Mitglied' },
        { name: 'Berlth Finn', role: 'Mitglied' },
        { name: 'Farwick	Selina', role: 'Mitglied' },
        { name: 'Giegler	Ronja', role: 'Mitglied' },
        { name: 'Günther	Jonas', role: 'Mitglied' },
        { name: 'Heinemann	Julia', role: 'Mitglied' },
        { name: 'Heinemann	Sophia', role: 'Mitglied' },
        { name: 'Heinemann	Till', role: 'Mitglied' },
        { name: 'Heinz	Henry', role: 'Mitglied' },
        { name: 'Holbein	Lucas', role: 'Mitglied' },
        { name: 'Kieper Marco', role: 'Mitglied' },
        { name: 'Liebing	Clemens', role: 'Mitglied' },
        { name: 'Liebing	Michelle', role: 'Mitglied' },
        { name: 'Liebing	Max', role: 'Mitglied' },
        { name: 'Loos Julika Blomma', role: 'Mitglied' },
        { name: 'Mörtz	Sandra', role: 'Mitglied' },
        { name: 'Pöppich	Vivien', role: 'Mitglied' },
        { name: 'Thümmel	Maximilian', role: 'Mitglied' }
      ],
      child_timetable: [
        { date: '14.01', time: '10:00 Uhr', description: 'Knoten und Gerätekunde' },
        { date: '28.01', time: '10:00 Uhr', description: 'Fahrzeugkunde' },
        { date: '18.02', time: '10:00 Uhr', description: '5-W´s' },
        { date: '25.02', time: '10:00 Uhr', description: 'Erste Hilfe' },
        { date: '11.03', time: '10:00 Uhr', description: 'Knoten und Fragen' },
        { date: '18.03', time: '10:00 Uhr', description: 'Knoten und Gerätekunde' },
        { date: '01.04', time: '10:00 Uhr', description: 'Gruppenstafette' },
        { date: '08.04', time: '10:00 Uhr', description: 'Gruppenstafette' },
        { date: '15.04', time: '10:00 Uhr', description: 'Ostereier suchen' },
        { date: '22.04', time: '10:00 Uhr', description: 'Gruppenstafette' },
        { date: '29.04', time: '10:00 Uhr', description: 'Gruppenstafette' }
      ],
      child_members: [
        { name: 'Schwabe Ines', role: 'Kinderfeuerwehrwart' },
        { name: 'Brose	Johannes', role: 'Mitglied' },
        { name: 'Buntrock Frida', role: 'Mitglied' },
        { name: 'Grützmüller Lotta', role: 'Mitglied' },
        { name: 'Grützmüller Mika', role: 'Mitglied' },
        { name: 'Grützmüller Rufus', role: 'Mitglied' },
        { name: 'Liebing Leni Elena', role: 'Mitglied' },
        { name: 'Pöppich Travis Jamian', role: 'Mitglied' },
        { name: 'Schumann Linda', role: 'Mitglied' },
        { name: 'Zimmer Linus', role: 'Mitglied' }
      ],
      
    });
  }

});

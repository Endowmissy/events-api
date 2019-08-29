module.exports = (app) => {

    const events = require('../data/events.js');

    //Add a new event
    app.post('/events', events.create);

    //Retrieve all events
    app.get('/events', events.findAll);

}
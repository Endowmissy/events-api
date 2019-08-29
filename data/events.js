const events = {
    event1: {
        "name": "wedding",
        "time": "10am",
        "date": "26-10-2019",
        "location": "ibadan",
        "id": 1 
    },
    event2: {
        "name": "graduation",
        "time": "9am",
        "date": "15-11-2019",
        "location": "abuja",
        "id": 2
    },
    event3: {
        "name": "burial",
        "time": "2pm",
        "date": "26-12-2019",
        "location": "lagos",
        "id": 3
    }
}

exports.create = (req, res) => {
    const newEvent = req.body;
    events["event" + newEvent.id] = newEvent;
    res.send("Post Successfully: \n" + JSON.stringify(newEvent, null, 2));
};

exports.findAll = (req, res) => {
    res.send("All Events: \n" + JSON.stringify(events, null, 4));
};
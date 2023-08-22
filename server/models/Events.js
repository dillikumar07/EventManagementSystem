const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    event_name : String,
    category : String,
    event_date : String,
    event_date1 : String,
    event_time : String,
    venue : String,
    image : String,
    description : String,
    
})

const Eventsmodel = mongoose.model("events",EventSchema);
module.exports = Eventsmodel;



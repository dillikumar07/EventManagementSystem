const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    event_name : String,
    event_date : Date,
    event_time : String,
    venue : String,
    description : String,
    
})

const AppEventsmodel = mongoose.model("allevents",EventSchema);
module.exports = AppEventsmodel;
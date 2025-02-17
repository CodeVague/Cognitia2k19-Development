const mongoose = require("mongoose");
let roboticsSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    teamName: String,
    teamEmail: String,
    teamContact: String,
    teamCollege: String,
    teamLeader: String,
    teamMember1: String,
  

    events: {
        event1: String,
        event2: String,
    }

});

module.exports = mongoose.model("quizDebateTeam", roboticsSchema);
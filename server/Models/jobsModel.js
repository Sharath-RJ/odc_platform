const mongoose = require("mongoose")

const Schema = mongoose.Schema

const jobModel = new Schema({
    jobName: String,
    Description: String,
    noOfApplicants: Number,
    jobCreatedDate: Date,
    hotel: { type: Schema.Types.ObjectId, ref: "hotel" },
    salary: Number,
    department: String,
    users: [{ type: Schema.Types.ObjectId, ref: "Users" }],//update present true
})

const jobs = mongoose.model("jobs", jobModel)

module.exports = jobs

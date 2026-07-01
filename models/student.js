const mongoose = require("mongoose");

// Create Student Schema
const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },

    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    course: {
        type: String,
        required: true
    },

    marks: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    }

},
{
    timestamps: true
});

// Create Model
const Student = mongoose.model("Student", studentSchema);

// Export Model
module.exports = Student;
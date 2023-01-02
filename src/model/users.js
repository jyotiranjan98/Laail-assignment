const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        Name: {type: String, required: true},
        MobileNumber:{type: Number, required: true},
        Gender: {type: String, required: true},
        Email: {type: String, required: true}
    },
    {
        timestamps: true,
        versionKey: false
    }
)



module.exports = new mongoose.model("user", userSchema)
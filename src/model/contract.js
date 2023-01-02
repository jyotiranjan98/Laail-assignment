const mongoose = require("mongoose")

const contractSchema = new mongoose.Schema(
    {
        LenderId:{ type: String, required: true},
        BorrowerId:{ type: String, required: true},
        Principle:{ type: Number, required: true},
        Interest:{ type: Number, required: true},
        LoanStartDate:{ type: Date,default:Date.now, required:true},
        LoanDueDate:{ type: Date,default:Date.now, required:true},
        IsRepaid: {type: String, required: true},
       
    },
    {
        timestamps: true,
        versionKey: false
    }
)



module.exports = new mongoose.model("contract", contractSchema)
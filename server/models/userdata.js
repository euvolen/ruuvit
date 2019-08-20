import mongoose, { Schema } from 'mongoose'

const userdataSchema = new Schema({
    primary_dataset: [String],
    advanced_dataset: [String],
    user: 
        {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }

}, {
        timestamps: true
    })


const Userdata = mongoose.model('userdata', userdataSchema)

export default Userdata
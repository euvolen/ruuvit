import mongoose, { Schema } from 'mongoose'

const notificationsSchema = new Schema({
    message:String,
    read:Boolean,
    user: 
        {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }

}, {
        timestamps: true
    })


const Notifications = mongoose.model('notifications', notificationsSchema)

export default Notifications
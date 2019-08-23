import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcryptjs'
import gravatar from 'gravatar'
const userSchema = new Schema({
    email: {
        type: String,
        validate: {
            validator: async email => User.doesntExist({ email }),
            message: () => `Email has been already taken`
        }

    },
    firstname: String,
    lastname: String,
    status: String,
    phone:String,
    address:String,
    company:String,
    password: String,
    rp_address: String,
    doctor: 
        {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
    avatar:String,
    userdata: 
        {
            type: Schema.Types.ObjectId,
            ref: 'userdata'
        },
    role: {
        type: String,
        default: 'user'
    },
    isVerified: {
        type: Boolean,
        default: false
    }

}, {
        timestamps: true
    })


//Creates static methods for all collection
userSchema.statics.doesntExist = async function (opts) {
    return await this.where(opts).countDocuments() === 0
}
//Creates methods for entity of a collection
userSchema.methods.matchesPassword = function (password) {
    return bcrypt.compare(password, this.password)
}

//Uses hook 'save' and hashes password string authomatically  
userSchema.pre('save', async function () {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    this.avatar = gravatar.url(this.email, {s:'35',r:'pg' })
})

const User = mongoose.model('users', userSchema)

export default User
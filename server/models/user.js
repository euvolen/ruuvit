import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    email: {
        type: String,
        validate: {
            validator: async email => User.doesntExist({ email }),
            message: () => `Email has been already taken`
        }

    },
    name: String,
    status: String,
    affilation:String,
    password: String,
    abstracts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'abstracts'
        }],
    abstract: 
        {
            type: Schema.Types.ObjectId,
            ref: 'abstracts'
        },
    role: {
        type: String,
        default: 'participant'
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
})

const User = mongoose.model('users', userSchema)

export default User
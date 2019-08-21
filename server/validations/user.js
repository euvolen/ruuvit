import Joi from 'joi'

const email = Joi.string().email().required().label('Email')
const firstname = Joi.string().max(256).required().label('Name')
const lastname = Joi.string().max(256).required().label('Name')
const affilation = Joi.string().max(256).required().label('Affilation')
const status = Joi.string().max(256).required().label('Status')

const password = Joi.string().min(6).max(50).regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d).*$/)
.required().label('Password').options({
language:{
    string:{
        regex:{
            base: 'must have at least one lowercase land uppercase letter, and one digit'
        }
    }
}
})
export const signUp = Joi.object().keys({
    email, firstname, lastname, password, 
})
export const signIn = Joi.object().keys({
    email, password
})

import mongoose from 'mongoose'
import {credentials} from './credentials'

const {user, password, host, name, port} = credentials

// Connects db
export const connect = () => {
    return new Promise((resolve, reject) => {mongoose.connect(`mongodb://${user}:${password}@${host}:${port}/${name}`, {useNewUrlParser:true, useFindAndModify:false})
    .then((res, err) => {
        if(err) return reject(err)
        console.log(`DB ${name} connected`)
        resolve();
    })
})
}
// Disconnects db
export const close = () => {
    return new Promise((resolve, reject) => {mongoose.disconnect()
    .then((res, err) => {
        if(err) return reject(err)
        console.log(`DB ${name} disconnected`)
        resolve();
    })
})
}
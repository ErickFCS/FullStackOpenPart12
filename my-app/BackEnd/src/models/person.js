import mongoose from 'mongoose'
import 'dotenv'

const uri = process.env.BACKEND_URI || ''
mongoose.connect(uri)
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))

const personSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        required: true
    },
    number: {
        type: String,
        required: true,
        validate: { validator: (v) => (/(^\+\d{1,3}[ -]\d{1,3}[ -]\d{1,3}|^\+\d{1,3}[ -]\d{1,6}|^\+\d{1,9}|^\d{1,3}[ -]\d{1,3}|^\d{1,6}|^)[ -]?\d{4}[ -]?\d{4}$/.test(v)) }
    },
})

personSchema.set('toObject', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const person = mongoose.model('persons', personSchema)

export default person
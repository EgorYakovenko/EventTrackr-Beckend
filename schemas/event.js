import mongose from 'mongoose'
import Joi from "joi";

import { mongooseError } from '../helpers/mongooseError.js';

const {Schema, model} = mongose

const eventSchema = new Schema ({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    event_date: {
        type: Date
    },
    organizer: {
        type: String
    }
})

eventSchema.post('save', mongooseError);

export const Event = model('event', eventSchema)

// export const createEventSchema = Joi.object({

// })

// export const updateContactSchema = Joi.object({

// })
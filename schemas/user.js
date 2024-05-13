import mongoose from 'mongoose';
import Joi from 'joi';
import { mongooseError } from '../helpers/mongooseError.js';

const { Schema, model } = mongoose;

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, 'Name is required'],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, 'Email is required'],
      unique: true,
    },
    date: {
      type: Date,
    },
  },
  { versionKey: false, timeseries: true }
);

userSchema.post('save', mongooseError);

export const registerSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().pattern(emailRegexp).required(),
  date: Joi.date(),
});

export const User = model('user', userSchema);

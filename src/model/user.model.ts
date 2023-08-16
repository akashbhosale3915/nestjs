import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email address cannot be empty'],
    unique: true,
    validate: [isEmail, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password cannot be empty'],
    minLength: [8, 'Password must be at least 8 characters'],
    select: false,
  },
  fname: {
    type: String,
    required: [true, 'Please enter first name'],
  },
  lname: {
    type: String,
    required: [true, 'Please enter last name'],
  },
  mobile: {
    type: Number,
    required: [true, 'Mobile number cannot be empty'],
    minLength: [10, 'Please enter a valid Mobile number'],
    maxLength: [10, 'Please enter a valid Mobile number'],
  },
  resetPasswordToken: String,
  resetpasswordExpire: Date,
});

export const user = mongoose.model('User', userSchema);

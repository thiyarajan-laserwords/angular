import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {type: String, index: true, required: [true, 'Required Field']},
    firstname: {type: String, required: [true, 'Required Field']},
    middlename: {type: String, default: ''},
    lastname: {type: String, required: [true, 'Required Field']},
    email: {type: String, required: [true, 'Required Field'], index: true},
    phoneNumber: {type: String},
    gender: {type: String, enum: ['male', 'female'], required: [true, 'Required Field']},
    city: {type: String, required: [true, 'Required Field']},
    country: {type: String, required: [true, 'Required Field']},
    role: {type: String, enum: ['admin', 'visitor'], required: [true, 'Required Field']}
});

export default mongoose.model('User', userSchema);

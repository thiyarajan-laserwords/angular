import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {type: String, index: true, required: [true, 'Required Field']},
    firstname: {type: String, required: [true, 'Required Field']},
    middlename: {type: String, default: ''},
    lastname: {type: String, required: [true, 'Required Field']},
    email: {type: String, required: [true, 'Required Field'], index: true},
    password: {type: String, required: [true, 'Required Field']},
    phoneNumber: {type: String, default: ''},
    gender: {type: String, enum: ['male', 'female'], default: 'male'},
    city: {type: String, default: ''},
    country: {type: String, default: ''},
    role: {type: String, enum: ['admin', 'visitor'], default: 'visitor'}
},{timestamps: true});

export default mongoose.model('User', userSchema);

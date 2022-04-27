const mongoose = require('mongoose'); // 몽구스 가져오기

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    age: {
        type: Number,
        required: true,
    },

    married:{
        type: Boolean,
        required: true,
    },

    comment: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const model = mongoose.model('User', userSchema); 

const Hyojin = new model({
    name : "효진",
    age: 22,

});

Hyojin.save();

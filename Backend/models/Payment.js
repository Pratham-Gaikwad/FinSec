// const mongoose = require('mongoose');

// const PaymentSchema = new mongoose.Schema({
//     payment_id: {
//         type: String,
//         required: true
//     },
//     amount: {
//         type: Number,
//         required: true
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     },
//     reciver: {
//         type: String,
//         required: true
//     },
//     sender: {
//         type: String,
//         required: true
//     }
// });

// const Payment = mongoose.model('Payment', PaymentSchema);

// module.exports = Payment;

const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const PaymentSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    Location : {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    reciver_id: {
        type: Number,
        required: true
    },
    sender_id: {
        type: Number,
        required: true
    }
});

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;
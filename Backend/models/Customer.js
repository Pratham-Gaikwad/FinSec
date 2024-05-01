const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    payments: [{type: mongoose.Schema.Types.ObjectId,
        ref:"Payment"}],
    country: {
        type: String,
        required: true
    },
    Dti: {
        type: String,
        required: true
    },
    CreditScore: {
        type: String,
        required: true
    },
    LAR: {
        type: String,
        required: true
    },
    EmpStatus: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
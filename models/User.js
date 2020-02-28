const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
});

userSchema.statics.hashPassword = (password) => {
    return bcrypt.hashSync(password, 10);
}

userSchema.methods.isValid = (hashedPassword, password) => {
    console.log('model = ', password, hashedPassword);
    return bcrypt.compareSync(password, hashedPassword);
}

module.exports = mongoose.model('User', userSchema);
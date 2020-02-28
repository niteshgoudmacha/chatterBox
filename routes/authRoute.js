const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.post('/register',  async (req, res) => {
    const { email, username } = req.body;
    const user = new User({
        email,
        username,
        password: User.hashPassword(req.body.password),
        createdDate: Date.now()
    });

    try {
        let userRecord = await user.save();
        console.log(userRecord);
        return res.send(userRecord);
    } catch(err) {
        console.log(err);
        return res.status(501).json({message: "error registering user"});
    }
});

router.post('/login', async (req, res) => {
    console.log(req.body);
    try {
        const user = await User.findOne({email: req.body.email});
        console.log('user = ', user);
        if(!user) {
            return res.status(404).json({message: "User is not registered"});
        }
        console.log('user = ', user);
        if(user.isValid(user.password, req.body.password)) {
            //generate token
            console.log('true--');
            const token = jwt.sign({username: user.username}, 'secret', { expiresIn: '3h'});
            return res.status(200).json(token);
        }
        else {
            return res.status(404).json({message: "Invalid Credentials"});
        }
    } catch(error) {
        console.log('error', error);
        return res.status(501).json({ message: "Internal Server Error"});
    }
    
});

router.get('/username', verifyToken, (req, res, next) => {
    return res.status(200).json(decodedToken.username);
});

var decodedToken = '';
function verifyToken(req, res, next) {
    var token = req.query.token;
    jwt.verify(token, 'secret', (err, tokenData) => {
        if(err) {
            return res.status(400).json({message: 'Unauthorized request'});
        }
        if(tokenData) {
            decodedToken = tokenData;
            
        }
        next();
    });
}

module.exports = router;
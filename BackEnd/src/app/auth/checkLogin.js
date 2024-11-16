const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.cookies.token;
    // console.log(token);

    if(!token) return res.status(401).json({
        status: false,
        msg: 'Please login first'
    });

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
        if (err) return res.status(401).json({
            status: false,
            msg: 'Token is invalid!',
        })
        req.userData = data;
        // console.log(data);
        next();
    })
}
const jwt = require('jsonwebtoken')

const protect = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]

    console.log(req.headers.authorization)
    if (!token) {
        res.status(403).json({
            message: "you don't have token ",
            status: "Error"
        });
        return;
    }

    const Deco = jwt.verify(token, process.env.Jwt_SEC, (error, data) => {
        if (error) {

            res.status(403).json({
                message: "you are not token",
                status: "Error"
            });
            return
        }
        return data;
    })
  
    req.Users = Deco.Users;

    next()
}

module.exports = {
    protect
}
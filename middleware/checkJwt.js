import jwt from "jsonwebtoken";

const checkJwt = (req, res, next) => {
    try {
        jwt.verify(req.headers.auth, process.env.SECRET);
        next();
    } catch (error) {
        res.sendStatus(401);
    }
}

export default checkJwt;
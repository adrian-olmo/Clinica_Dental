import jwt from "jsonwebtoken";

const checkJwt = (req, res, next) => {
    try {
        jwt.verify(req.headers.token, process.env.TOKEN);
        next();
    } catch (error) {
        res.sendStatus(401);
    }
}

export default checkJwt;
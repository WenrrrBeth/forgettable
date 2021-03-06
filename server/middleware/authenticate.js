import jwt from "jsonwebtoken";

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const customAuth = token.length < 500;

        let decodedPayload;

        if(token && customAuth) {
            decodedPayload = jwt.verify(token, process.env.JWT_SECRET); // decoded payload 
            req.profileId = decodedPayload?.id;
        } else {
            decodedPayload = jwt.decode(token); // decoded payload without varified signature
            req.profileId = decodedPayload?.sub;
        }
        next();
    } catch (error) {
        console.log(error)
    }
}

export default authenticate;

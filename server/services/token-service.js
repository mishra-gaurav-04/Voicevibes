const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const createError = require('http-errors');

dotenv.config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

const signAccessToken = (userId) => {
    return new Promise((resolve, reject) => {
        const payload = {};
        const options = {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRE,
            issuer: 'localhost',
            audience: userId
        }
        jwt.sign(payload, accessTokenSecret, options, (err, token) => {
            if (err) {
                console.log(err);
                return reject(createError.InternalServerError());
            }
            resolve(token);
        })
    })
}
const signRefreshToken = (userId) => {
    return new Promise((resolve, reject) => {
        const payload = {};
        const options = {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
            issuer: 'localhost',
            audience: userId
        }
        jwt.sign(payload, refreshTokenSecret, options, (err, token) => {
            if (err) {
                console.log(err);
                reject(createError.InternalServerError());
            }
            resolve(token);
        })
    })
}

const verifyAccessToken = async (req, res, next) => {
    if (!req.headers['authorization']) {
        return next(createError.Unauthorized());
    }
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];
    jwt.verify(token, accessTokenSecret, (err, payload) => {
        if (err) {
            const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message;
            return next(createError.Unauthorized(message));
        }
        req.payload = payload;
        next();
    })
}

const verifyRefreshToken = async (req, res, next) => {

}

module.exports = {
    signAccessToken,
    signRefreshToken,
    verifyAccessToken
}
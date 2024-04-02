const User = require('../models/User');
const createError = require('http-errors');
const { registerSchema } = require('../utils/validation/authSchema');
const { signAccessToken, signRefreshToken } = require('../services/token-service');
const {get_user_data} = require('../utils/userData');

exports.register = async (req, res, next) => {
    try {
        const result = await registerSchema.validateAsync(req.body);
        const existingUser = await User.findOne({ $or: [{ email: result.email }, { username: result.userName }] });
        if (existingUser) {
            throw createError.Conflict('Email or Username is already in use');
        }
        const newUser = await User.create(result);

        const accessToken = await signAccessToken(newUser.id);
        const refreshToken = await signRefreshToken(newUser.id);

        res.cookie('accessToken',accessToken,{
            maxAge : new Date(Date.now()+60*60*1000),
            httpOnly : true
        })

        res.cookie('refreshToken',refreshToken,{
            maxAge : new Date(Date.now()+24*60*60*1000),
            httpOnly : true
        })
        const userData = get_user_data(newUser);
        res.status(201).json({
            userData
        })
    }
    catch (error) {
        if (error.isJoi === true) {
            error.status = 422;
        }
        next(error);
    }
};
exports.login = async (req, res, next) => { };
exports.refresh = async (req, res, next) => { };
exports.logout = async (req, res, next) => { }; 

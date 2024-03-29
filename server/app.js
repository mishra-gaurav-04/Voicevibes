const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const morgan = require('morgan');
const createError = require('http-errors');
const connectDB = require('./config/init_db');
const userRoutes = require('./routes/user.routes');
const app = express();

dotenv.config();

const PORT = process.env.PORT;
const MONGOURI = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));

// routes
app.use('/api/v1/user',userRoutes);

app.use(async(req,res,next) => {
    next(createError.NotFound());
})

app.use(async(err,req,res,next) => {
    res.status(err.status || 500).send({
        status : err.status || 500,
        message : err.message
    })
});

const startServer = () => {
    connectDB(MONGOURI)
    .then((conn) => {
        console.log('Database connected')
        app.listen(PORT,() => {
            console.log(`Server started at port :: ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })
};

startServer();
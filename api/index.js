const express = require('express')
const app = express()
const PORT = process.env.PORT || 8985
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')

require('dotenv').config()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to mongoDB
mongoose.connect(process.env.MONGO_DB_HOST).then(() => 
console.log('Connected to MongoDB'))
.catch(err => console.log(err));


app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

app.use('/api/posts', postRoute);
 
app.listen(PORT, () => console.log(`Blog app listening on port ${PORT}!`))
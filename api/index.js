const express = require('express')
const app = express()
const PORT = process.env.PORT || 8985
const dotenv = require('dotenv')
const mongoose = require('mongoose')

require('dotenv').config()

// connect to mongoDB
mongoose.connect(process.env.MONGO_DB_HOST, {
    useNewUrlParser: true,  // new url parser
    useUnifiedTopology: true, // new topology
}).then(() => {
    console.log('Connected to MongoDB')
}
).catch(err => {
    console.log(err)
});


app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api/v1', (req,res) => {
    res.json({
        message: 'Welcome to the API',
        version: '1.0.0',
        "appname": "Blog API",
        "description": "This is a simple blog API",
        "author": "Ankitjha-Webdev",
        "email": "ankitkumarcse91@gmail.com",
        "github": "https://github.com/ankitjha-webdev/blog-app.git",
    }).status(200) // 200 is the status code for success
})

app.listen(PORT, () => console.log(`Blog app listening on port ${PORT}!`))
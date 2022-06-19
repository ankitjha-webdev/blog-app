const express = require('express')
const app = express()
const PORT = process.env.PORT || 8985
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')
const multer = require('multer')
const path = require('path')
var cors = require('cors')

app.use(cors());

require('dotenv').config()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "/images")));

// connect to mongoDB
mongoose.connect(process.env.MONGO_DB_HOST).then(() => 
console.log('Connected to MongoDB'))
.catch(err => console.log(err));

const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, './images')
    }, filename: (req, file, cb) =>{
        cb(null, req.body.name + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})
app.post('/api/upload', upload.single("file"), (req, res) =>{
    res.status(200).json("File uploaded successfully to /images folder on server side ")
}) 
app.get('/', async (req, res) =>{
    res.send('Hello World')
})
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

app.use('/api/posts', postRoute);

app.use('/api/categories', categoryRoute);

// route for 404 on server
app.use((req, res, next) =>{
    res.status(404).send({
        message: "Could not find specified route requested...!",

    })
})

app.listen(PORT, () => console.log(`Blog app listening on port ${PORT}!`))
import express from './express'
import cors from './cors'
import mongoose  from 'mongoose'

const app = express()
const port = 8080;

app.use((cors)({
    origin: "http://localhost:5174"
}))

mongoose.connect("mongodb://127.0.0.1:27017/booksDB")
.then(()=> app.listen(port, ()=> console.log("Server started at port " + port)))

app.use(express.urlencoded({extended : true}));
app.use (express.json())

const bookSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    author:{
        type: String,
        required: true
    },
    genre:{
        type: Number,
        required: true
    }
})

const bookModel = mongoose.model ("bookInfo", bookSchema, "")
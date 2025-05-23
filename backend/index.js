import express from "express"
import cors from "cors"
import mongoose from "mongoose"
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

// getting-started.js



async function main() {
    await mongoose.connect('mongodb+srv://elnuraasbf206:elnuraasbf206@cluster0.o4iqras.mongodb.net/');
    
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const DataSchema = new mongoose.Schema({
    name: String,
    image:String,
    price:Number
});
const Blog = mongoose.model('Products', DataSchema);
app.get('/vegetables', async(req, res) => {
    const data = await Blog.find()
    res.send(data)
})
app.get('/vegetables/:id', async(req, res) => {
    const {id}=req.params
    const data = await Blog.findById(id)
    res.send(data)
})
app.post('/vegetables', async(req, res) => {
    const {body}=req
    const data = await Blog.create(body)
    res.send(data)
})
app.delete('/vegetables/:id', async(req, res) => {
    const {body}=req
    const {id}=req.params
    const data = await Blog.findByIdAndDelete(id,body)
    res.send(data)
})


main().catch(err => console.log(err));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

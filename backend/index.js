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
    name: String
});
const Blog = mongoose.model('Products', DataSchema);
app.get('/products', async(req, res) => {
    res.send('Hello World!')
})

main().catch(err => console.log(err));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

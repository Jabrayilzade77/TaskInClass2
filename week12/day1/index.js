import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express()
const port = 3000


app.use(cors())
app.use(express.json())


const ProductsSchema = new mongoose.Schema({
    title: String,
    image:String,
    price: Number,
  });


const ProductsModel = mongoose.model('products', ProductsSchema);

app.get('/yusif', async(req, res) => {

    const products =await ProductsModel.find();

  res.send(products)
})

app.get('/yusif/:id', async(req, res) => {
    const {id} = req.params

    const products =await ProductsModel.findById(id);

  res.send(products)
})

app.post('/yusif', async(req, res) => {

    const obj = req.body

    const products =new ProductsModel(obj);

    await products.save();

  res.send(products)
})

app.put('/yusif/:id', async(req, res) => {
    const {id} = req.params
    const obj = req.body

    const products = await ProductsModel.findByIdAndUpdate(id,obj);

  res.send(products)
})






app.delete('/yusif/:id', async(req, res) => {
    const {id} = req.params

    const products =await ProductsModel.findByIdAndDelete(id);

  res.send(products)
})

mongoose.connect('mongodb+srv://yusif:yusif@yusif.5usnncq.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
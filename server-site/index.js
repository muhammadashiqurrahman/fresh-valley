const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb');
const cors = require('cors')
require('dotenv').config()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.o15xl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
app.get('/', (req, res)=>{
    res.send("Hello World")
})
//database connection
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const productCollections = client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION);
    console.log("Database Connected Successfully")

    app.post('/AddProduct', (req, res) => {
        const product = req.body;
        console.log(product)
        productCollections.insertMany(product)
            .then(result =>  {
                console.log(`Successfully inserted ${result.insertedId}`)
                res.send(result.insertedId)
        })
            .catch(err => console.log(`Field to error ${err}`))
    })

    app.get('/products', (req, res)=>{
        productCollections.find({})
            .toArray((err, documents) =>{
                res.send(documents);
            })

    })


    // client.close();
});

const port = 8080;
app.listen(port, () => {
    console.log(`App Listening http://localhost:${port}`)
})

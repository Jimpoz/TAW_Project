/**
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());

const CONNECTION_STRING = "mongodb+srv://jimpo:cYqBwOpvQ7AcnP6k@taw-project.tgmtibt.mongodb.net/?retryWrites=true&w=majority";

const DATABASE = "taw-project";

mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => {
  console.log("MongoDB connection successful");
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});

// Define Schema for your collection
const genericSchema = new mongoose.Schema({}, { strict: false });

// Define your Model
const GenericModel = mongoose.model("GenericModel", genericSchema);

app.get('/testGet', async (request, response) => {
    console.log("Received GET request for /testGet");
    try {
        const data = await GenericModel.find({});
        console.log(data);
        response.json(data); // Sending data as JSON response
    } catch (error) {
        console.error("Error occurred:", error);
        response.status(500).json({ error: "An error occurred while fetching data" });
    }
});

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

*/
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jimpo:cYqBwOpvQ7AcnP6k@taw-project.tgmtibt.mongodb.net/?retryWrites=true&w=majority&appName=taw-project";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
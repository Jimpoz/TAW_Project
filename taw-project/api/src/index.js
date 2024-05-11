var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors=require("cors");
const multer=require("multer");

var app=Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://jimpo:<passwors>@taw-project.tgmtibt.mongodb.net/?retryWrites=true&w=majority&appName=taw-project";

var DATABASE="taw-project";
var database;

app.listen(5038, () => {
    Mongoclient.connect(CONNECTION_STRING, (error, client) => {
        database = client.db(DATABASE);
        console.log("MongoDB connection successful");
    });
});

app.get('/app/tawproject/getsomething', (request, response) => {
    console.log("Received GET request for /app/tawproject/getsomething");
    database.collection("tawcollection").find({}).toArray((error, result) => {
        if (error) {
            console.error("Error querying database:", error);
            response.sendStatus(500); // Internal Server Error
            return;
        }
        response.json(result);
    });
}); 

app.get('/', (req, res) => {
    res.send("Hello, world!");
});
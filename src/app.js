const express = require("express");
require("./db/connec");
const Contact = require("./model/contacts")
const app = express();
const router = require("../routes/router")

const port = process.env.PORT || 8000; 

app.set("view engine", "views")
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(router);


app.listen(port, ()=>{
    console.log(`connected to the port ${port}`);
})
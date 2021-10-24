const express = require("express");
require("./db/connec");
const Contact = require("./model/contacts")
const app = express();
const appRoutes = require("../routes/router")

const port = process.env.PORT || 8000; 

app.set("view engine", "views")
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/', appRoutes);


app.listen(port, ()=>{
    console.log(`connected to the port ${port}`);
})
const express = require("express");
const Contact = require("../src/model/contacts");
const router = new express.Router();
const path = require("path");
const fs = require("fs")

const replaceData = (htmlFile, data)=>{
    let mainData = htmlFile.replace("{%tableData%}", data);
    return mainData;
}

router.post("/contacts", async (req, res)=>{
    try{
        const contactReg = new Contact({
            name:req.body.fname,
            phone:req.body.fnum,
            email:req.body.femail
        })
        
        const contactData = await contactReg.save();
        res.status(201).send(contactData);
    }catch(err){
        res.status(400).send(err);
    }
    
})

router.get("/insert", async(req, res)=>{
    res.sendFile(path.join(__dirname+"/../views/insert.html"))
})

router.get("/contacts", async (req, res) => {
    let mongoData = ""
    try{
        const getData = await Contact.find();
        getData.forEach((element, index)=>{

            mongoData += `<form action="/delete/${element.name}" method="POST"> <tr>
                                <td>${index}</td>
                                <td>${element.name}</td>
                                <td>${element.phone}</td>
                                <td>${element.email}</td>
                                <td><button type="submit" id="${index}" class="btn btn-dark">Delete</button></td>
                            </tr> </form>`
        })
        let htmlData = fs.readFileSync(__dirname+"/../views/clist.html", "utf-8");
        res.write(replaceData(htmlData, mongoData));
        res.status(201).send()
        
    }catch(err){
        console.log(err);
    }
})

router.post("/delete/:name", async(req, res) =>{
    try{
        const name = req.params.name;
        
        await Contact.deleteOne({name:name});
        res.status(201).send(`${name} is deleted successfully..`);


    }catch(err){
        res.status(400).send(`There is an error: ${err}`);
    }
    
})

module.exports = router;
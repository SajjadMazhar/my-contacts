const express = require("express");
const controllers = require("../controller/controllers");
const router = new express.Router();

router.post("/contacts", controllers.postContact);

router.get("/insert", controllers.insertData)

router.get("/contacts", controllers.getContacts)

router.post("/delete/:name", controllers.deleteContact)

module.exports = router;
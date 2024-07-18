const express = require("express");
const router = express.Router();

const web_controller = require("./../controller/web.controller")
router.get("/",web_controller.product_get);
router.get('/product/new', web_controller.form_new);
router.post('/product', web_controller.save_product);
router.delete('/product/:id', web_controller.delete_product);

module.exports = router;
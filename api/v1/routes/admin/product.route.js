const express = require("express")
const router = express.Router();
const controller = require("../../controllers/admin/product.controller");

router.get("/", controller.index)

router.get("/detail/:id", controller.detail)

router.patch("/change-status/:id", controller.changeStatus)

router.post("/create", controller.create)

router.patch("/edit/:id", controller.edit)

router.delete("/delete/:id", controller.delete)

module.exports = router;
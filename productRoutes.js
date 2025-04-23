import express from "express";
import {
  getAllProducts,
  createProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProduct); // you can add auth middleware here later

export default router;

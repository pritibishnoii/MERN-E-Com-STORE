import express from "express";
import {
  createCategory,
  listCategory,
  readCategory,
  removeCategory,
  updateCategory,
} from "../controllers/categoryController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.route("/").post(authenticate, authorizeAdmin, createCategory);
router
  .route("/:categoryId")
  .all(authenticate, authorizeAdmin)
  .put(updateCategory)
  .delete(removeCategory);

router.route("/categories").get(authenticate, authorizeAdmin, listCategory);
router.route("/:id").get(readCategory);
export default router;

import express from "express";
import { contactUs } from "../controllers/Contact.js";

const router = express.Router();

router.post("/Comment", contactUs);

export default router;

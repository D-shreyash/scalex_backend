import express from "express";
import { getdata, setPrice } from "../controlers/PriceControlers.js";

const router = express.Router();

router.post("/dojo", setPrice);
router.get("/getdata", getdata);

export default router;

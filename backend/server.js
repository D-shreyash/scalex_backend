import express from "express";
import PricingRoute from "./routes/PicingRoute.js";
import connectToMongodb from "./config/ConnnectToMongodb.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`server started at prort 4000`);
});

app.use("/pricing", PricingRoute);

app.listen(4000, () => {
  connectToMongodb();
  console.log("server stated");
});

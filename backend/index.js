import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import ArticleRoute from "./routes/ArticleRoute.js";
import ContactRoute from "./routes/contactRoute.js";
import PointRoute from "./routes/PointRoute.js";
import SampahRoute from "./routes/SampahRoute.js";
import UserRoute from "./routes/UserRoute.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use(UserRoute);
app.use(SampahRoute);
app.use(ContactRoute);
app.use(ArticleRoute);
app.use(PointRoute);
app.listen(5000, () => console.log("Server up and running..."));

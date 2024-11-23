import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import SampahRoute from "./routes/SampahRoute.js";
import UserRoute from "./routes/UserRoute.js";
import ContactRoute from "./routes/contactRoute.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(UserRoute);
app.use(SampahRoute);
app.use(ContactRoute);
app.listen(5000, () => console.log("Server up and running..."));

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

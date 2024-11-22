import cors from "cors";
import express from "express";
import SampahRoute from "./routes/SampahRoute.js";
import UserRoute from "./routes/UserRoute.js";
import ContactRoute from "./routes/contactRoute.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(SampahRoute);
app.use(ContactRoute);
app.listen(5000, () => console.log("Server up and running..."));

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

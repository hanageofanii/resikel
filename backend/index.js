import cors from "cors";
import express from "express";
import UserRoute from "./routes/UserRoute.js";
import sampahRoutes from "./routes/SampahRoute";
import contactRoutes from "./routes/contactRoute";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use("/api/sampah", sampahRoutes);
app.use("/api/contact", contactRoutes);
// app.listen(5000, () => console.log("Server up and running..."));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

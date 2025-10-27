import express from "express";
import cors from "cors";
import { animalsRoute } from "./routes/animals";

const app = express();


app.use(cors())
app.use(express.json());

app.use("/api/animals", animalsRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`API Motizou running on http://localhost:${PORT}`));

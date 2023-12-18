import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";

import { appConfig } from "./config/appConfig.js";
import { aiController } from "./controllers/aiController.js";

const app = express();
app.use(
  cors({
    origin: appConfig.corsConfig.origin,
    methods: appConfig.corsConfig.methods,
    allowedHeaders: ["Content-Type", "application/json"],
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT;

// Configure multer for handling multipart/form-data
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// Get Gemini API Response
app.post("/chat-with-gemini", upload.array("image", 4), aiController);

// App listening
app.listen(PORT, () => {
  console.log("Gemini AI Server is listening on port number", PORT);
});

import express, { Request, Response } from "express";
import { config } from "dotenv";
import path from "path";
import router from "./routes";

config();

const app = express();
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

const baseDirectory = path.resolve(__dirname, ".");
app.use(express.static(path.join(baseDirectory, "dist")));

app.use("/api/v1/", router);

const { PORT } = process.env;

app.get("*", (_: Request, res: Response) => {
  res.sendFile(path.join(baseDirectory, "/dist/index.html"));
});

app.listen(PORT, () => {
  console.log("Server running at port:", PORT);
});

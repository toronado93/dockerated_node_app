import { Request, Response } from "express";
import express from "express";
const port = "3960";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Main PAGE");
});
app.get("/test", (req: Request, res: Response) => {
  res.send("Test Page");
});

app.listen(port, () => {
  console.log("Server is running on port 3960");
});

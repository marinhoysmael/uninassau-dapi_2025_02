import express from "express";

import { userController } from "./controllers/userController.js";
import { messageController } from "./controllers/messageController.js";

const PORT = 3000;
const app = express();

app.use(express.json());

app.use("/users", userController);
app.use("/messages", messageController)

app.listen(PORT, () => {
  console.log("Servidor executando na porta ", PORT);
});
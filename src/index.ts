import exppress from "express";
import userRouter from "./routes/users";

const app = exppress();

app.use("/api/users", userRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Runing on port ${PORT}`);
});

import exppress from "express";
import userRouter from "./routes/users";

export function createApp() {
  const app = exppress();

  app.use("/api/users", userRouter);
  return app;
}

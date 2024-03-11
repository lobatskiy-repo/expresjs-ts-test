import exppress from "express";

const app = exppress();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Runing on port ${PORT}`);
});

const express = require ("express");
const app = express();
const PORT = 3000;

const postsRouter = require ("./routers/posts");

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`App listening in the port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Blog routing");
})

app.use("/posts", postsRouter);
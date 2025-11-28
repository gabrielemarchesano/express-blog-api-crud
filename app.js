const express = require("express");
const app = express();
const PORT = 3000;

const postsRouter = require("./routers/posts");
const notFound = require("./middlewares/notFound");

app.use(express.static("public"));

app.use(express.json());

app.use("/posts", postsRouter);


app.listen(PORT, () => {
  console.log(`App listening in the port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Blog routing");
})

app.use(notFound);

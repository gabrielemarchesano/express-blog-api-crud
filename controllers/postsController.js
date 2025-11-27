const posts = require ("../data/blogData");
const { post } = require("../routers/posts");

function index(req, res){
  res.json(posts);
}

function show(req, res){
  res.json(posts.find((post) => Number(req.params.id) === post.id
  ));
}

function store(req, res){
  res.send("Creazione post");
  console.log(req.body);

  const newPost = req.body;
  /* console.log(newPost); */

  posts.push(newPost);
  console.log(posts);
}

function update(req, res){
  /* res.send("Modifica di un post"); */
  const id = Number(req.params.id);
  const foundPost = posts.find((post) => post.id === id);

  foundPost.title = req.body.title;
  foundPost.content = req.body.content;
  foundPost.image = req.body.image;
  foundPost.tags = req.body.tags;

  console.log(posts);
  res.json(foundPost);
}

function destroy(req, res){
  const foundPost = posts.find((post) => post.id === Number(req.params.id));

  /* console.log(foundPost); */

  /* console.log(posts.indexOf(foundPost)); */
  posts.splice(posts.indexOf(foundPost), 1);

  console.log(posts);
  /* console.log(foundPost); */
  res.sendStatus(204);
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy
};
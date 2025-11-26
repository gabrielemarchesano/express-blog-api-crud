const posts = require ("../data/blogData");

function index(req, res){
  res.json(posts);
}

function show(req, res){
  res.json(posts.find((post) => Number(req.params.id) === post.id
  ));
}

function store(req, res){
  res.send("Creazione post");
}

function update(req, res){
  res.send("Modifica di un post");
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
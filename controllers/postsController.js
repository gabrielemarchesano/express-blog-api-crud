const posts = require ("../data/blogData");

function index(req, res){
  res.json(posts);
}

function show(req, res){
  res.send("Singolo post");
}

function store(req, res){
  res.send("Creazione post");
}

function update(req, res){
  res.send("Modifica di un post");
}

function destroy(req, res){
  res.send("Eliminazione di un post");
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy
};
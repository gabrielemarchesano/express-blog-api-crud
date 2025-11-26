const posts = require ("../routers/posts");

function index(req, res){
  res.send("Lista dei post");
}

module.exports = {index};
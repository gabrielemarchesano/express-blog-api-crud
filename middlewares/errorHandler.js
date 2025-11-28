function errorHandler(error, req, res, next){
  res.status(500);
  res.json({
    error: error.message
  });
};

module.exports = errorHandler;
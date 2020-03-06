// Get all of our friend data
var data = require('../data.json');

exports.view = function(request, response){
  console.log(data);
  data["viewAlt"] = false;
  response.render('index', data);
};

exports.viewB = function(req, res){
    data["viewAlt"] = true;
    res.render('indexB', data);
};
exports.viewA = function(req, res){
    data["viewAlt"] = true;
    res.render('indexA', data);
};

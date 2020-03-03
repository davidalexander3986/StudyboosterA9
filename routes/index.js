// Get all of our friend data
var data = require('../data.json');
var math = require('mathjs');



exports.view = function(request, response){
  console.log(data);
  data["viewAlt"] = false;

  var i = 0;
  var sumString = "";

  while(i < data['friends'].length){
      console.log(data['friends'][i]['time']);
      sumString += data['friends'][i]['time'];
      if(i != data['friends'].length - 1)
          sumString += ' + ';
      i++;

  }
  console.log("sumString: " + sumString);
  var sum = math.evaluate(sumString);
  var total = sum.toString(10);
  console.log("the evaluates to " + sum.toString(10));
  data["total"] = total;
  response.render('index', data);
};

exports.viewAlt = function(req, res){
    data["viewAlt"] = true;
    var i = 0;
    var sumString = "";

    while(i < data['friends'].length){
        console.log(data['friends'][i]['time']);
        sumString += data['friends'][i]['time'];
        if(i != data['friends'].length - 1)
            sumString += ' + ';
        i++;

    }
    console.log("sumString: " + sumString);
    var sum = math.evaluate(sumString);
    var total = sum.toString(10);
    console.log("the evaluates to " + sum.toString(10));
    data["total"] = total;
    res.render('indexB', data);
};

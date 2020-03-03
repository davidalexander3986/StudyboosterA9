var data = require("../data.json");
var math = require('mathjs');

exports.addFriend = function(request, response) { 
	// Your code goes here
	var name = request.query.name;
	var description = request.query.description;
	var time = request.query.time;
	var notes = request.query.notes;
	var newFriend = {"name": name, "description": description, "time": time};
	data.friends.push(newFriend);

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
 }

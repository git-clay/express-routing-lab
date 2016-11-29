var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies= [{"id":1,"name":"Chewing Gum","color":"Red"},{"id":8,"name":"Pez","color":"Green"},{"id":3,"name":"Marshmallow","color":"Pink"},{"id":4,"name":"Candy Stick","color":"Blue"}];

//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
	// What would go here? 
	// Hint: we want all candies in JSON format
	res.json(candies);
});
router.get('/:id', function(req,res) {
	var cur = req.params.id;
	for (var i = 0; i<candies.length;i++){
		if (candies[i].id == cur){
			//console.log(candies[i]);
			res.json(candies[i]);
		}
	}	
});
router.post('/', function(req,res) {
	//console.log(req.body);
	req.body.id = candies.length +1;
	candies.push(req.body);
	res.json(req.body);
});
router.put('/:id', function(req,res) {
	var cur = req.params.id;
	var edi;
	for (var i = 0; i<candies.length;i++){
		if (candies[i].id == cur){
			//console.log(candies[i]);
			candies[i].name = req.body.name;
			candies[i].color = req.body.color;

			res.json(candies[i]);
		}
	}	
	res.json(candies);
});
router.delete('/:id', function(req,res) {
	res.json(candies.pop());
});
// Fill out the rest of the routes here

module.exports = router;
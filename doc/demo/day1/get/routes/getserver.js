var express = require('express');
var router = express.Router();

/* GET http.*/
router.get('/', function(req, res) {
	var sUrl = req.url;
	var arr = sUrl.split('?');
	var arrReq = arr[1].split('&');
	var resJson = {};

	for(var i=0; i<arrReq.length; i++){
		//['xx=xx','xx=xx']
		var newarr = arrReq[i].split('=');
		var attr = newarr[0];
		var value = newarr[1];
		resJson[attr] = value;
	};
	res.send(resJson);
});

/* POST http.*/
router.post('/', function(req, res) {
	res.send(req.body);
});

module.exports = router;

var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
var cont=fs.readFileSync("views/zzl.txt","utf-8");
var cont2=fs.readFileSync("views/zzl2.txt","utf-8");
var num=cont.toString().slice(-1);
var num2=cont2.toString().slice(-1);

router.get('/', function(req, res, next) {
//  var sum=num++;
//	
//	fs.writeFile("views/zzl.txt",'页面刷新次数：'+sum,function(err){
//		console.log(sum)
//  })
//	res.render('index', { cont: sum });


    var sum2=num2++;
	
	fs.writeFile("views/zzl.txt",'页面刷新次数：'+sum2,function(err){
		console.log(sum2)
    })
	res.render('index', { cont2: sum2 });
	
});

router.get('/abc', function(req, res, next) {
//  var sum2=num2++;
//	
//	fs.writeFile("views/zzl2.txt",'页面刷新次数：'+sum2,function(err){
//		console.log(sum2)
//  })
//	res.render('zzl', { cont2: sum2 });

    var sum=num++;
	
	fs.writeFile("views/zzl2.txt",'页面刷新次数：'+sum,function(err){
		console.log(sum)
    })
	res.render('zzl', { cont: sum });


});
module.exports = router;

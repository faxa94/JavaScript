var e=require('express');
var app=e();

//app.use(e.static(__dirname+'/public'));
app.get('/miservicio',function(rec,res){
	res.send("id hola");
});
var server=app.listen(8090);
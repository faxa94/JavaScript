var e = require('express');
var p = require('body-parser');
var m= require('mysql');
var app = e();
function conectarMysql(dato){
	var conexion=m.createConnection({
		host:'localhost',
		user:'root',
		password:'usbw',
		database:'calculadora',
		port:3307
	});
	conexion.connect(function(error){
		if(error){
			console.log(error);
		}else{
			console.log("Conexion Exitosa");
		}
	});
	var q=conexion.query('insert into resultado (valor) values ('+dato+')',
			function(error,resultado){
			if(error){
				console.log(error);
			}else{
				console.log("Ingreso Correcto");
			}
		});
	q=conexion.query('select * from resultado where valor= 123',
		function(error,resultado){
			if(error){
				console.log(error);
			}else{
				console.log("consulta Correcto");
				var n=resultado.length;
				for(var i=0;i<n;i++){
					console.log(resultado[i].valor);
				}
			}
		});


	console.log("no se colgo");
};
app.use(p.json());
app.use(e.static(__dirname+'/public'));
app.post('/miservicio', function (req, res) {
    console.log('todo bien '+req.body[0].resultado);
    conectarMysql();
    res.send('{"id":487}');
});
var server = app.listen(8090);

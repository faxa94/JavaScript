var e=require('express');
var app=e();

//app.use(e.static(__dirname+'/public'));
var json1=[
    {"id":1,
     "nombre": "andres",
     "apellido":"chasi"
    },
    {"id":2,
     "nombre": "pedro",
     "apellido":"valencia"
    },
    {"id":3,
     "nombre": "pedro",
     "apellido":"luna"
    }
];
app.get('/miservicio/:id',function(rec,res){
	var idact=rec.param.id;
    for(var i=0;i<json1[i];i++){
        if(idact==json1[i].id){
            res.json(json1[i])
        }
    }
    //res.send("id hola");
});
var server=app.listen(8090);
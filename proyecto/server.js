var e=require('express');
var app=e();

//app.use(e.static(__dirname+'/public'));
var usuarios = [
    {
        id:1,
        nombre:'Pepe',
        cedula:'123409182'
    },
    {
        id:2,
        nombre:'Carlos',
        cedula:'981237918'
    },
    {
        id:3,
        nombre:'Juan',
        cedula:'011283934'
    }
]
app.get('/miservicio/:id',function(req,res){
	var idact=req.params.id;
    for(var i=0;i<3;i++){
        if(idact==usuarios[i].id){
            res.json(usuarios[i])
        }
    }
});
var server=app.listen(8090);
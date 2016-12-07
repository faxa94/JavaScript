@@ -35,8 +35,6 @@ app.get('/Usuario', function (req, res) {
})




app.get('/Usuario/:idUsuario', function (req, res) {
    
    var idActual = req.params.idUsuario;
@@ -54,42 +52,6 @@ app.get('/Usuario/:idUsuario', function (req, res) {
    
})

app.post('/Usuario', function (req, res) {
    
    
    console.log(req.query.nombre);
    
    console.log(req.query.cedula);
    
    if(!req.query.nombre){
        res.send('No envio el nombre');
    }
    
    if(!req.query.cedula){
        res.send('No envio la cedula');
    }
    
    var nuevoUsuario = {
        id:contador+1,
        nombre:req.query.nombre,
        cedula:req.query.cedula
    }
    usuarios.push(nuevoUsuario);
    contador = contador++;
    res.json(nuevoUsuario)

//    //Deprecated
//    console.log(req.param('nombre'));
//    
//    //Busca el parametro nombre
//    console.log(req.query.nombre);
//    
//    //Parametros URL
//    //console.log(req.params);
//
//    res.json(usuarios);
    
})

app.post('/Usuario', function (req, res) {
    
@@ -112,7 +74,7 @@ app.post('/Usuario', function (req, res) {
        cedula:req.query.cedula
    }
    usuarios.push(nuevoUsuario);
    contador = contador++;
    contador = contador+1;
    res.json(nuevoUsuario)

//    //Deprecated
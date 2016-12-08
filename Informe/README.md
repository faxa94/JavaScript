# NPM
### Materia : `Tecnologías Web con JavaScript`
### Tema : `NPM` 
### Fecha : `2016-12-08`
### Estudiante : `Andres Fabricio Chasiliquin Armendariz`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `4`
<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#tema1">NODE.JS</a>
  * <a href="#tema2">NPM</a>
  * <a href="#tema3">PAQUETE EXPRESS</a>
  * <a href="#tema4">METODOS HTTP</a>
  * <a href="#tema5">JSON</a>
  * <a href="#tema6">ARQUITECTURA REST</a>

  
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
`NPM`


<a name="objetivos"></a>
## Objetivos
- Conocer el sistema de paquetes NPM
- Desarrollo de una aplicacion orientada a un servidor node.js
- Fomentar el conocimineto sobre la estructuracion de los paquetes NPM


<a name="marco-teorico"></a>
## Marco Teorico



<a name="tema1"></a>
### NODE.JS
Es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor. Esta basado en el lenguaje de programación ECMAScript, asíncrono en una arquitectura orientada a eventos. Fue creado con el enfoque de ser útil en la creación de programas de red altamente escalables.

V8 es el entorno de ejecución para JavaScript creado para Google Chrome sobre el cual funciona Node.js. 
(Fuente: [wikipedia: https://es.wikipedia.org/wiki/Node.js#V8])


<a name="tema2"></a>

### NPM
Es el gestor por defecto de paquetes que utiliza JavaScript para entornos de ejecución como Node.js.

NPM consiste en una línea de comandos para el cliente, el cual interactúa con un registro remoto. Permite a los usuarios consumir y distribuir los módulos de JavaScript que están disponibles en ese registro. 

Los paquetes en el registro están en formato CommonJS, e incluyen un fichero de metadatos en formato JSON.

(Fuente: [wikipedia](https://en.wikipedia.org/wiki/Npm_(software))

<a name="tema3"></a>
### EXPRESS
Es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.

(Fuente: [express](http://expressjs.com/es/))


<a name="tema4"></a>
### METODOS HTTP
Forman parte del formato de mensajes http tanto para solicitud y respuesta en una arquitectura cliente servidor. Los mensajes para una solicitud estan generados en dos partes:

Linea de Solicitud: En esta parte del mensaje se entra los metodos http para una peticion, tambien se encuentra el url y la version http utilizada por el browser. Ej(get /unidireecion/pagina.html HTTP/1.1). Los metodos mas comunes son:

*   Post: Se utiliza para el llenado de formularios por parte del browser, es decir cuando el usuario llena un determinado formulario con su nombre y contrasena, y envia para su acceso, el metodo post recoge esta informacion y la incorpora dentro de un objeto para enviarla al servidor.
* Get: Metodo utilizado para solicir un objeto, en otras palabras una pagina web, un archiv, una descarga, un video.
* Head: SE la utiliza comunmente para depuracion, su particularidad es evitar que los objetos se envien dentro de una peticion http, es decir si el usuario lleno un formulario, la informacion incorporada dentro de este no se envia.
* Put: Se utiliza para cargar los objetos de una ruta especifica (directorio) de un servidor web.
* Delete: Elimina objetos de un servidor web especificando la ruta o directorio raiz.

(Fuente: [James F. Kurose and Keith W. Ross, Computer Networking, A Top-Down Approach Featuring the Internet])
<a name="tema5"></a>

### JSON
Es un formato ligero de intercambio de datos. Está basado en un subconjunto del Lenguaje de Programación JavaScript, Standard ECMA-262 3rd. JSON es un formato de texto que es completamente independiente del lenguaje de programacion. Estas propiedades hacen que JSON sea un lenguaje ideal para el intercambio de datos.

JSON está constituído por dos estructuras:

* Una colección de pares de nombre/valor.
* Una lista ordenada de valores.

(Fuente: [json](http://www.json.org/json-es.html))


<a name="tema6"></a>
### ARQUITECTURA REST
REST es un estilo de arquitectura software para sistemas hipermedia distribuidos como la World Wide Web.  

Se usa para describir cualquier interfaz entre sistemas que utilice directamente HTTP para obtener datos o indicar la ejecución de operaciones sobre los datos, en cualquier formato XML, JSON sin las abstracciones adicionales de los protocolos basados en patrones de intercambio de mensajes, como por ejemplo SOAP.


 (Fuente: [wikipedia](https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional))
 


<a name="desarrollo"></a>
## Desarrollo del informe
<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/servidor/Informe/imagenes/Captura.PNG?raw=true" width="500" height="300">
</p>
### Descripcion
Se instala el paquete express, utilizando la llamada npm a traves de la linea de comandos de node.js.

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/servidor/Informe/imagenes/Captura6.PNG?raw=true" width="500" height="300">
</p>
### Descripcion
Se instala el npm express-generator. El resultado final es la creacion del paquete json ubicado en la ruta donde se definio la instalacion.

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/servidor/Informe/imagenes/Captura1.PNG?raw=true" width="400" height="150">
</p>
### Descripcion
Creacion de una cuenta NPM para el almacenamiento de paquetes locales, es decir aquellos archivos javascript que deseamos compartir como un servicio web.

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/servidor/Informe/imagenes/Captura3.PNG?raw=true" width="400" height="150">
</p>
### Descripcion
Ejecucion en la parte del cliente de un mensaje retornado por el servidor. El puerto por el cual escucha las peticiones el servidor es el 6060.

Para el retorno del mensaje el servidor utiliza el metodo get.

```javascript
var express = require('express');
var app = express();
var puerto = 6060;
app.get('/', function (req, res) {
    res.send('Bienvenidos al Api de Usuarios!')
})
```

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/servidor/Informe/imagenes/Captura4.PNG?raw=true" width="500" height="300">
</p>
### Descripcion
Creacion de un json con los atributos id, nombre, cedula. El cliente muestra todos los registros almacenados por el servidor si solo se ingrese dentro del URL el objeto Usuario.

Utilizacion del metodo post.

```
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
    contador = contador+1;
    res.json(nuevoUsuario)
    
})
```     

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/servidor/Informe/imagenes/Captura5.PNG?raw=true" width="500" height="300">
</p>
### Descripcion
El cliente muestra un registro especifico contenido dentro del json almacenado por el servidor.

``` 
app.get('/Usuario/:idUsuario', function (req, res) {
    
    var idActual = req.params.idUsuario;
    
    for(var i=0;i<usuarios.length;i++){
        if(idActual == usuarios[i].id){
            res.json(usuarios[i]);
        }
    }
    res.send('No existe el Usuario');
    
})
``` 

<a name="conrec"></a>
## Conclusiones y Recomendaciones

- NPM es una serie de paquetes que estan dentro de la nube, y que se pueden añadir, teniendo una cuenta. De la misma manera se puden descargar cualquier servicio NPM a traves del servidor node.js
- Para utilizar estructuras json por parte del servidor, se instala los paquetes adecuados para su funcionamiento, como es express-generator.
- El manejo de los metodos http como son get, post, delete, put, permite al servidor realizar diferentes tareas de acuerdo a las necesidad del programador.
<br>
<a href="#cabecera">A la cabecera</a>

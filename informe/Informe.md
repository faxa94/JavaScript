Sailsjs - Assets / Views / Pipeline / Controllers
### Materia : `Tecnologías Web con JavaScript`
### Tema : `Sailsjs - Assets / Views / Pipeline / Controllers` 
### Fecha : `2017-01-05`
### Estudiante : `Andres Fabricio Chasiliquin Armendariz`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `5`
<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#tema1">SAILS.JS</a>
  * <a href="#tema2">ORM Y MODELOS</a>
  * <a href="#tema3">ASSETS SAILS</a>
  * <a href="#tema4">MODELO VISTA CONTROLADOR</a>
  * <a href="#tema5">VISTAS SAILS</a>
  * <a href="#tema6">RUTAS SAILS</a>
  * <a href="#tema7">CONTROLADORES SAILS</a>
  * <a href="#tema7">PIPELINE SAILS</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
`Sailsjs - Assets / Views / Pipeline / Controllers`


<a name="objetivos"></a>
## Objetivos
- Desarrolllar una aplicacion web utilizando el framework web Sails.js.
- Distinguir los distintos componentes y ficheros que conforman una api Sails.
- Fomentar el conocimiento en cuanto a la utilizacion de frameworks web para el desarrolo de app.





<a name="marco-teorico"></a>
## Marco Teorico

<a name="tema1"></a>
### SAILS.JS
Sails.js es un un framework MVC para NodeJS pensado para crear aplicaciones modernas y escalables, destaca a la hora de crear aplicaciones en tiempo real ya que incorpora websockets aunque puede ser usado para crear cualquier tipo de aplicación.  (Fuente: [UNO DE PIEDRA](https://www.uno-de-piera.com/introduccion-a-sails-js/))


<a name="tema2"></a>

### ORM y MODELOS
Sails viene instalado con un potente ORM / ODM llamada waterline , una herramienta de almacén de datos independiente del que simplifica enormemente la interacción con una o más bases de datos . Se proporciona una capa de abstracción en la parte superior de la base de datos subyacente, lo que le permite consultar y manipular sus datos de forma sencilla y sin necesidad de escribir código integración específica del proveedor.
(Fuente: [wikipedia](http://www.w3schools.com/css/css_syntax.asp))

<a name="tema3"></a>
### ASSETS SAILS
Se refiere a los archivos estaticos con los cuales el servidor accede a l intenert. Su contenido en sails esta localizado en una carpeta con el mismo nombre. Tiene la cualidad que los archivos dentro de la carpeta assets pueden ser modificables.(Fuente: [sails](http://sailsjs.com/documentation/concepts/assets))


<a name="tema4"></a>
### MODELO VISTA CONTROLADOR
El modelo–vista–controlador (MVC) es un patrón de arquitectura de software, que separa los datos y la lógica de negocio de una aplicación de la interfaz de usuario y el módulo encargado de gestionar los eventos y las comunicaciones.(Fuente: [wikipedia](https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador))
<a name="tema5"></a>

### VISTAS SAILS
 Las vistas son las plantillas de marcado que se compilan en el servidor en páginas HTML. En la mayoría de los casos, se utilizan diferentes vistas como la respuesta a una petición HTTP entrante, por ejemplo, para servir a su página de inicio.(Fuente: [sails](http://sailsjs.com/documentation/concepts/views))


<a name="tema6"></a>
### RUTAS SAILS
Como la mayoría de los frameworks web, Sails ofrece un router: un mecanismo de direcciones URL de asignación de controladores y vistas. Las rutas son las reglas que le indican a Sails lo que se puede hacer cuando se enfrenta a una petición de entrada. Hay dos tipos principales de rutas en Velas: 
* personalizado
* automática.
 (Fuente: [sails](http://sailsjs.com/documentation/concepts/routes))
 
<a name="tema7"></a>
### CONTROLADORES
Son los principales objetos de la aplicación sails que son responsables de responder a las peticiones de un navegador web, aplicaciones móviles o cualquier otro sistema capaz de comunicarse con un servidor. A menudo actúan como un intermediario entre sus modelos y las vistas. Para muchas aplicaciones, los controladores contienen la mayor parte de su proyecto de la lógica de negocio.(Fuente: [sails](http://sailsjs.com/documentation/concepts/controllers))

<a name="tema8"></a>
### PIPELINE SAILS
Es un archivo que forma parte del codigo interno de sails, este archivo determina el orden en que las hojas de estilo, JavaScript y  plantilla del lado del cliente deben ser compilados y vinculados al servidor.(Fuente: [sails](http://sailsjs.com/documentation/anatomy/tasks/pipeline-js))




<a name="desarrollo"></a>
## Desarrollo del informe
<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/sails2/imagenes/Captura1.PNG?raw=true" width="500" height="300">
</p>
### Descripcion
Instalacion del framework web sails.js, mediante la utilizacion del comando npm. Como requerimientos para la instalacion de sails.js, se necesita haber instalado el servidor node.js. 

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/sails2/imagenes/Captura2.PNG?raw=true" width="500" height="200">
</p>
### Descripcion
Para crear una nueva aplicacion en sails.js se utiliza el comando sails new seguido del nombre de la aplicacion. 
Para acceder a la nueva aplicacion creada se necesita abrir la aplicacion con el comando:

```html
cd Mascota
```

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/sails2/imagenes/Captura3.PNG?raw=true" width="500" height="100">
</p>
### Descripcion
Para crear una api en donde se escribira la funcionalidad y las estructuras de datos referentes a la entrada y salida de informacion de la base de datos, se utiliza el comando generate seguido del node de la api.

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/sails2/imagenes/Captura21.PNG?raw=true" width="500" height="300">
</p>
### Descripcion
Para ejecutar el servidor sails se necesita del comando lift

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/sails2/imagenes/Captura20.PNG?raw=true" width="500" height="200">
</p>
### Descripcion
En la carpeta API se crea una funcion para el contralador client.
 ```html
    'new': function (req, res) {
        res.view();

    }
```
De esta manera, en la paigna web se coloca la direccion con el nombre del controlador seguido de su funcion.


<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/sails2/imagenes/Captura7.PNG?raw=true" width="500" height="300">
</p>
### Descripcion
Se puede generar modelos independeientes de la API, para esto se utiliza el comando generate model NombreModelo

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/sails2/imagenes/Captura8.PNG?raw=true" width="500" height="300">
</p>
### Descripcion
Al momento de generar un API en sails, se crea por defecto la carpeta config la cual contiene archivos de la configuracion, enrutamiento de sails. En el archivo modelo.js se encuetra las instancias para realizar la conexion a una base de datos, tambien se puede especificar metodos como alter, delete que permiten manejar el contenido de la API.

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/sails2/imagenes/Captura11.PNG?raw=true" width="500" height="300">
</p>
### Descripcion
Para enviar datos a la pagina web, se tiene varias formas una ellas es a traves de la utilizacion de la extension postman. Postman nos pertime escoger el metodo http deseado para enviar, editar o eliminar registro a una URL espefica. Como resultado final, postman traduce la informacion recibida en un json el cual es enviado a la URL especificada.

La otra forma es directamente en la direccion URL, sails tiene shortcut que permite la creacion de objetos por medio de json. Para separar cada elemento json escrito en la url se utiliza el simbolo ?

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/sails2/imagenes/Captura9.PNG?raw=true" width="500" height="300">
</p>
### Descripcion
El resultado de enviar un objeto por medio de postman es que dentro de nuestra pagina web se creo los json registrados a dos usuarios. Es importante resaltar que los parametros que se muestran son los mismo escritos en el modelo de la API.

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/sails2/imagenes/Captura12.PNG?raw=true" width="500" height="300">
</p>
### Descripcion
Utilizacion del postman para elimianr un registro conenido en nueestro pagina web. Para esta accion se debe especificar el metodo delete, seguido del id del json a eliminar.

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/sails2/imagenes/Captura15.PNG?raw=true" width="500" height="300">
</p>
### Descripcion
El resultado en nuestra pagina web es un elemento eliminado.





<a name="conrec"></a>
## Conclusiones y Recomendaciones

- Dentro de una apliacaicon web debemos definir el orm o modelo que se va utilizar, agregando la funcionalidad de la aplicacion a traves de los controladores y desplegando la informacion que traen los controladores por medio de plantillas ejs al cliente.
- Para los modelos, se tiene que espeficar los atributos que se desean almacenar en un gestor de base de datos, mediante estructuras json.
- Sails es un framework web que esta basado en node.js y su utilidad radica en que separa a una aplicacion web en tres partes, modelos, vistas y controladores de esta manera la mantenibilidad del codigo resulta mas facil al programador.

<br>
<a href="#cabecera">A la cabecera</a>
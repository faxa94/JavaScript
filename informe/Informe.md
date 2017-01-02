 CSS
### Materia : `Tecnologías Web con JavaScript`
### Tema : `CSS` 
### Fecha : `2016-10-31`
### Estudiante : `Andres Fabricio Chasiliquin Armendariz`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `2`
<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#tema1">ARCHIVOS CSS</a>
  * <a href="#tema2">SINTAXIS CSS</a>
  * <a href="#tema3">COLORES CON CSS</a>
  * <a href="#tema4">BACKGROUND COLOR</a>
  * <a href="#tema5">BOOTSTRAP</a>
  * <a href="#tema6">GRID</a>
  * <a href="#tema7">TIPOGRAFIA</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
`CSS`


<a name="objetivos"></a>
## Objetivos
- Analizar el contenido del archivo de estilos de una pagina web a travez del inspector de Google Chrome
- Desarrollar habilidades en la utilizacion de archivos .css
- Utilizar herramientas para el desarrollo de una pagina web, contenidas dentro del framework bootstrap.


<a name="marco-teorico"></a>
## Marco Teorico



<a name="tema1"></a>
### ARCHIVOS CSS
Cascading Stylesheets es un lenguaje de hojas de estilo para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado. Un lenguaje marcado es aquel que puede ser programado mediante texto, etiquetas y estructuras para su presentacion.

CSS es una tecnologia utiliza en muchas pagianas web para mejorar el aspecto visual de la pagina, mediante la agregacion de transciciones, colores y forma a los objetos web. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada))


<a name="tema2"></a>

### SINTAXIS CSS
La aplicacion de formatos a los objetos de una pagina html se debe seguir el siguiente formato:
####Selector
    selector {   
               propiedad1: valor1;            
               propiedad2: valor2;            
    }
    
Donde tag, es un selector utilizado para identificar algun objeto. Propiedad son los atributos que se desean modificar y por ultimo el valor esta relacionado con los valores aceptables de una propiedad.

####Selector ID
    #selector {   
               propiedad1: valor1;            
               propiedad2: valor2;            
    }
    
El selector ID es un atributo que identifica de manera unica a un objeto. Para el caso de selectores ID se debe interponer antes del selector el simbolo numeral. 

####Selector de Clase
    .selector {   
               propiedad1: valor1;            
               propiedad2: valor2;            
    }
    
El selector de clase refenrecnia a los elemento de una clase especifica. Para el caso de selectores de clase se debe interponer antes del selector, un punto.(Fuente: [w3school](http://www.w3schools.com/css/css_syntax.asp))

<a name="tema3"></a>
### COLORES CON CSS
Existen dos maneras de inponer un color:
* Notacion Hexadecimal: Es una forma de representar los colores que vemos cada día en un formato que un ordenador puede interpretar y mostrar. ESta compuesto por tres bytes, donde cada byte esta en notacion hexadecimal. Su formtao es: #rojo,verde,azul.
* Palabras Reservadas: Algunos de los colores mas usados son referenciado por su nombre, de esta manera resulta mas facil utilizar dicho color sin su representacion hexadecimal.(Fuente: [HtmlColores](http://htmlcolorcodes.com/es/))


<a name="tema4"></a>
### BACKGROUND COLOR
Propiedad que especifica el color de fondo de un elemento. Sintaxis:
background-color: color;
Existen al igual que color dos formatos para su especificacion.(Fuente: [w3school](http://www.w3schools.com/css/css_background.asp))
<a name="tema5"></a>

### BOOTSTRAP
Es un framework o conjunto de herramientas de Código abierto para diseño de sitios y aplicaciones web. Contiene plantillas de diseño con tipografía, formularios, y otros elementos de diseño basado en HTML y CSS, así como, extensiones de JavaScript opcionales adicionales(Fuente: [Wipedia](https://es.wikipedia.org/wiki/Twitter_Bootstrap))


<a name="tema6"></a>
### GRID
Son estructuras para sobreponer objetos html, se permite un maximo de 12 columnas y tienes diferentes tipos de llamadas.
* xs telefonos
* sm tablests
* md escritorio
* lg escritorio largo
 (Fuente: [w3school](http://www.w3schools.com/bootstrap/bootstrap_grid_basic.asp))
 
<a name="tema7"></a>
### TIPOGRAFIA
Formato de los titulos, esta asociado para cada titulo un distinto tamaño que va desde el mas grande (h1), hasta ubicarse entre los mas pequeños (h2,h3...). Ademas cuenta con tags para la implementacion de estilos como negritas, cursiva, subrayado entre otros.(Fuente: [Wikipedia] (Fuente: [w3school](http://www.w3schools.com/bootstrap/bootstrap_typography.asp))


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
El resultado en nuestra pagina web es el elemento eliminado.



<a name="conrec"></a>
## Conclusiones y Recomendaciones

- El inspector de google chrome, me permite observar los estilos que se han impuesto a una clase u objeto html. Tambien permite que a un mismo objeto asignarle direferentes estilos, el inspector recoge la informacion de todos los estilos aplicados y destaca aquel que se esta utilizando en ese instante. 
- Bootstrap, tiene un fichero de estilos, entre los mas detacados estas el tamaño y la forma de los grid.
- Se puede asignar diferentes tipos de formato a un mismo objeto, sin embargo solo se aplicara el ultimo asignado, debido a que los ficheros css trabajan en cascada.

<br>
<a href="#cabecera">A la cabecera</a>
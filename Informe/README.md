
# CSS
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
  * <a href="tema1">METODOS HTTP</a>
  * <a href="#tema2">DEFINICION DE HTML</a>
  * <a href="#tema3">BROWSER</a>
  * <a href="#tema4">WORLD WIDE WEB</a>
  * <a href="#tema5">DEFINICION CSS</a>
  * <a href="#tema6">POSTMAN</a>
  * <a href="#tema7">XML</a>
  * <a href="#tema8">NPM NODE</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
`CSS`


<a name="objetivos"></a>
## Objetivos
- Fomentar el conocimiento basico sobre los metodo http
- Conocer herramientas de desarrolladores web como: postman, inspetor web
- Introducir los elementos basicos en la creacion de paginas web a travez de html5 y ccs3


<a name="marco-teorico"></a>
## Marco Teorico
<a name="tema1"></a>
###ARCHIVOS CSS
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
<img src="https://github.com/faxa94/JavaScript/blob/master/imagenes/1.PNG?raw=true" width="500" height="300">
</p>
### Descripcion
Mediante la aplicacion Postman se realiza el analisis durante el tiempo de carga de pagina de Google. Se muestra el formato del mensaje http que el browser envia a un servidor para cargar el sitio web, utilizando el metodo get. Tambien se visualiza la fecha de la ultima mmodificacion de la pagina, asi como pambien el url del servidor donde yace la pagina web.

Ademas se utilizaron listas ordenadas y no ordenadas para la division del contenido, mediante el tag ul y li. Para enlacesse utilizo el tag a junto con las propiedad href y tab. Aqui su ejecucion:

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/master/imagenes/2.PNG?raw=true" width="500" height="300">
</p>
### Descripcion
Utilizando el inspeccionar de objetos de chrome se revisa el formato de mensaje al solicitar la pagina web de inicio de Google. Al igual que postman se puede observar el metodo http utilizado, asi tambien los elementos como la linea de solicitud y la cabecera. Dentro de la cabecera se tiene los elementos como la cache, el servidor destino entre otros atributos.

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/master/imagenes/4.PNG?raw=true" width="500" height="300">
</p>
### Descripcion
Se creo una pagina html inicial, con el proposito de entendeer los principal tags utilizados para la creacion de una pagina web. DEntro de la pagina se establece el formato html5 mediante la linea Doctype.

Entre otras propiedades se utilizo el tag de estilos para poner color y configuracion de algun elemento html como imagenes. Un ejemplo de cambio de color al fondo de la pagina web: style="background-color: #ffffcc. Se puede modificar los colores de los elementos html de dos formas, utilizando el nombre del color o tambien y el mas comun en formato hexadecimal.

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/master/imagenes/3.PNG?raw=true" width="500" height="300">
</p>
En la ejecucion se diferencia que el fondo de la pagina web es diferente al contenido interno de la pagina web, ya que este toma diferentes colores establecidos por la propiedad style.

<a name="conrec"></a>
## Conclusiones y Recomendaciones

- Existe diferencias entre los metodos http, que varian dependiendo desde el punto de ejecucion por parte del servidor o del cliente.
- Html5 es una evolucion de html que esta junto con CSS3 para la declaracion de estilos.
- Postman y la inspeccion de objetos de chrome proporcionan informacion util para el entendiendo del protocolo de la capa de aplicacion http.

<br>
<a href="#cabecera">A la cabecera</a>
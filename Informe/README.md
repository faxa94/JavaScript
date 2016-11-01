
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
  * <a href="tema0">ARCHIVOS CSS</a>
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



<a name="tema0"></a>
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
<img src="https://github.com/faxa94/JavaScript/blob/css/Informe/imagenes%20css%20y%20bootstrap/2.png?raw=true" width="500" height="300">
</p>
### Descripcion
Primero iniciamos el servidor http utilizando la consola de comandos, dentro de la rama css en la ubicacion del repositorio. De esta manera solamente archivos localizados en esta carpeta funcionaran bajo el servidor http. Si se ejecuta archivos que esten en subdirectorios dentro de la rama raiz tambien se veran afectados, sin embargo, si se ejecuta archivos que esten sobre la rama raiz, se encontrara con errores en la ejecucion de la pagina web.

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/css/Informe/imagenes%20css%20y%20bootstrap/3.png?raw=true" width="500" height="300">
</p>
### Descripcion
Utilizando el inspeccionar de objetos de chrome se revisa la estructura de la pagina web creado, y se identifica los diferentes componentes del archivo como son el tag del body, html, titulos y parrafos. El body tiene un color verde, los titulos declarados por el selector h1, estan pintados de plomo, los parrafos estan pintados de colores rojo, amarillo, azul, correspondientes al id igual a rojo, amarillo y azul del tag 'p'.

Para su implementacion se propuso dentro del head un link de referencia a un archivo css, el cual conteniene todos los estilos presentes en el sitio web. Se puede referenciar de dos maneras:
* Usando un archivo dentro de la computadora
* Direccionando a una servidor que contiene dicho fichero
```
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/css/Informe/imagenes%20css%20y%20bootstrap/6.png?raw=true" width="500" height="300">
</p>
### Descripcion
Se utilizo el framework bootstrap, y mediante la utilizacion de la clase col-sm-3 se creo 3 columnas
```html
<div class="col-sm-3 border">
        <h3>col sm3 2</h3>
</div>
```
De la misma manera en la siguiente fila se utiliza la clase col-lg-6 para crear dos columnas
```
    <div class="col-lg-6 borde">
        <h3>col lg 1</h3>
    </div>

```
En la siguiente columna se hizo uso de la clase col-xs-5 para crear dos columnas
```
 <div class="row col-xs-5 border">
            <h2>col xs 5</h2>
        </div>
```

<p align="center">
<img src="https://github.com/faxa94/JavaScript/blob/css/Informe/imagenes%20css%20y%20bootstrap/1.png?raw=true" width="500" height="300">
</p>
###Descripcion
Para los colores se utilizaron estilos definidos por el framework de bootstrap, de esta forma se tiene diferentes metodos para poner color a una clase, un selector y a un id.

```
        h1{
            background-color: #a0a291;
        }
        p{
            background-color: green;
        }
        .nombreClaseRojo{
            background-color: red;
        }
```     
Para la utilizacion de tablas se empleo la clase table

<a name="conrec"></a>
## Conclusiones y Recomendaciones

- El inspector de google chrome, me permite observar los estilos que se han impuesto a una clase u objeto html. Tambien permite que a un mismo objeto asignarle direferentes estilos, el inspector recoge la informacion de todos los estilos aplicados y destaca aquel que se esta utilizando en ese instante. 
- Bootstrap, tiene un fichero de estilos, entre los mas detacados estas el tamaño y la forma de los grid.
- Se puede asignar diferentes tipos de formato a un mismo objeto, sin embargo solo se aplicara el ultimo asignado, debido a que los ficheros css trabajan en cascada.

<br>
<a href="#cabecera">A la cabecera</a>

# Introducción a la Web
### Materia : `Tecnologías Web con JavaScript`
### Tema : `Introducción a la Web` 
### Fecha : `2016-10-23`
### Estudiante : `Andres Fabricio Chasiliquin Armendariz`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `1`
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
`Introduccion a la Web`


<a name="objetivos"></a>
## Objetivos
- Fomentar el conocimiento basico sobre los metodo http
- Conocer herramientas de desarrolladores web como: postman, inspetor web
- Introducir los elementos basicos en la creacion de paginas web a travez de html5 y ccs3


<a name="marco-teorico"></a>
## Marco Teorico
<a name="tema1"></a>
###METODOS HTTP
Forman parte del formato de mensajes http tanto para solicitud y respuesta en una arquitectura cliente servidor. Los mensajes para una solicitud estan generados en dos partes:
- Linea de Solicitud: En esta parte del mensaje se entra los metodos http para una peticion, tambien se encuentra el url y la version http utilizada por el browser. Ej(get /unidireecion/pagina.html HTTP/1.1). Los metodos mas comunes son:
    * Post: Se utiliza para el llenado de formularios por parte del browser, es decir cuando el usuario llena un determinado formulario con su nombre y contrasena, y envia para su acceso, el metodo post recoge esta informacion y la incorpora dentro de un objeto para enviarla al servidor.
    * Get: Metodo utilizado para solicir un objeto, en otras palabras una pagina web, un archiv, una descarga, un video.
    * Head: SE la utiliza comunmente para depuracion, su particularidad es evitar que los objetos se envien dentro de una peticion http, es decir si el usuario lleno un formulario, la informacion incorporada dentro de este no se envia.
    * Put: Se utiliza para cargar los objetos de una ruta especifica (directorio) de un servidor web.
    * Delete: Elimina objetos de un servidor web especificando la ruta o directorio raiz. 

- Linea de Cabecera(Fuente: James F. Kurose and Keith W. Ross, Computer Networking, A Top-Down Approach Featuring the Internet)
<a name="tema2"></a>
### DEFINICION HTML
HTML, que significa Lenguaje de Marcado para Hipertextos (HyperText Markup Language) es el elemento de construcción más básico de una página web y se usa para crear y representar visualmente una página web. Determina el contenido de la página web, pero no su funcionalidad.(Fuente: [Mozilla](https://developer.mozilla.org/es/docs/Web/HTML))
<a name="tema3"></a>
### BROWSER
Comunmente llamado navegador, es un software, aplicación o programa que permite el acceso a la Web, interpretando la información de distintos tipos de archivos y sitios web para que estos puedan ser visualizados.(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Navegador_web))
<a name="tema4"></a>
### WORLD WIDE WEB
Es un subconjunto de Internet. La web consta de páginas que se puede acceder mediante un navegador web. El Internet es la red real de las redes donde reside toda la información. Con hipertexto, una palabra o frase puede contener un enlace a otro sitio web. Todas las páginas web están escritas en el lenguaje de marcado de hipertexto (HTML), que trabaja en conjunto con HTTP.  (Fuente: [Techterms](http://techterms.com/definition/www))
<a name="tema5"></a>
### DEFINICION CSS 
CSS es un lenguaje de hojas de estilos creado para controlar el aspecto o presentación de los documentos electrónicos definidos con HTML y XHTML. CSS es la mejor forma de separar los contenidos y su presentación y es imprescindible para crear páginas web complejas. (Fuente: [LibrosWeb](http://librosweb.es/libro/css/capitulo_1.html))
<a name="tema6"></a>
### POSTMAN
Aplicacion que permite construir peticiones rápidamente, para despues guardarlas para su uso posterior, tambien analiza las respuestas enviadas a travez de la web. Postman reduce drásticamente el tiempo necesario para probar y desarrollar nuevas API. (Fuente: [GetPostman](https://www.getpostman.com/docs/introduction))
<a name="tema7"></a>
### XML
Extensible Markup Language, es un meta-lenguaje que permite definir lenguajes de marcas desarrollado por el World Wide Web Consortium (W3C) utilizado para almacenar datos en forma legible.(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Extensible_Markup_Language))

<a name="tema8"></a>
### NPM NODE


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
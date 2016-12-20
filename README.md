
# Introducción a la Web
### Materia : `Tecnologías Web con JavaScript`

### Instalar sails.js
sails.js es un servidor web que se conecta a bases de datos y puede funcionar 

´´´
> npm install -g  sails

> sails new Mascotas
´´´

### levantar el servidor

´´´
> sails lift
´´´

El salis les pide opciones si no estan definidas, las opcion son:
- 1: Safe Mode no se va a alterar la base de datos
- 2: Alter Mode se va a alterar la base de datos si nosotros hicimos cambios en los modelos por ejemplo
- 3: Delete Mode borra todos los datps

## Servidor web de sails.js

El serviodr web de sails se encuentra localizado  en la capeta assets, todo dentro de esta carpeta va a ser publico

## Carpeta Views
 homepage
 layout
 
## Carpeta task
pipeline
 
 ## Carpeta config
 route
 
 ## generar controladores
 Para generar controladores se utiliza el siguiente comando
 ´´´
 > sails generate controller NombreDElControlador
 
 ´´´
 ## Carpeta api/controllers
 crear un controlador que se llame correo
 dentro de esto se crea un metodo denominado enviar
 
 ## integrar un modulo de node a sails
/**
 * RazaController
 *
 * @description :: Server-side logic for managing Razas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  crearRaza: function (req, res) {
    var parametros = req.allParams();

    if (req.method == 'POST') {
      if (parametros.nombre) {

        var uploadFile = req.file('uploadFile');
          uploadFile.upload({ dirname: '../../assets/images' },function onUploadComplete(err, files) {
          if (err) return res.serverError(err);
          var ee=files[0];
          console.log(ee.type);
            Raza.create({
            nombre: parametros.nombre,
            files: files.filename
          }).exec(function (error, razaCreado) {
            if (error) return res.view('error', {
              title: 'Error',
              error: {
                descripcion: 'Hubo Problemas creando la raza, intentalo de nuevo: ' + error,
                url: '/crearRaza'
              }
            });
            Raza.find().exec(function (error, razasEncontrados) {
              if (error) return res.serverError()
              sails.log.info(razasEncontrados);
              return res.view('vistas/Raza/listarRazas', {
                title: 'Lista de Razas',
                razas: razasEncontrados
              })
            });
          });
        });

      }





      else {
        // bad Request
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros',
            url: '/crearRaza'
          }
        });
      }
    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/crearRaza'
        }
      });
    }

  },
};

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
        var origifile = uploadFile._files[0].stream.filename;
        console.log(origifile);
        uploadFile.upload({ dirname: '../../assets/images', saveAs:origifile }, function onUploadComplete(err, files) {
          if (err) return res.serverError(err);
          console.log(files);

          Raza.create({
            nombre: parametros.nombre,
            defectosGeneticos: parametros.defectosGeneticos,
            files: origifile
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
  editarRaza: function (req, res) {
    var parametros = req.allParams;
    sails.log.info(parametros);
    if (req.method == 'POST') {
      if (parametros.nombre && parametros.defectosGeneticos && parametros.file) {
        Raza.update({ id: parametros.id },
          {
            nombre: parametros.nombre,
            defectosGeneticos: parametros.defectosGeneticos,
            //files: files[0].filename
          }
        ).exec(function (error, razaCreada) {
          if (error) {
            return res.view('error', {
              title: 'Error',
              error: {
                descripcion: 'No se puede actualizar la raza: ' + error,
                url: '/editarRaza'
              }
            });
          }
          Raza.find().exec(function (error, razaEncontradas) {
            if (error) return res.serverError()
            return res.view('vistas/Raza/listarRazas', {
              title: 'Lista de Razas',
              razas: razaEncontradas
            })
          });

        });

      } else {
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'Llenar todos los campos',
            url: '/editarRaza'
          }
        });
      }
    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Metodo http no permitido',
          url: '/editarRaza'
        }
      });
    }
  }
}




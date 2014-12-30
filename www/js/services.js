angular.module('app.services', [])

.factory('Api', function ($http, $q) {

// Direccion donde se piden los datos
var url = "http://localhost:8080/farmacia/public/";
// var url = "http://192.168.10.117:8080/App-Farmacia/public/";

  return {
    all: function(ruta) {

        defer = $q.defer();
        $http.get( url + ruta)
          .success(function (data){
            defer.resolve(data);
          })
          .error(function (data){
            defer.reject();
          })
        return defer.promise; 
    },    

    get: function(ruta, valor) {
      defer = $q.defer();
        $http.get( url + ruta + valor)
          .success(function (data){
            defer.resolve(data);
          })
          .error(function (data){
            defer.reject();
          })
        return defer.promise; 
    }
  }
});

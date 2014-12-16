angular.module('app.services', [])

.factory('Productos', function ($http, $q) {

var url = "http://localhost:8080/app-farmacia/public/";

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

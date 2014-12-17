angular.module('app.controllers', [])

.controller('InicioCtrl', function($scope, $log, Api) {

    // Varible para mostrar y ocultar el logo
    $scope.buscar = true;

    $scope.cargarProductos = function(valor){
        if(valor)
        {
            $scope.buscar = false;
            $scope.productos = Api.get('api/busqueda/productos/', valor).then(function (data) {
                $scope.productos = data;
            }); 
        }
        else
        {
            $scope.buscar = true;
            $scope.productos = [];
        }

    };

})

.controller('ProductosCtrl', function($scope, Api) {
    
    $scope.productos = Api.all('api/info-productos').then(function (data) {
        $scope.productos = data;
    });

})

.controller('ProductoDetalleCtrl', function($scope, $stateParams, Api) {

    $scope.producto = [];
    $scope.productos = Api.get('api/info-productos/', $stateParams.productoId).then(function (data) {
  		 $scope.producto = data;
  	});  

})

.controller('FarmaciasCtrl', function($scope, Api) {

    $scope.farmacias = Api.all('api/farmacias').then(function (data) {
        $scope.farmacias = data;
    });

})

.controller('FarmaciaDetalleCtrl', function($scope, $stateParams, Api) {

    $scope.farmacia = [];
    $scope.farmacias = Api.get('api/farmacias/', $stateParams.farmaciaId).then(function (data) {
        $scope.farmacia = data;
    });
   
});
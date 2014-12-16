angular.module('app.controllers', [])

.controller('InicioCtrl', function($scope, $log, Productos) {

    // Varible para mostrar y ocultar el logo
    $scope.buscar = true;

    $scope.cargarProductos = function(valor){
        if(valor)
        {
            $scope.buscar = false;
            $scope.productos = Productos.get('api/busqueda/productos/', valor).then(function (data) {
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

.controller('ProductosCtrl', function($scope, Productos) {
    $scope.productos = Productos.all('api/info-productos').then(function (data) {
        $scope.productos = data;
    });

})

.controller('ProductoDetalleCtrl', function($scope, $stateParams, Productos) {
    $scope.producto = [];

    $scope.productos = Productos.get('api/info-productos/', $stateParams.productoId).then(function (data) {
  		 $scope.producto = data;
  	});   
})

.controller('FarmaciasCtrl', function($scope, Productos) {
    $scope.farmacias = Productos.all('api/farmacias').then(function (data) {
        $scope.farmacias = data;
    });
})

.controller('FarmaciaDetalleCtrl', function($scope, $stateParams, Productos) {
    $scope.farmacia = [];
    $scope.farmacias = Productos.get('api/farmacias/', $stateParams.farmaciaId).then(function (data) {
        $scope.farmacia = data;
    });
   
});
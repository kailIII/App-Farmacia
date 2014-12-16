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
    $scope.productos = Productos.all('api/productos').then(function (data) {
        $scope.productos = data;
    });

})

.controller('ProductoDetalleCtrl', function($scope, $stateParams, Productos) {
    $scope.producto = [];
    $scope.farmacias = [{id:'1', nombre:'Nombre uno'}];

    $scope.productos = Productos.get('api/productos/', $stateParams.productoId).then(function (data) {
  		 $scope.producto = data;
  	});

    // $scope.farmacias = Productos.all('api/farmacias').then(function (data) {
    //     $scope.farmacias = data;
    // });
   
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
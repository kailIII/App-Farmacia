angular.module('app.controllers', [])

.controller('InicioCtrl', function($scope, $log, Api) {

    // Varible para mostrar y ocultar el logo y el loading
    $scope.buscar = true;
    $scope.isLoading = false;

    $scope.cargarProductos = function(valor){
        if(valor)
        {
            $scope.buscar = false;
            $scope.isLoading = true;
            $scope.productos = Api.get('api/busqueda/productos/', valor).then(function (data) {
                $scope.productos = data;
                $scope.isLoading = false;
            }); 
        }
        else
        {
            $scope.buscar = true;
            $scope.productos = [];
        }

    };

})

.controller('ProductosCtrl', function($scope, $log, Api) {

    $scope.productos = [];
     $scope.page=1;
     $scope.loadMore = function() {

        Api.get('api/info-productos?page='+$scope.page).then(function (items) {
            $scope.productos = $scope.productos.concat(items.data);
             $scope.$broadcast('scroll.infiniteScrollComplete');
             $scope.page +=1;
        });
        
    }

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
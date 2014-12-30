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
            $scope.productos = Api.get('app/busquedaproductos/', valor).then(function (data) {
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
    $scope.page = 1;
    
    $scope.loadMore = function() {

        Api.all('app/productos?page='+ $scope.page).then(function (items) {
            $scope.productos = $scope.productos.concat(items.data);
             $scope.$broadcast('scroll.infiniteScrollComplete');
             $scope.page += 1;

             if (items.last_page == $scope.page) {$scope.noMoreItemsAvailable = true};
             
        });
        
    }

})

.controller('ProductoDetalleCtrl', function($scope, $stateParams, Api) {

    $scope.producto = [];
    $scope.farmacias = [];
    
    Api.get('app/producto/', $stateParams.productoId).then(function (data) {
  		 $scope.producto = data;
         $scope.disponible();
  	});  

    $scope.disponible = function() {
        Api.get('app/farmaciasproductos', $stateParams.productoId).then(function (items) {
         $scope.farmacias = items.data;
        });
    }; 

})

.controller('FarmaciasCtrl', function($scope, Api) {

    $scope.farmacias = [];
    $scope.page=1;
    
    $scope.loadMore = function() {

        Api.all('app/farmacias?page='+$scope.page).then(function (items) {
            $scope.farmacias = $scope.farmacias.concat(items.data);
            $scope.$broadcast('scroll.infiniteScrollComplete');
            $scope.page +=1;

            if (items.last_page == $scope.page) {$scope.noMoreItemsAvailable = true};

        });
        
    }

})

.controller('FarmaciaDetalleCtrl', function($scope, $stateParams, Api) {

    $scope.farmacia = [];
    $scope.sucursales = [];

    $scope.farmacias = Api.get('app/farmacia/', $stateParams.farmaciaId).then(function (data) {
        $scope.farmacia = data;
        $scope.fSucursales();
    });

    $scope.fSucursales = function(){

        Api.get('app/sucursales/', $stateParams.farmaciaId).then(function (data) {
            $scope.sucursales = data;
        });

    };
   
})

.controller('SucursalDetalleCtrl', function($scope, $stateParams, Api) {

    $scope.sucursal = [];

    Api.get('app/sucursal/', $stateParams.sucursalId).then(function (data) {
        $scope.sucursal = data;
    });

   
});
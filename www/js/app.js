
angular.module('app', ['ionic', 'app.controllers', 'app.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tab.inicio', {
      url: '/tab-inicio',
      views: {
        'tab-inicio': {
          templateUrl: 'templates/tab-inicio.html',
          controller: 'InicioCtrl'
        }
      }
    })
    .state('tab.productos', {
      url: '/tab-productos',
      views: {
        'tab-productos': {
          templateUrl: 'templates/tab-productos.html',
          controller: 'ProductosCtrl'
        }
      }
    })
    .state('tab.producto-detalle', {
      url: '/producto/:productoId',
      views: {
        'tab-productos': {
          templateUrl: 'templates/producto-detalle.html',
          controller: 'ProductoDetalleCtrl'
        }
      }
    })
    .state('tab.farmacias', {
      url: '/tab-farmacias',
      views: {
        'tab-farmacias': {
          templateUrl: 'templates/tab-farmacias.html',
          controller: 'FarmaciasCtrl'
        }
      }
    })
    .state('tab.farmacia-detalle', {
      url: '/farmacia/:farmaciaId',
      views: {
        'tab-farmacias': {
          templateUrl: 'templates/farmacia-detalle.html',
          controller: 'FarmaciaDetalleCtrl'
        }
      }
    })
    .state('tab.sucursal-detalle', {
      url: '/sucursal/:sucursalId',
      views: {
        'tab-farmacias': {
          templateUrl: 'templates/sucursal-detalle.html',
          controller: 'SucursalDetalleCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/tab-inicio');

});


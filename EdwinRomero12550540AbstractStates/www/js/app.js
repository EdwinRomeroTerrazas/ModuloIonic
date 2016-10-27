// Ionic Starter App

// Crearemos nuestro primer módulo llamado 'starter' (Además, lo llamamos desde el body de nuestro index)

angular.module('starter', ['ionic','starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


// Ionic usa AngularUI Router la cual utiliza el concepto de 'states'.

.config(function($stateProvider, $urlRouterProvider) {

  // Aquí se configuran todos los states que contendrá nuestra app.
  // Dentro de cada 'state' podemos asignar un controller para ese mismo 'state'.
  // Todos nuestros controllers se encuentran en nuestro controllers.js.
    
  $stateProvider

  // se configura un 'state' abrstacto para la directiva tabs.
  
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
      
  })

  .state('tab.first', {
    url: '/first',
    views: {
      'first-tab': {
        templateUrl: 'templates/first-tab.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.second', {
      url: '/second',
      views: {
        'second-tab': {
          templateUrl: 'templates/second-tab.html',
          controller: 'ChatsCtrl'
        }
      }
    })
  
 
  
  .state('tab.other', {
      url: "/other",
      views: {
        'tab': {
          templateUrl: "templates/other.html",
  
        }
      }
    })


  .state('tab.third', {
    url: '/third',
    views: {
      'third-tab': {
        templateUrl: 'templates/third-tab.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // En caso de que no se haga conexión con ningun 'state', se usa esto como repliegue.

  $urlRouterProvider.otherwise('/tab/first');

});



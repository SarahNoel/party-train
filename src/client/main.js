var app = angular.module('partyTrain', ['ngRoute', 'satellizer']);

app.config(['$routeProvider', '$authProvider', function ($routeProvider, $authProvider) {
  //set up routes
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html'
    })
    .when('/login', {
      templateUrl: 'partials/login.html'
    })
    .otherwise({redirectTo: '/'});

  //satellizer social auth
  $authProvider.facebook({
    clientId: 'Facebook App ID'
  });

  $authProvider.google({
    clientId: 'Google Client ID'
  });

  $authProvider.github({
    clientId: 'GitHub Client ID'
  });

  $authProvider.linkedin({
    clientId: 'LinkedIn Client ID'
  });

  $authProvider.instagram({
    clientId: 'Instagram Client ID'
  });

  $authProvider.yahoo({
    clientId: 'Yahoo Client ID / Consumer Key'
  });

  $authProvider.live({
    clientId: 'Microsoft Client ID'
  });

  $authProvider.twitch({
    clientId: 'Twitch Client ID'
  });

  // No additional setup required for Twitter

  $authProvider.oauth2({
    name: 'foursquare',
    url: '/auth/foursquare',
    clientId: 'Foursquare Client ID',
    redirectUri: window.location.origin,
    authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
  });

}]);

var app = angular.module('app', []);

app.run(function ($templateCache) {
   $templateCache.put('listItem.html', "<ul><li ng-repeat='POSTERS in posts'>{{POSTERS.title}}</li></ul>");
   $templateCache.put('posters.html', "<img class='poster_img' ng-repeat ='POSTERS in posts' ng-show='$first'   src='{{POSTERS.image}}'>");
   $templateCache.put('text.html', "<h1 ng-repeat='POSTERS in posts' ng-show='$first'>{{POSTERS.title}}</h1>" +
       "<p ng-repeat='POSTERS in posts' ng-show='$first'>{{POSTERS.description}}</p>");
});

app.controller('mainCtrl', function ($scope) {
$scope.posts = POSTERS;
 $scope.getPosts = function () {
    return $scope.posts

 }
});

app.directive('list', function ($templateCache) {

   return {
      scope: false,
      restrict: 'E',
      templateUrl: "listItem.html",
      link: function (scope, element, attrs) {
      }
   };
});

app.directive('posters', function ($templateCache) {
   return{
      scope: false,
      restrict: 'E',
      templateUrl: "posters.html",
      link: function (scope, element, attrs) {

      }

   };
});
app.directive('text', function ($templateCache) {
   return{
      scope: false,
      restrict: 'E',
      templateUrl: "text.html",
      link: function (scope, element, attrs) {

      }

   };
});


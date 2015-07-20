'use strict';

/**
 * @ngdoc function
 * @name webControllerApp.controller:ControllerCtrl
 * @description
 * # ControllerCtrl
 * Controller of the webControllerApp
 */
angular.module('webControllerApp')
  .factory('webClient', function($websocket) {
    var webSocket = $websocket('wss://website.com/data');
    
    window.addEventListener("devicemotion", function(e){
      console.log(e);
    });
    
    var client = {
      up: function (roomId){
        console.log("up:" + roomId);
        webSocket.send(JSON.stringify({ roomId: roomId, action: 'up' }));
      },
      down: function (roomId){
        webSocket.send(JSON.stringify({ roomId: roomId, action: 'down' }));
      },
      left: function (roomId){
        webSocket.send(JSON.stringify({ roomId: roomId, action: 'left' }));
      },
      right: function (roomId){
        webSocket.send(JSON.stringify({ roomId: roomId, action: 'right' }));
      }
    };
    return client;
  })
  .controller('ControllerCtrl', function ($scope, $routeParams, webClient) {
    $scope.roomId = $routeParams.roomId;
    $scope.client = webClient;
  });

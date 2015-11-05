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
    var webSocket = $websocket('ws://52.192.81.231:3000');
    
    window.addEventListener("devicemotion", function(e){
      console.log(e);
    });
    
    var client = {
      up: function (roomId){
        webSocket.send("" + roomId + "," + 0);
      },
      down: function (roomId){
        webSocket.send("" + roomId + "," + 1);
      },
      left: function (roomId){
        webSocket.send("" + roomId + "," + 2);
      },
      right: function (roomId){
        webSocket.send("" + roomId + "," + 3);
      },
      shake: function (roomId){
        webSocket.send("" + roomId + "," + 4);
      }
    };
    return client;
  })
  .controller('ControllerCtrl', function ($scope, $routeParams, webClient) {
    $scope.roomId = $routeParams.roomId;
    $scope.client = webClient;
    
    //加速度を取得する
    var sensitivity = 30;
    var x1 = 0, y1 = 0, z1 = 0, x2 = 0, y2 = 0, z2 = 0;
    window.addEventListener('devicemotion', function (e) {
        x1 = e.accelerationIncludingGravity.x;
        y1 = e.accelerationIncludingGravity.y;
        z1 = e.accelerationIncludingGravity.z;
    }, false);
    setInterval(function () {
        var change = Math.abs(x1-x2+y1-y2+z1-z2);

        if (change > sensitivity) {
            $scope.client.shake($scope.roomId);
        }
        x2 = x1;
        y2 = y1;
        z2 = z1;
    }, 150);
    //mdlのclass反映
    componentHandler.upgradeAllRegistered();
  });
  
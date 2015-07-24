'use strict';

/**
 * @ngdoc function
 * @name webControllerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webControllerApp
 */
angular.module('webControllerApp')
  .controller('MainCtrl', function () {
    //mdlのclass反映
    componentHandler.upgradeAllRegistered();
  });

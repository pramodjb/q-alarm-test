'use strict';

/**
 * @ngdoc function
 * @name alarm.Service:Getapiservice
 * @description
 * # Getapi
 * Controller of the alarm
 */

angular.module('alarm')
  .factory('Dataservice', function ($http) {

  return{
    notification: function(){
      // /app/data.json
        return $http.post("http://dashboard-api.qwinix.io/build_status").success(function(response){
       // return $http.get("/data.json").success(function(response){

          return response;
        });
    }
}
});

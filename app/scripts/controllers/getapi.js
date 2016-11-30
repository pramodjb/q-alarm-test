'use strict';

/**
 * @ngdoc function
 * @name alarm.controller:GetapiCtrl
 * @description
 * # Getapi
 * Controller of the alarm
 */
 angular.module('alarm')
 .controller('GetapiCtrl', function (Dataservice, $interval, $scope, $timeout) {
  var callAtTimeout = {};
  var vm = this;
  vm.delay = 60000;
  vm.dataloading = false;
  vm.failure_count=0



  this.loadNotifications = function (){
    Dataservice.notification().then(function(response){
      if(response.status == 200){

        $scope.build_status = response.data.Build;
        vm.finalarray =[];
        vm.array= [];
        vm.array1= [];
        vm.autoplayval = 1;
        // start perticular failure
        $.each( $scope.build_status, function( index, value ) {
          // if(this.status = ("EMP" || "popular"))
          if(this.status == 'FAILURE' || this.status == 'UNSTABLE'){
            vm.failure_count= vm.failure_count +1;
            vm.array.push(this);
          }

           if(this.status) {
          vm.array1.push(this);

            }
        });
        if(vm.failure_count > 1){
         $scope.build_status=vm.array
       }
       else if((vm.failure_count == 1)){
            vm.autoplayval = 0; 
             $scope.build_status=vm.array1
       }
       // end failure

       console.log( $scope.autoplayval)

      
     }
     else {
      console.log("failure")
    }
  });
  };

  setTimeout(function() {
    vm.dataloading = true;
    $('#loader-wrapper').hide();

  }, 10000);

   // Put in interval, first trigger after 30 seconds
  //  $timeout(function(){
  //   this.loadNotifications();
  // }, 10000);

   //invoke initialy
   this.loadNotifications();

// };
});

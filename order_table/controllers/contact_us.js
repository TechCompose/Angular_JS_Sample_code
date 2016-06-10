app.controller('contactCtrl', function($scope,toaster) {
  $scope.pop = function(){
    toaster.pop('success', "", "Message send Successfully.");
    $scope.fname = ''
    $scope.email_val = ''
    $scope.phone_no = ''
    $scope.phone_no = ''
    $scope.msg_text = ''
    $scope.myForm.$setPristine();
  };
});

var app = angular.module('myApp', ['ngAnimate', 'ui.bootstrap']);
app.directive('jqDirectiveTest', ['$document', function($document) {
return {
  restrict: 'A',
  link: function(scope, element, attr) {
    element.on('mouseenter', function(event) {
      element.css('background-color', 'red');
    });
    element.on('mouseleave', function(event) {
      element.css('background-color', 'blue');
    });
    element.on('click', function(event) {
      element.css('background-color', 'green');
    });
  }
}
}]);
app.directive('imageDirectiveTest', function($document) {
  return {
    restrict: 'A',
  }
});

app.controller('formCtrl', function($scope) {
  $scope.birth_date1 = new Date();
  $scope.image_listing = [
    {src: 'img/02.jpg'},
    {src: 'img/04.jpg'},
    {src: 'img/05.jpg'},
    {src: 'img/09.jpg'}
  ];
  $scope.popup = {
    opened: false
  };
  $scope.open =function(){
      $scope.popup.opened = true;
  }
  $scope.edit_mode = true
  $scope.index_val = 0
  $scope.names = [
      {f_name : "Dhruvita", e_mail: 'dhruvita.rails2012@gmail.com', birth_date: new Date('1/20/2016'), phone_number: '0123456789'},
      {f_name : "Dhruvita1", e_mail: 'dhruvita.rails2012@gmail.com', birth_date: new Date('1/20/2016'), phone_number: '0123456789'}
  ];
  $scope.add_row_to_table = function(submit_type){
    if (submit_type == 'new'){
     $scope.names.push({
        f_name: $scope.fname,
        e_mail: $scope.email_val,
        birth_date: new Date($scope.birth_date1),
        phone_number: $scope.phone_no
     })
    }
    else{
      $scope.names[$scope.index_val] = {f_name : $scope.fname,e_mail : $scope.email_val,birth_date: new Date($scope.birth_date1), phone_number: $scope.phone_no};
      $scope.edit_mode = true
    }
     // Clear input fields after push
    $scope.fname = "";
    $scope.email_val = "";
    $scope.birth_date1 = "";
    $scope.phone_no = "";
  };
  $scope.remove_table_row = function(index){
    $scope.names.splice(index, 1);
  };
  $scope.edit_table_row = function(index){
    $scope.edit_mode = false
    $scope.index_val = index
    $scope.fname = $scope.names[index].f_name;
    $scope.email_val = $scope.names[index].e_mail;
    $scope.birth_date1 = $scope.names[index].birth_date;
    $scope.phone_no = $scope.names[index].phone_number;
  }
  $scope._Index = 0;
  // if a current image is the same as requested image
  $scope.isActive = function (index) {
      return $scope._Index === index;
  };
  // show prev image
  $scope.showPrev = function () {
      $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.image_listing.length - 1;
  };
  // show next image
  $scope.showNext = function () {
      $scope._Index = ($scope._Index < $scope.image_listing.length - 1) ? ++$scope._Index : 0;
  };
});

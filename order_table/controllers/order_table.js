app.controller('orderCtrl', function($scope) {
  $scope.total_val = 0
  $scope.orders = [
    {item_name : "Item1", price: 10, val_checked: 'true'},
    {item_name : "Item2", price: 20, val_checked: 'true'},
    {item_name : "Item3", price: 30, val_checked: 'true'},
    {item_name : "Item4", price: 40, val_checked: 'true'},
    {item_name : "Item5", price: 50, val_checked: 'true'}
  ];
  angular.forEach($scope.orders, function(value, key) {
    $scope.total_val += (value.price)
  });

  $scope.set_bg = function(index){
    if ($scope.orders[index].val_checked == 'false'){
      $('.test_'+index).addClass('row-green')
      $('.test_'+index).removeClass('row-red')
      $scope.total_val += $scope.orders[index].price
      $scope.orders[index].val_checked = 'true'
    }
    else{
      $('.test_'+index).addClass('row-red')
      $('.test_'+index).removeClass('row-green')
      $scope.total_val -= $scope.orders[index].price
      $scope.orders[index].val_checked = 'false'
    }
  }
});

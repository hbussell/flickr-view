exports.PhotoCtrl = function($scope) {  
  $scope.query = '';
  $scope.photos = [];

  $scope.submitSearch = function(){
      console.log('do search action:: ');
      console.log($scope.query);
  }
};


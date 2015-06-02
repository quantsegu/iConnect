
var shoppingCartModule = angular.module("technologyCart", [])
shoppingCartModule.controller("technologyController",
    function($scope) {
        $scope.items = [
            {name: "Product 1", price: 50, rank:5},
            {name: "Product 2", price: 20, rank: 3},
            {name: "Product 3", price: 180, rank: 4},
            {name: "Product 4", price: 180, rank: 4}
        ];
        $scope.update = function(index,isToUpdate) {
            if(isToUpdate)
            {
                alert('The action updated');
            }
            $scope.items.splice(index, 1);
        }
    }
);

shoppingCartModule.controller("projectController", ['$scope',
    function($scope){
        $scope.newSortIndexes =[];
        $scope.projects = [
            {name:"Test1", ProjectDetails:"bad",techs:[{tech:'Java'}, {tech:'Funk'}]}
        ];

    var mySort = document.getElementById("my-sort");
    new Sortable(mySort, {
        onUpdate: function (evt) {
            // get new sort order based on indexes
            var newSortIndexes = [];
            var liElements = mySort.getElementsByTagName("li");
            for (var i = 0; i < liElements.length; i++) {
                newSortIndexes.push(liElements[i].getAttribute('data-index'));
            }

            // process change. you would normally use a $http.post() here
            $scope.newSortIndexes = newSortIndexes;
            $scope.people = getSorted($scope.people, newSortIndexes);
            $scope.$apply();
        }
    });
}]);


function getSorted(arr, sortArr) {
    var result = [];
    for(var i=0; i<arr.length; i++) {
        result[i] = arr[sortArr[i]];
    }
    return result;
}

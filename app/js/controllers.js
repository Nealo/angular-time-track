var timetrackApp = angular.module('timetrackApp', []);

timetrackApp.controller('TimeEntryCtrl', function ($scope) {
	$scope.entries = [
		{
			'id': 1,
			'project': 'TAing',
			'time': 6,
			'date': '2014-01-23',
			'comment': 'This is cray cray.'
		},
		{
			'id': 2,
			'project': 'TAing1',
			'time': 3,
			'date': '2014-02-07',
			'comment': 'Rails is magic.'
		},
		{
			'id': 3,
			'project': 'TAing2',
			'time': 2,
			'date': '2014-02-15',
			'comment': 'Oh my god a test.'
		}
	];

	$scope.stats = [
		{
			'name': 'week',
			'value': 12
		},
		{
			'name': 'month',
			'value': 48
		},
		{
			'name': 'year',
			'value': 200
		}
	];

	// $http.get('http://localhost:1111/entries').success(function(data) {
	// 	$scope.entries = data;
	// });

	// $http.get('http://localhost:1111/stats').success(function(data) {
	// 	$scope.stats = data;
	// });


	$scope.addEntry = function (cat) {
		//send post to server to add an entry to database

		//after successful callback:

		 var id = $scope.entries[$scope.entries.length - 1].id; //this would be handled by server
		 $scope.newEntry.id = id;
		 $scope.entries.push($scope.newEntry);
		 console.log($scope.newEntry);
		 $scope.newEntry = {};
		console.log('newEntry');
		
	};

	$scope.editEntry = function () {

		//send PUT to server to update database

		//after successful callback:

		//find specific entry that changed
		console.log('editEntry')
		//send entry to back=end
	};

	$scope.deleteEntry = function (entry) {
		//send delete message to server to remove entry from database

		
		//find specific entry that changed and remove it
		var index = $scope.entries.indexOf(entry);

		if (index > -1) {
			$scope.entries.splice(index, 1);
		}

	};

});
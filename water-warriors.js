var waterWorksApp =  angular.module('waterWorksApp',[]);
waterWorksApp.controller('waterWarriorsController', function($scope){
    $scope.message ='Greetings';
    var myFirebaseRef = new Firebase("https://brilliant-inferno-3749.firebaseio.com/");
    $scope.activity='';
    console.log($scope.message);
    $scope.activityData = [{
        "showering":{
            "units":"gpm",
            "quantity":2
        }
    },
        {
            "toilet":{
                "units":"gpf",
                "quantity":2
            }
        },
        {
            "brushingteeth":{
                "units":"gpm",
                "quantity":1
            }
        },
        {"washinghands":{
            "units":"gpm",
            "quantity":1
        }
        }
    ];
    $scope.add = function(){
        myFirebaseRef.child('users/Tushar').push({
            activity: $scope.activity,
            author: "Tushar",
            location: {
                city: "San Francisco",
                state: "California",
                zip: 94103
            }
        });
    };

    /*$scope.list = function(){
        myFirebaseRef.child('users').on("value", function(snapshot) {
            var result = snapshot.val();
            //console.log(result);
             for(var user in result){
                console.log(result[user]);

                 for(var prop in result[user]){
                     console.log(result[user][prop].activity);
                 }
             }

        });
    };*/


    $scope.setIndexPage = function(){
        var index = document.querySelector('#index-content');
        var leadership = document.querySelector('#leadership-content');
        var activities = document.querySelector('#activity-content');
            index.style.display = 'block';
            leadership.style.display ='none';
            activities.style.display = 'none';
    };

    $scope.setLeadershipPage = function(){
        var index = document.querySelector('#index-content');
        var leadership = document.querySelector('#leadership-content');
        var activities = document.querySelector('#activity-content');
        index.style.display = 'none';
        leadership.style.display ='block';
        activities.style.display = 'none';
    };

    $scope.setActivityPage = function(){
        var index = document.querySelector('#index-content');
        var leadership = document.querySelector('#leadership-content');
        var activities = document.querySelector('#activity-content');
        index.style.display = 'none';
        leadership.style.display ='none';
        activities.style.display = 'block';
    }
});


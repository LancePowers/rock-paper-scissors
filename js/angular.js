// sample angular code

var app = angular.module('myApp', []);

app.controller('myController', function ($scope) {
    $scope.playerScore = 0;
    $scope.computerScore = 0;
    $scope.outcome = null;
    $scope.playerChoice = null;
    $scope.computerChoice = null;
    $scope.turn = function (playerChoice) {
        var choices = ['rock', 'paper', 'scissors'];
        $scope.playerChoice = playerChoice;
        $scope.tie = false;
        $scope.computerChoice = choices[Math.floor(Math.random() * 3)];
        if ($scope.playerChoice === $scope.computerChoice) {
            $scope.outcome = 'tie';
        } else if ($scope.playerChoice === 'rock') {
            if ($scope.computerChoice === 'paper') {
                $scope.computerScore++;
                $scope.outcome = "you stink the computer won";
            } else if ($scope.computerChoice === 'scissors') {
                $scope.playerScore++;
                $scope.outcome = "You're bound to win sometime.";
            }
        } else if ($scope.playerChoice === 'paper') {
            if ($scope.computerChoice === 'scissors') {
                $scope.computerScore++;
                $scope.outcome = "Practice more noob!";
            } else if ($scope.computerChoice === 'rock') {
                $scope.playerScore++;
                $scope.outcome = "You're slightly better than a coin flip";
            }
        } else if ($scope.playerChoice === 'scissors') {
            if ($scope.computerChoice === 'rock') {
                $scope.computerScore++;
                $scope.outcome = "It's never too late to quit...";
            } else if ($scope.computerChoice === 'paper') {
                $scope.playerScore++;
                $scope.outcome = "HOLY JESUS ABOUT TIME!!!";
            }
        }
    }
});
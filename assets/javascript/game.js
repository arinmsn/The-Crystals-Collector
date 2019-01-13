$(document).ready(function() {
    // Returns a random integer between min (include) and max (include)
    // Format:  Math.floor(Math.random() * (max - min + 1)) + min;
    // Number should be between 19-120
    var computerChoice = Math.floor((Math.random() * 102) + 19);

    // Appending the randomly generated number to the number2Match 
    $(".number2Match").text(computerChoice);

    // Variables for the 4 gems
    // Format:  Math.floor(Math.random() * (max - min + 1)) + min;
    // Number should be between 1-12
    var gem1 = Math.floor((Math.random()*12) +1);
    var gem2 = Math.floor((Math.random()*12) +1);
    var gem3 = Math.floor((Math.random()*12) +1);
    var gem4 = Math.floor((Math.random()*12) +1);

    var userTotals = 0;
    var wins = 0;
    var losses = 0;

    //Appending the results for the wins/losses
    $("pointWins").text(wins);
    $("pointLosses").text(losses);

    // Function to reset the game
    function reset() {
        computerChoice = Math.floor((Math.random()*102) + 19);
        $(".number2Match").text(computerChoice);
        gem1 = Math.floor((Math.random()*12) +1);
        console.log(gem1);
        gem2 = Math.floor((Math.random()*12) +1);
        console.log(gem2);
        gem3 = Math.floor((Math.random()*12) +1);
        console.log(gem3);
        gem4 = Math.floor((Math.random()*12) +1);
        console.log(gem4);
        userTotals = 0;
        $("#pointsTotal").text(userTotals);
    }

    // Times lost are added to the userTotals
    function lost() {
        losses++;
        $(".pointLosses").text(losses);
        reset();
    }

    // Times won are added to userTotals
    function won() {
        wins++;
        $(".pointWins").text(wins);
        reset();
    }

    // Event setup for clicking the gems
    $("#red-gem").on("click", function() {
        userTotals = userTotals + gem1;
        console.log(userTotals);
        console.log(computerChoice);
        $("#pointsTotal").text(userTotals);
            if (userTotals == computerChoice) {
                won();
            } else if (userTotals > computerChoice) {
                lost();
        }
    });

    $("#orange-gem").on("click", function() {
        userTotals = userTotals + gem2;
        console.log(userTotals);
        console.log(computerChoice);
        $("#pointsTotal").text(userTotals);
            if (userTotals == computerChoice) {
                won();
            } else if (userTotals > computerChoice) {
                lost();
        }
    });

    $("#green-gem").on("click", function() {
        userTotals = userTotals + gem3;
        $("#pointsTotal").text(userTotals);
            if (userTotals == computerChoice) {
                won();
            } else if (userTotals > computerChoice) {
                lost();
        }
    });

    $("#blue-gem").on("click", function() {
        userTotals = userTotals + gem4;
        console.log(userTotals);
        console.log(computerChoice);
        $("#pointsTotal").text(userTotals);
            if (userTotals == computerChoice) {
                won();
            } else if (userTotals > computerChoice) {
                lost();
        }
    });
});












/*
                           Another method of doing the problem.
*/


/*

// Returns a random integer between min (include) and max (include)
// Format:  Math.floor(Math.random() * (max - min + 1)) + min;
// Number should be between 19-120
var computerChoice = Math.floor((Math.random() * 102) + 19);

// Appending the randomly generated number to the number2Match 
$(".number2Match").text(computerChoice);

// Variables for the 4 gems
// Format:  Math.floor(Math.random() * (max - min + 1)) + min;
// Number should be between 1-12
var gem1 = Math.floor((Math.random()*12) +1);
var gem2 = Math.floor((Math.random()*12) +1);
var gem3 = Math.floor((Math.random()*12) +1);
var gem4 = Math.floor((Math.random()*12) +1);

var userTotals = 0;
var wins = 0;
var losses = 0;

// Updating value of the wins, losses, and total
var updatedScore = function() {
    $("pointWins").empty();
    $("pointWins").text(wins);

    $("pointLosses").empty();
    $("pointLosses").text(losses);

    $("#pointsTotal").empty();
    $("#pointsTotal").text(userTotals);

}

// Reset the game
var reset = function() {
    userTotals = 0;
    computerChoice = Math.floor((Math.random()*102) + 19);

    $(".number2Match").empty();
    $(".number2Match").text(computerChoice);

    var gem1 = Math.floor((Math.random()*12) +1);
    var gem2 = Math.floor((Math.random()*12) +1);
    var gem3 = Math.floor((Math.random()*12) +1);
    var gem4 = Math.floor((Math.random()*12) +1);

    updatedScore();
}

// Start the game
var gameStart = function () {
    if (userTotals == computerChoice) {
       wins++;
       reset();
    } else if (userTotals > computerChoice) {
        losses++;
        reset();
    } else {
        updatedScore();
    }
}

// Update results
$(".number2Match").text(computerChoice);
$("#pointsTotal").text(userTotals);

// Setup event listener when user clicks on crystals
$(document).ready(function () {
    $("#red-gem").click(function() {
        userTotals = userTotals + gem1;
        gameStart();
    });

    $("#orange-gem").click(function() {
        userTotals = userTotals + gem2;
        gameStart();
    });

    $("#green-gem").click(function() {
        userTotals = userTotals + gem3;
        gameStart();
    });

    $("#blue-gem").click(function() {
        userTotals = userTotals + gem4;
        gameStart();
    });
});



*/

$(document).ready(function() {

    // Returns a random integer between min (include) and max (include)
    // Format:  Math.floor(Math.random() * (max - min + 1)) + min;
    // Number should be between 19-120
    var computerChoice = Math.floor(Math.random()*101+19);

    // Appending the randomly generated number to the number2Match 
    $(".number2Match").text(computerChoice);

    // Variables for the 4 gems
    // Format:  Math.floor(Math.random() * (max - min + 1)) + min;
    // Number should be between 1-12
    var gem1 = Math.floor(Math.random()*11+1);
    var gem2 = Math.floor(Math.random()*11+1);
    var gem3 = Math.floor(Math.random()*11+1);
    var gem4 = Math.floor(Math.random()*11+1);

    var userTotals = 0;
    var wins = 0;
    var losses = 0;

    //Appending the results for the wins/losses
    $("pointWins").text(wins);
    $("pointLosses").text(losses);

    // Function to reset the game
    function reset() {
        var computerChoice = Math.floor(Math.random()*101+19);
        $(".number2Match").text(computerChoice);
        var gem1 = Math.floor(Math.random()*11+1);
        var gem2 = Math.floor(Math.random()*11+1);
        var gem3 = Math.floor(Math.random()*11+1);
        var gem4 = Math.floor(Math.random()*11+1);
        userTotals = 0;
        $("#pointsTotal").text(userTotals);
    }

    // Times won are added to userTotals
    function won() {
        wins++;
        $("#pointWins").text(wins);
        reset();
    }

    // Times lost are added to the userTotals
    function lost() {
        losses++;
        $("#pointLosses").text(lossses);
        reset();
    }

    // Event setup for clicking the gems
    $("#red-gem").on("click", function() {
        userTotals = userTotals + gem1;
        $("#pointsTotal").text(userTotals);
            if (userTotals == computerChoice) {
                won();
            }
            else if (userTotals > computerChoice) {
                lost();
            }
    });

    $("#orange-gem").on("click", function() {
        userTotals = userTotals + gem2;
        $("#pointsTotal").text(userTotals);
            if (userTotals == computerChoice) {
                won();
            }
            else if (userTotals > computerChoice) {
                lost();
            }
    });

    $("#green-gem").on("click", function() {
        userTotals = userTotals + gem3;
        $("#pointsTotal").text(userTotals);
            if (userTotals == computerChoice) {
                won();
            }
            else if (userTotals > computerChoice) {
                lost();
            }
    });

    $("#blue-gem").on("click", function() {
        userTotals = userTotals + gem4;
        $("#pointsTotal").text(userTotals);
            if (userTotals == computerChoice) {
                won();
            }
            else if (userTotals > computerChoice) {
                lost();
            }
    });



});
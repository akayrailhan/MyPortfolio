var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("add").onclick = addScore;
    $("name").focus();
};

function displayResults() {
    var average = 0;
    var highest = 0;
    var highestScorer = ""; 
    for(var i = 0; i < scores.length; i++) {
        average = (average * i + scores[i]) / (i + 1);
        if(scores[i] > highest) {
            highest = scores[i];
            highestScorer = names[i]; 
        }
    }
    var resultHTML = "<h2>Results</h2>" +
                     "<p>Average score is " + average.toFixed(2) + "</p>" +
                     "<p>Highest score = " + highestScorer + " with a score of " + highest + "</p>";
    $("results").innerHTML = resultHTML;
}


function displayScores() {
    var tableHTML = "<h2>Scores</h2><table><tr><th>Name</th><th>Score</th></tr>";
    for(var i = 0; i < names.length; i++) {
        tableHTML += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
    }
    $("scores_table").innerHTML = tableHTML;
}

// ...existing code...

function addScore() {
    var name = $("name").value;
    var score = parseInt($("score").value, 10);
    
    // Clear any existing error message
    if($("error-message")) {
        $("error-message").remove();
    }
    
    if(name && score >= 0 && score <= 100) {
        names.push(name);
        scores.push(score);
        $("name").value = "";
        $("score").value = "";
        $("name").focus();
    } else {
        // Create and show error message
        var errorDiv = document.createElement('div');
        errorDiv.id = 'error-message';
        errorDiv.className = 'error-message';
        errorDiv.textContent = "You must enter a name and a valid score (0-100).";
        $("results").insertAdjacentElement('beforebegin', errorDiv);
    }
}

// Add these event listeners to clear error message when user starts typing
window.onload = function () {
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("add").onclick = addScore;
    $("name").focus();
    
    // Add input event listeners to clear error when typing
    $("name").addEventListener('input', clearError);
    $("score").addEventListener('input', clearError);
};

function clearError() {
    if($("error-message")) {
        $("error-message").remove();
    }
}

$.ajax({ url: "/api/friends", method: "GET" }).then(function (friends) {


    var userInput = {
        name: "user",
        photo: "image",
        scores: [
            3,
            2,
            4,
            1,
            2,
            1,
            5,
            1,
            3,
            1
        ]
    }
    var comparisonArray = []
    var match;
    for (var i = 0; i < friends.length; i++) {
        var total = 0;
        for (var j = 0; j < friends[i].scores.length; j++) {
            var sumtotals = parseInt(Math.abs(friends[i].scores[j] - userInput.scores[j]));
            console.log(sumtotals);
            total = parseInt(total + sumtotals);
        }
        console.log(total);
        comparisonArray.push(total);
    }
    matchFinder(comparisonArray);


    //On click to submit form and find match

    function matchFinder(array) {
        if (array[0] < array[1] && array[0] < array[2]) {
            match = friends[0];
        }
        else if (array[1] < array[2] && array[1] < array[0]) {
            match = friends[1];
        }
        else if (array[2] < array[1] && array[2] < array[0]) {
            match = friends[2];
        }
        else {
            match = friends[1];
        }
        presentMatch(match);
    }

    function presentMatch(match) {
        $("#modtitle").text(match.name);
        $(".modal-body").html(match.photo);

    }
});
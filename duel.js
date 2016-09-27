/**
 * Created by spencersimpson on 9/27/16.
 */

$("document").ready(function() {
    $("#fight-button").click(function (e) {
        e.preventDefault();

        var displaytext = "";
        var headertext = "";
        var p1_choice = $("input[name=player1-select]:checked").val();
        var p2_choice = $("input[name=player2-select]:checked").val();
        // console.log(p1_choice);
        // console.log(p2_choice);

        // Tie
        if (p1_choice == p2_choice) {
            displaytext = "You are equally matched in the ways of the force...";
            headertext = "That's no moon...";
        }
        else {
            // Player 1 wins
            if ((p1_choice == "luke") && (p2_choice == "vader")) {
                displaytext = "The force is strong with you Player 1! You win!";
                headertext = "Yahoo!!";
            }
            if ((p1_choice == "obiwan") && (p2_choice == "luke")) {
                displaytext = "The force is strong with you Player 1! You win!";
                headertext = "Yahoo!!";
            }
            if ((p1_choice == "vader") && (p2_choice == "obiwan")) {
                displaytext = "The force is strong with you Player 1! You win!";
                headertext = "Yahoo!!";
            }

            // Player 2 wins
            if ((p1_choice == "luke") && (p2_choice == "obiwan")) {
                displaytext = "The force is strong with you Player 2! You win!";
                headertext = "Yahoo!!";
            }
            if ((p1_choice == "vader") && (p2_choice == "luke")) {
                displaytext = "The force is strong with you Player 2! You win!";
                headertext = "Yahoo!!";
            }
            if ((p1_choice == "obiwan") && (p2_choice == "vader")) {
                displaytext = "The force is strong with you Player 2! You win!";
                headertext = "Yahoo!!";
            }
        }
        // console.log(displaytext);
        $("#battle-output").html(displaytext);
        $("#dialog-title").html(headertext);

        // showing dialog
        var dialog = document.querySelector("dialog");

        if (! dialog.showModal) {
            dialogPolyfill.registerDialog(dialog);
        }
        
        dialog.showModal();
        
        $("#close-button").click(function (e) {
            e.preventDefault();
            dialog.close();
        });
    });
});

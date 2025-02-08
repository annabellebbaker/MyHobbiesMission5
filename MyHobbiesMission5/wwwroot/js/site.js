// this is my code for the jQuery section
// it creates the functionality for the Hourly Rate for making cookies with me!

$(document).ready(function () {
    const hourlyRate = 20.0; // Cost per hour

    $("#calculateButton").click(function () {
        const hours = parseInt($("#hours").val());
        const cookies = parseInt($("#cookies").val());
        const email = $("#email").val().trim();
        const comments = $("#comments").val().trim();

        // Input validation
        if (!hours || hours < 1) {
            alert("Please enter a valid number of hours.");
            return;
        }

        if (!cookies || cookies < 1) {
            alert("Please enter the desired number of cookies for your party.");
            return;
        }

        if (!email || !validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Calculate total cost
        const totalCost = hours * hourlyRate;

        // Display result
        $("#totalCost").text(`$${totalCost.toFixed(2)}`);
        $("#confirmationMessage").html(
            `Your baking class is confirmed for <b>${hours} hour(s)</b>, making <b>${cookies} cookies</b>!<br>
             We will contact you soon at <b>${email}</b> for further details and class updates.`
        );
        $("#result").show();
    });

    // Email validation function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // email specifications narrowed down for user input
        return emailRegex.test(email); // email regulations expectation = Regex
    }
});

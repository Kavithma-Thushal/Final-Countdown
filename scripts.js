$(document).ready(function () {
    $("#calculateBtn").click(function () {
        let birthYear = $("#birthYear").val();
        let lifespan = $("#lifespan").val();
        let currentYear = new Date().getFullYear();

        if (!birthYear || !lifespan) {
            alert("Please enter both Birth Year and Expected Lifespan!");
            return;
        }

        let deathYear = parseInt(birthYear) + parseInt(lifespan);
        let yearsLeft = deathYear - currentYear;
        let daysLeft = yearsLeft * 365;

        if (yearsLeft <= 0) {
            $("#countdownResult").html(`You have reached the end! 🏁`);
        } else {
            $("#countdownResult").html(`You have approximately <strong>${daysLeft}</strong> days left to live. ⏳`);
        }
    });
});
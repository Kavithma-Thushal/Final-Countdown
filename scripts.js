$(document).ready(function () {
    $("#calculateBtn").click(function () {
        let birthDate = $("#birthDate").val();
        let lifespan = $("#lifespan").val();

        if (!birthDate || !lifespan) {
            alert("Please enter both Birth Date and Expected Lifespan!");
            return;
        }

        let birthDateObj = new Date(birthDate);
        let currentDate = new Date();
        let deathDate = new Date(birthDateObj);
        deathDate.setFullYear(deathDate.getFullYear() + parseInt(lifespan));

        let timeDiff = deathDate - currentDate;
        let daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        $("#countdownResult").html(`You have approximately <strong>${daysLeft}</strong> days left to live!`);
    });
});
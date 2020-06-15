// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeOff = document.getElementById("takeoff");
    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    let landButton = document.getElementById('landing');
    let abortMission = document.getElementById("missionAbort");
    let buttons = document.getElementsByTagName("button");
    let rocket = document.getElementById("rocket");
    let shuttleHeightNumber = Number(spaceShuttleHeight.innerHTML);

    takeOff.addEventListener("click", function() {
        let confirmTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmTakeOff) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "10,000";
        }
    });

    landButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = "0";
    });

    abortMission.addEventListener("click", function() {
        let confirmAbort = window.confirm("Confirm that you want to abort the mission");
        if (confirmAbort) {
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "0";

        }
    });

    buttons[0].addEventListener("click", function() {
        rocket.style.transform += "translateY(-10px)";
        shuttleHeightNumber += 10000;
        spaceShuttleHeight.innerHTML = String(shuttleHeightNumber);
    });
    buttons[1].addEventListener("click", function() {
        rocket.style.transform += "translate(0px, 10px)";
        shuttleHeightNumber -= 10000;
        spaceShuttleHeight.innerHTML = String(shuttleHeightNumber);
    });
    buttons[2].addEventListener("click", function() {
        rocket.style.transform += "translate(10px, 0px)";
    });
    buttons[3].addEventListener("click", function() {
        rocket.style.transform += "translate(-10px, 0px)";
    });
});

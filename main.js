document
  .getElementById("playersForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let players = document.getElementById("players").value;
    let conditionalMessage = document.getElementById("conditionalMessage");
    let startInput = document.getElementById("startInput");

    if (players % 2 === 0 && players > 0) {
      conditionalMessage.innerHTML = `You selected ${players} players to start, click play`;

      startInput.classList.add("buttonAnimation");

      if (startInput.value === "Play") {
        localStorage.setItem("playersNumber", players);
        window.location.href = "tournament.html";
      } else startInput.value = "Play";
    } else if (players <= 0) {
      conditionalMessage.innerHTML = "Numbers must be greater than 0";
      startInput.value = "Start";
      startInput.classList.remove("buttonAnimation");
    } else {
      conditionalMessage.innerHTML = "You have to select pair numbers";
      startInput.value = "Start";
      startInput.classList.remove("buttonAnimation");
    }
  });

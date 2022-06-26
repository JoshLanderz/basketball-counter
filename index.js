let hresult = 0;
let gresult = 0;

//HOME
function homeadd1() {
    hresult += 1
    document.getElementById("home-score").textContent = hresult;
}

function homeadd2() {
    hresult += 2
    document.getElementById("home-score").textContent = hresult;
}

function homeadd3() {
    hresult += 3
    document.getElementById("home-score").textContent = hresult;
}

//GUESTS
function guestadd1() {
    gresult += 1
    document.getElementById("guest-score").textContent = gresult;
}

function guestadd2() {
    gresult += 2
    document.getElementById("guest-score").textContent = gresult;
}

function guestadd3() {
    gresult += 3
    document.getElementById("guest-score").textContent = gresult;
}

//Add a new game button
let timeLeft = 30;
let elem = document.getElementById('timer');
let timerId = setInterval(countdown, 1000);


function newGame() {
    hresult = 0;
    gresult = 0;
    document.getElementById("home-score").textContent = hresult;
    document.getElementById("guest-score").textContent = gresult;
    /*timeLeft = 30;*/
}

    //Add a Timer
    
    /*function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
      } else {
        elem.innerHTML = "TIME: " + timeLeft + "s";
        timeLeft--;
      }

      function reset() {
      if (timeLeft == 0) {
        timeLeft = 30;
    }
}
    }*/





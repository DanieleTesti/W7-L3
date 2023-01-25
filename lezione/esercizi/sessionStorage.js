//sessionStorage è una memoria a breve termine e viene svuotato ongi volta che si chiude il tab o la finestra

const paragraphReference = document.getElementById("counter");
const btnReference = document.getElementById("increse");

let counterValue = parseInt(sessionStorage.getItem("lastCounterValue")) || 0;

const refreshCounter = function () {
  paragraphReference.innerText = counterValue;
};

refreshCounter(); //per far uscire 0 all'inizio

const increseCounter = function () {
  counterValue++;
  refreshCounter();
  console.log(counterValue);
  sessionStorage.setItem("lastCounterValue", counterValue);
};

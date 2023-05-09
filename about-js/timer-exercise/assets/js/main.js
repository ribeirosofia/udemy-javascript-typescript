const clock = document.querySelector(".clock");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const stopClock = document.querySelector(".stop");

start.addEventListener("click", (event) => {
  let displayHours = () => {
    let date = new Date();
    return date.toLocaleTimeString("pt-BR", {
      hour12: false,
    });
  };
  clock.innerHTML = setInterval(() => {
    // let createClock = displayHours();
  }, 1000);


  setTimeout(() => {
    clearInterval(timer);
  }, 3000);
});

pause.addEventListener("click", (event) => {
  console.log("Cliquei no pausar");
});

stopClock.addEventListener("click", (event) => {
  console.log("Cliquei no zerar");
});

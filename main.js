let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

// eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", pressEnter);

// funções callback
function handleTryClick(event) {
  event.preventDefault(); //não faça o padrão(não envia o form btn)

  const inputNumber = document.querySelector("#inputNumber");
  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();

    screen2.querySelector(
      "h2"
    ).innerText = `Acertou em ${xAttempts} tentativas`;
    // Verifica se o número digitado está fora do intervalo
  } else if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    alert("Número fora do intervalo entre 0 a 10");
  }

  inputNumber.value = "";
  xAttempts++;
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10); //reset o randomNumber
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function pressEnter(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}

/* 
addEventListener-função que adiciona duas coisas: um envento click, 
e uma função que é argumento da primeira, executada depois
(callback-somente depois do click) 
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", function () { //func anônima (callback), outra forma
  screen1.classList.remove("hide");
  screen2.classList.add("hide");
  xAttempts = 1;
});
*/

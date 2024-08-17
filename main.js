const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

//função callback
function handleTryClick(event) {
  event.preventDefault(); //não faça o padrão(não envia o form btn)

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");

    screen2.querySelector(
      "h2"
    ).innerText = `Acertou em ${xAttempts} tentativas`;
  }

  inputNumber.value = "";
  xAttempts++;
}

//eventos
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

/* addEventListener-função que adiciona duas coisas: um envento click, 
e uma função que é argumento da primeira, executada depois
(callback-somente depois do click) */
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", function () {
  //func anônima (callback), outra forma
  screen1.classList.remove("hide");
  screen2.classList.add("hide");
  xAttempts = 1;
});

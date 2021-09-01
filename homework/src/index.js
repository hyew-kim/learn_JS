const numSelectForm = document.querySelector("#selectNumForm");
const rangeInput = document.querySelector("#selectRangeInput");
const numSelectInput = numSelectForm.querySelector("input");
const numSelectBtn = document.querySelector("#selectNumBtn");
const scoreSection = document.querySelector("#showScore");
const resultSection = document.getElementById("showResult");
const USERNUM_KEY = "usernum";

rangeInput.addEventListener("click", onSelectRange);

function onSelectRange(event) {
  numSelectInput.max = rangeInput.value;
}

numSelectForm.addEventListener("submit", onSelectNum);

function onSelectNum(event) {
  const userNum = numSelectInput.value;
  event.preventDefault();
  scoreSection.classList.remove("hidden");
  resultSection.classList.remove("hidden");
  localStorage.setItem(USERNUM_KEY, userNum);
  showResult(
    localStorage.getItem(USERNUM_KEY),
    Math.floor(Math.random() * rangeInput.value + 1)
  );
}

function showResult(saveUserChosenNum, muchineChosenNum) {
  const resultMessage = ["You won!", "You lost!"];
  scoreSection.innerText = `You chose: ${saveUserChosenNum}, the machine chose: ${muchineChosenNum}`;
  if (saveUserChosenNum != muchineChosenNum)
    resultSection.innerText = `Show result: ${resultMessage[1]}`;
  else resultSection.innerText = `Show result: ${resultMessage[0]}`;
}

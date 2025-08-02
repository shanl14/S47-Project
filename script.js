function checkAnswer(button, isCorrect) {
  if (isCorrect) {
    document.body.style.backgroundColor = "#ffb6c1";
    alert("Well done, you chose the correct answer");
  } else {
    document.body.style.backgroundColor = "#90ee90";
    alert("Your answer is incorrect, try again");
  }

  setTimeout(() => {
    document.body.style.backgroundColor = "";
  }, 1000);
}

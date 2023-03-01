//Object of questions, answers, correct answer
var myQuestions = [
  {
    question: "The fifth planet from the sun is also the largest",
    answers: {
      a: "Earth",
      b: "Mercury",
      c: "Jupiter",
      d: "Neptune",
    },
    correctAnswer: "Jupiter",
  },
  {
    question:
      "Jupiter is the _______ planet from the sun",
    answers: {
      a: "First",
      b: "Eigth",
      c: "Ninth",
      d: "Fifth",
    },
    correctAnswer: "Fifth",
  },
  {
    question: "The _______ is the barrier protecting life on Earth from the sun's ultra violet rays.",
    answers: {
      a: "ozone layer",
      b: "nuclei",
      c: "whizzbanger",
      d: "mozone layer",
    },
    correctAnswer: "ozone layer",
  },
  {
    question: "The ozone layer is the barrier protecting _____ on Earth from the sun's ______ rays.",
    answers: {
      a: "trees, heat",
      b: "fish, ultra dry",
      c: "life, ultra violet",
      d: "wookies, death star",
    },
    correctAnswer: "life, ultra violet",
  },
];
//Use querySelector to select the timer
var timerElement = document.querySelector(".timer");
//Use querySelector to select the timer
var cardText = document.querySelector(".question");
//Use querySelector to select the Submit button
var submitButton = document.querySelector(".btn");
//Progress bar
var progressBar = document.querySelector("#myProgress");
//animate progress bar
var progressBarValue = document.getElementById("#myBar");
//Set the start time for the timer. When the timer reaches 0 the script will end.
var timeLeft = 180;
//Set the score counter
var scoreCounter = 0;
//Set the question counter
var questionCounter = 0;
//progressbar 
var progbar = 0;
//Set intervalID
var timerInterval;
//This is the introductory paragraph
var myIntro =
  "Try to answer the following coding questions in one minute. Every wrong answer takes ten seconds from the timer. Press start to begin.";

startScreen(myIntro);
submitButton.addEventListener("click", startButton);


//The timer function. The timer function starts running when the user clicks the Start button and is called in function startScreen();
function setTime() {
  clearInterval(timerInterval);

  timerInterval = setInterval(function () {
    timeLeft--;
    timerElement.textContent = "0:" + timeLeft;

    if (timeLeft < 10) {
      timerElement.textContent = "0:0" + timeLeft;
    }

    if (timeLeft <= 1) {
      clearInterval(timerInterval);
      window.open("high_score.html", "_self");
    }
  }, 1000);
}

//Set the styling for the start screen intro paragraph
function startScreen(content) {
  cardText.textContent = content;
  cardText.setAttribute("style", "text-align: center;");
  cardText.setAttribute("style", "font-size: 16px;");
  progressBar.style.display = "none";
}

//Start button is called in init. It sets up the start screen.
function startButton() {
  //Call the setTime function to start the timer
  setTime();
  //Call the setContent button to start the quiz section
  setContent();
  //hide Start button
  submitButton.style.display = "none";
  //show progress bar
  progressBar.style.display = "flex";
  
}

//The set content function takes data from the myQuestions object to start the quiz
function setContent() {

  //if the questionCounter is less than the length of the quiz ...
  if (questionCounter >= myQuestions.length) {
    localStorage.setItem("scoreCounter", scoreCounter);
    window.open("high_score.html", "_self");
    return;
  }


  //Clear the cardText text content
  cardText.innerHTML = "";
  //start progBar
  move();

  var list = document.createElement("div");
  list.id = "list";
  list.classList.add("list-group");
  //Q is the question at the questionCounter array position. Each time the user answers a question, one is added to the question counter, moving onto the next question
  var q = myQuestions[questionCounter];

  var question = document.createElement("div");
  question.textContent = q.question;

  var options = Object.entries(q.answers);

  for (var i = 0; i < options.length; i++) {
    var item = document.createElement("div");
    item.classList.add("list-group-item");
    item.setAttribute("data-key", options[i][0]);
    item.textContent = `${options[i][0].toUpperCase()}: ${options[i][1]}`;
    item.addEventListener("click", checkAnswer);
    list.appendChild(item);
  }

  cardText.appendChild(question);
  cardText.appendChild(list);

  function checkAnswer() {
    var selected =
      myQuestions[questionCounter].answers[
        this.getAttribute("data-key").toLowerCase()
      ];
    var correct = myQuestions[questionCounter].correctAnswer;

    if (selected === correct) {
      this.classList.add("bg-success");
      scoreCounter += 1;
    } else {
      this.classList.add("bg-danger");
      timeLeft -= 10;
    }

    questionCounter++;
    setTimeout(setContent, 1 * 1000);
  }

}

function move() {
  if (progbar == 0) {
    progbar = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 1000);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        progbar = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
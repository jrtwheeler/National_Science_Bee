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
  {
    question: "_________ are darker areas on the surface of the sun that indicate strong magnetic fields",
    answers: {
      a: "Sunspots",
      b: "Stars",
      c: "Sunflares",
      d: "Solarspots",
    },
    correctAnswer: "Sunspots",
  },
  {
    question:
      "Sunspots are darker areas on the surface of the _______ that indicate __________________",
    answers: {
      a: "stars, powerful solar fields",
      b: "moon, weak magnetic fields",
      c: "sun, strong magnetic fields",
      d: "earths, oceanic wave streams",
    },
    correctAnswer: "sun, strong magnetic fields",
  },
  {
    question: "Voyager was a __________ mission that sent two probes to the edge of the solar system",
    answers: {
      a: "NASA",
      b: "CIA",
      c: "FBI",
      d: "MADD",
    },
    correctAnswer: "NASA",
  },
  {
    question: "Voyager was a NASA mission that sent ______ probes to the ______________",
    answers: {
      a: "three, edge of the solar system",
      b: "one, edge of the solar system",
      c: "three, edge of the moon",
      d: "two, edge of the solar system",
    },
    correctAnswer: "two, edge of the solar system",
  },
  {
    question: "_________ powers stars by combining different atomic nucleii in a process also called nucleosynthesis.",
    answers: {
      a: "Fusion",
      b: "Fyoushun",
      c: "Myoushun",
      d: "Stars",
    },
    correctAnswer: "Fusion",
  },
  {
    question:
      "Fusion powers _______ by combining different atomic nucleii in a process also called nucleosynthesis",
    answers: {
      a: "stars",
      b: "moon",
      c: "sun",
      d: "earths",
    },
    correctAnswer: "stars",
  },
  {
    question: "Fusion powers stars by combining different _____________ in a process also called nucleosynthesis",
    answers: {
      a: "atomic nucleii",
      b: "subatomic nucleii",
      c: "atomic nucleus",
      d: "subatomic nucleus",
    },
    correctAnswer: "atomic nucleii",
  },
  {
    question: "Fusion powers stars by combining different atomic nucleii in a process also called _______________",
    answers: {
      a: "subnucleosynthesis",
      b: "nucleosynthesis",
      c: "nucleiisynthesis",
      d: "wookies",
    },
    correctAnswer: "nucleosynthesis",
  },
  {
    question:
      "The _______ is a modular laboratory orbiting the lower regions of Earth's atmosphere.",
    answers: {
      a: "National Space Station",
      b: "International Station",
      c: "Space House",
      d: "International Space Station",
    },
    correctAnswer: "International Space Station",
  },
  {
    question: "The International Space Station is a ________________ orbiting the lower regions of Earth's atmosphere.",
    answers: {
      a: "modular house",
      b: "modular laboratory",
      c: "angular laboratory",
      d: "mogular laboratory",
    },
    correctAnswer: "modular laboratory",
  },
  {
    question: "The International Space Station is a modular laboratory orbiting the _____________ of Earth's atmosphere.",
    answers: {
      a: "lower regions",
      b: "upper regions",
      c: "middle regions",
      d: "edge of space",
    },
    correctAnswer: "lower regions",
  },
  {
    question:
      "_______ was an American astronomer who named a type of radiation that is emitted from black holes",
    answers: {
      a: "Stephen Hawking",
      b: "Stephen Tyler",
      c: "Samual Hawking ",
      d: "Maddy James",
    },
    correctAnswer: "Stephen Hawking",
  },
  {
    question: "Stephen Hawking was an American astronomer who named a type of what?",
    answers: {
      a: "stars that emitted a bright light",
      b: "radiation that is emitted from black holes",
      c: "moon that is emitted a low frequency",
      d: "subatomic nucleus",
    },
    correctAnswer: "radiation that is emitted from black holes",
  },
  {
    question: "What is the brightest star in the night sky?",
    answers: {
      a: "Dad",
      b: "Sirius",
      c: "Snape",
      d: "Dogstarr",
    },
    correctAnswer: "Sirius",
  },
  {
    question:
      "_______ are a goup of common, aquatic animals many of whom belong to the vertebrate osteichthyes.",
    answers: {
      a: "Dolphins",
      b: "Dogs",
      c: "People",
      d: "Fish",
    },
    correctAnswer: "Fish",
  },
  {
    question: "are a goup of common, aquatic animals many of whom belong to the _____________.",
    answers: {
      a: "vertebrate osteichthyes",
      b: "vertebrate osteichthyes",
      c: "vertebrate osteichthyes",
      d: "vertebrate osteichthyes",
    },
    correctAnswer: "vertebrate osteichthyes",
  },
  {
    question: "The cell _____ house its genetic material and is the site of DNZ replication.",
    answers: {
      a: "nucleus",
      b: "mitochondria",
      c: "wall",
      d: "modular",
    },
    correctAnswer: "nucleus",
  },
  {
    question: "The _____ is located in the constellation Ursala Major.",
    answers: {
      a: "Little Dipper",
      b: "Big Dipper",
      c: "North Star",
      d: "Orion",
    },
    correctAnswer: "Big Dipper",
  },
  {
    question: "The Big Dipper is located in the constellation ________.",
    answers: {
      a: "Ursala Major",
      b: "Ursala Minor",
      c: "Ursala the Sea Witch",
    },
    correctAnswer: "Ursala Major",
  },
  {
    question: "The _____ is a process that involves an increase between different points.",
    answers: {
      a: "expansion of the universe",
      b: "speed of light",
      c: "speed of sound",
      d: "thermodynamics",
    },
    correctAnswer: "expansion of the universe",
  },
  {
    question: "The ________ is the process of transferring pollen from the anther of a plant to the sigma of another plant.",
    answers: {
      a: "probability",
      b: "provocation",
      c: "pollination",
    },
    correctAnswer: "pollination",
  }
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
  //clear local storage
  localStorage.clear();
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
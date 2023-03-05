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
      "_______ are a group of common, aquatic animals many of whom belong to the vertebrate osteichthyes.",
    answers: {
      a: "Dolphins",
      b: "Dogs",
      c: "People",
      d: "Fish",
    },
    correctAnswer: "Fish",
  },
  {
    question: "are a group of common, aquatic animals many of whom belong to the _____________.",
    answers: {
      a: "vertebrate osteichthyes",
      b: "vertebrate osteichthyes",
      c: "vertebrate osteichthyes",
      d: "vertebrate osteichthyes",
    },
    correctAnswer: "vertebrate osteichthyes",
  },
  {
    question: "The cell _____ house its genetic material and is the site of DNA replication.",
    answers: {
      a: "nucleus",
      b: "mitochondria",
      c: "wall",
      d: "modular",
    },
    correctAnswer: "nucleus",
  },
  {
    question: "The _____ is located in the constellation Ursa Major.",
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
      a: "Ursa Major",
      b: "Ursa Minor",
      c: "Ursala the Sea Witch",
    },
    correctAnswer: "Ursa Major",
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
  },
  {
    question: "________ also known as adipose, is a type of tissue that stores energy and accumulates in obesity.",
    answers: {
      a: "Fat tissue",
      b: "Muscle tissue",
      c: "Brain tissue",
    },
    correctAnswer: "Fat tissue",
  },
  {
    question: "Fat tissue also known as __________, is a type of tissue that stores energy and accumulates in obesity.",
    answers: {
      a: "adipose",
      b: "addison",
      c: "madipose",
    },
    correctAnswer: "adipose",
  },
  {
    question: "The __________ is an organelle that is the site of protein synthesis within a",
    answers: {
      a: "riposone",
      b: "ribosone",
      c: "bipirone",
      d: "pibosome"
    },
    correctAnswer: "ribosome",
  },
  {
    question: "__________ are the reproductive components of angiosperms, plants that contain seed-producing fruits.",
    answers: {
      a: "Flowers",
      b: "Chocolates",
      c: "Staymens",
      d: "Leaves"
    },
    correctAnswer: "Flowers",
  },
  {
    question: "__________ is a steroid hormone that is prorduced by the adrenal glands. This hormone regulates the body's blood sugar, though it is most associated with the stress response.",
    answers: {
      a: "Steroids",
      b: "Cortisol",
      c: "Adrenaline",
      d: "Biosphere"
    },
    correctAnswer: "Cortisol",
  },
  {
    question: "In a  __________, the first trophic level consists of autotrophs, which produce their own food.",
    answers: {
      a: "food chain",
      b: "rainbow",
      c: "periodic table",
      d: "food pyramid"
    },
    correctAnswer: "food chain",
  },
  {
    question: "The __________ consists of four chambers, with the top two chambers called the right and left atria and the lower two chambers called the right and left ventricles.",
    answers: {
      a: "pancreas",
      b: "heart",
      c: "eyeball",
      d: "appendix"
    },
    correctAnswer: "heart",
  },
  {
    question: "__________ are an early hominid species that lived in Asia and Europe until 40,000 yeares ago.",
    answers: {
      a: "Gorgons",
      b: "Hefalumps",
      c: "Bipeds",
      d: "Neanderthals"
    },
    correctAnswer: "Neanderthals",
  },
  {
    question: "Animals that lived in the __________ include the Triceratops and the Tyrannosaurus Rex.",
    answers: {
      a: "Cretaceous period",
      b: "Ice Age",
      c: "Jurassic period",
      d: "Triassic period"
    },
    correctAnswer: "Cretaceous period",
  },
  {
    question: "The __________ is the longest bone in the human body.",
    answers: {
      a: "radial bone",
      b: "rib cage",
      c: "femur",
      d: "thorax"
    },
    correctAnswer: "femur",
  },
  {
    question: "The __________ is the primary organ of the human body's central nervous system, which processes sensory input. It is a complex organ that consists of four lobes that each play a different role in information processing.",
    answers: {
      a: "tongue",
      b: "brain",
      c: "hypothalamus",
      d: "corpous colossum"
    },
    correctAnswer: "brain",
  },
  {
    question: "The __________ is a double-bilayer structure that controls the movement of materials in and out of the cell.",
    answers: {
      a: "mitochondria",
      b: "white blood cell",
      c: "plasma membrane",
      d: "occipital bone"
    },
    correctAnswer: "plasma membrane",
  },
  {
    question: "__________ is one-third of the density of steel and has the atommic number 27 .",
    answers: {
      a: "Gold",
      b: "Uranium",
      c: "Neon",
      d: "Aluminum"
    },
    correctAnswer: "Aluminum",
  },
  {
    question: "__________ is the chemical process of removing natural colors from a product.",
    answers: {
      a: "Corrosion",
      b: "Collision",
      c: "Burping",
      d: "Bleaching"
    },
    correctAnswer: "Bleaching",
  },
  {
    question: "__________ is an alkali metal with the atonmic number of 11. The chemical formula for salt is NaCl, meaning it forms by a 1:1 ration of sodium and chloride ions.",
    answers: {
      a: "Sodium",
      b: "Calcium",
      c: "Nitrogen",
      d: "Copper"
    },
    correctAnswer: "Sodium",
  },
  {
    question: "__________ is the lowest possible temperature where atoms of a substance are motionless. It is measured at 0 degrees Kelvin or -273.15 degrees Celsius or -459.67 degrees Fahrenheit.",
    answers: {
      a: "Total zero",
      b: "Absolute zero",
      c: "Super negative",
      d: "Dead zero"
    },
    correctAnswer: "Absolute zero",
  },
  {
    question: "__________ is a silvery-white heavy metal with the atomic number 92.",
    answers: {
      a: "Curium",
      b: "Aluminium",
      c: "Silver",
      d: "Uranium"
    },
    correctAnswer: "Uranium",
  },
  {
    question: "The dots of a __________ represent the valence elecdtronis of a molecule.",
    answers: {
      a: "Lewis structure",
      b: "dot matrix",
      c: "dot-to-do puzzle",
      d: "Boyle's law box"
    },
    correctAnswer: "Lewis structure",
  },
  {
    question: "The __________ of a substance indicates how acidic or basic it is based on its hydrogen ion concentration.",
    answers: {
      a: "weight",
      b: "PhD",
      c: "pH",
      d: "acidosis"
    },
    correctAnswer: "pH",
  },
  {
    question: "__________ are a unit of memory involved in computing. They can be prefaced with kilo- , mega-, giga-, and others depending on their number",
    answers: {
      a: "Bytes",
      b: "PDFs",
      c: "Booleans",
      d: "Brainos"
    },
    correctAnswer: "Bytes",
  },
  {
    question: "__________ allows users to store their data on off-site locations.",
    answers: {
      a: "Rainbow storage",
      b: "Cloud storage",
      c: "Safe boxes",
      d: "Unit blocks"
    },
    correctAnswer: "Cloud storage",
  },
  {
    question: "__________ are a type of large, destructive wave that can be caused by seismic events.",
    answers: {
      a: "Super waves",
      b: "Typhoons",
      c: "Bomb waves",
      d: "Tsunamis"
    },
    correctAnswer: "Tsumnamis",
  },
  {
    question: "__________ is the natural form of silicon dioxide.",
    answers: {
      a: "Quartz",
      b: "Amethyst",
      c: "Diamond",
      d: "Corodonum"
    },
    correctAnswer: "Quartz",
  },
  {
    question: "Silicate rock is the primary component of the __________, a region whose upper ductile portion is known as the asthenosphere.",
    answers: {
      a: "Earth's core",
      b: "Earth's mantle",
      c: "Volcanic surface",
      d: "Biosphere"
    },
    correctAnswer: "Earth's mantle",
  },
  {
    question: "__________ come in different varieties, including the thin and wispy cirrus and the tall and towering cumulonimbus.",
    answers: {
      a: "Thunderbolts",
      b: "Mesas",
      c: "Coniferous trees",
      d: "Clouds"
    },
    correctAnswer: "Clouds",
  },
  {
    question: "The layers of a __________ include the emergent, canopy, and understory. Temperate and tropical are two different varieties of this place.",
    answers: {
      a: "rainforest",
      b: "mangrove forest",
      c: "biome",
      d: "tundra"
    },
    correctAnswer: "rainforest",
  },
  {
    question: "__________ are a type of aquatic habitate home to numerous organism. The largest of these systems is the Great Barrier in Australia.",
    answers: {
      a: "The sunlight zone",
      b: "Kelp forests",
      c: "Brine lakes",
      d: "Coral reefs"
    },
    correctAnswer: "Coral reefs",
  },
  {
    question: "__________ are structures of the Earth, whose movements can cause continental drift.",
    answers: {
      a: "Tectonic plates",
      b: "Rings of fire",
      c: "Porcelain plates",
      d: "Continental shelves"
    },
    correctAnswer: "Tectonic plates",
  },
  {
    question: "__________ is an iron sulfide mineral that is also known as fool's gold due to its lustrous colors.",
    answers: {
      a: "Pirate",
      b: "Pyrite",
      c: "Steel",
      d: "Sulfur"
    },
    correctAnswer: "Pyrite",
  },
  {
    question: "__________ is a diagram constructued by its namesake French mathematician in which each number is equal to the sum of the two numbers above.",
    answers: {
      a: "Pascal's triangle",
      b: "Confucius's circle",
      c: "Marcel Marceau's shape",
      d: "Pythagoreus's theorum"
    },
    correctAnswer: "Pacal's triangle",
  },
  {
    question: "__________ is a statistical property that describes the condition in which the outcomes of one event has no relevance or effect on the outcome of another event.",
    answers: {
      a: "Freedom",
      b: "Equilibrium",
      c: "Venn's diagram",
      d: "Independence"
    },
    correctAnswer: "Independence",
  },
  {
    question: "The __________ is a round, three-dimensional shape with no edges.",
    answers: {
      a: "Circle",
      b: "Cone",
      c: "Sphere",
      d: "Pyramid"
    },
    correctAnswer: "Sphere",
  },
  {
    question: "Numbers are said to be __________ when the product of their squares is negative.",
    answers: {
      a: "Imaginary",
      b: "Fake",
      c: "Illusional",
      d: "Non-existant"
    },
    correctAnswer: "Imaginary",
  },
  {
    question: "__________ is a type of matter whose properties are opposite of the properties of normal atoms.",
    answers: {
      a: "Antihero",
      b: "Antechamber",
      c: "Dark matter",
      d: "Antimatter"
    },
    correctAnswer: "Antimatter",
  },
  {
    question: "The __________ represents the numbers of protons that an atom contains in its nucleus.",
    answers: {
      a: "electron load",
      b: "atomic number",
      c: "elemental number",
      d: "atomic hour"
    },
    correctAnswer: "atomic number",
  },
  {
    question: "__________ is a state of matter that consists of a high concentration of charged particles.",
    answers: {
      a: "Spasmoid",
      b: "Cold fusion",
      c: "Plasma",
      d: "Nucleoid"
    },
    correctAnswer: "Plasma",
  },
  {
    question: "The __________, also known as Mach-1, is a sonic barrier that creates a sonic boom when crossed.",
    answers: {
      a: "Speed of sound",
      b: "Sonic sound",
      c: "Speed of light",
      d: "Weight of sound"
    },
    correctAnswer: "speed of sound",
  },
  {
    question: "__________ is a force that opposes motion between two surfaces.",
    answers: {
      a: "Gravity",
      b: "Kinetic energy",
      c: "Static",
      d: "Friction"
    },
    correctAnswer: "Friction",
  },
  {
    question: "__________ are particles with a negative charge that orbit the nucleus.",
    answers: {
      a: "Electrons",
      b: "Ions",
      c: "Protons",
      d: "Neutrons"
    },
    correctAnswer: "Electrons",
  },
  {
    question: "__________ is the measure of a system's disorder. All systems tend toward entropy according tothe Second Law of Thermodynamics.",
    answers: {
      a: "Entropy",
      b: "Confusion",
      c: "Displacement",
      d: "Toxicity"
    },
    correctAnswer: "Bleaching",
  },
  {
    question: "__________ is a type of energy that an object possesses due to its motion. It is usually contrasted with potential energy.",
    answers: {
      a: "Physical motion",
      b: "Kinetic energy",
      c: "Heat",
      d: "Speedball"
    },
    correctAnswer: "Kinetic energy",
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
var questionCounter = getRandomInt(1, myQuestions.length);
//progressbar 
var progbar = 0;
//Set intervalID
var timerInterval;
//This is the introductory paragraph
var myIntro =
  "Try to answer the following coding questions in one minute. Every wrong answer takes ten seconds from the timer. Press start to begin.";

startScreen(myIntro);
submitButton.addEventListener("click", startButton);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


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
  }, 3000);
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
    questionCounter=getRandomInt(1, myQuestions.length);;
    console.log(questionCounter);
    setTimeout(setContent, 1 * 1000);
  }

}

function move() {
  if (progbar == 0) {
    progbar = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 3000);
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
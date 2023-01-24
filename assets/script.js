var highScore = [];
var initials = [];
var timer = 45;
var timeInterval;
var state = 0
const questions = {
  q1: {
    question: "Commonly used data types DO NOT include:",
    a1: "1. strings",
    a2: "2. booleans",
    a3: "3. alerts",
    a4: "4. numbers"
  },
  q2: {
    question: "The condition in an if/else statement is enclosed with ______.",
    a1: "1. quotes",
    a2: "2. curly brackets",
    a3: "3. parenthesis",
    a4: "4. square brackets",
  },
  q3: {
    question: "String values must be enclosed within ____ when being assigned to variables",
    a1: "1. commas",
    a2: "2. curly brackets",
    a3: "3. quotes",
    a4: "4. parenthesis",
  },
  q4: {
    question: "A very useful tool used during development and debugging for printing content to debugger is:",
    a1: "1. JavaScript",
    a2: "2. terminal/bash",
    a3: "3. for loops",
    a4: "4. console.log",
  },
  q5: {
    question: "Arrays in JavaScript can be used to store _____.",
    a1: "1. numbers and strings",
    a2: "2. other arrays",
    a3: "3. booleans",
    a4: "4. all of the above",
  }
};


// Hides the answers/question until needed
document.getElementById("answers").hidden = true;

var timerEl = document.getElementById("timer");

// Switches from start menu to question set 1
var startButton = document.getElementById("start");
startButton.addEventListener("click", function (event) {

  // Hides start menu, displays question set 1
  document.getElementById("beginText").hidden = true;
  document.getElementById("start").hidden = true;
  document.getElementById("answers").hidden = false;

  // Pulls first set of questions/answers
  document.getElementById("challenge").textContent = questions.q1.question;
  document.getElementById("a1").textContent = questions.q1.a1;
  document.getElementById("a2").textContent = questions.q1.a2;
  document.getElementById("a3").textContent = questions.q1.a3;
  document.getElementById("a4").textContent = questions.q1.a4;

  state = 1


  // Starts timer
  startTimer();
});


function startTimer() {
  timeInterval = setInterval(function () {
    // When timer reaches 0 or below, timer will stop
    if (timer <= 0) {
      stopTimer();
    } else {
      timer--;
      document.getElementById("timer").textContent = "Timer: " + timer;
    }
  }, 1000);
}




// Variables for the buttons/choices
var a1Button = document.getElementById("a1");
var a2Button = document.getElementById("a2");
var a3Button = document.getElementById("a3");
var a4Button = document.getElementById("a4");




// Function for when button is clicked, it will assign a number based on choice
a1Button.addEventListener("click", function answerQuestion1() {
  answerQuestion(1);
});
a2Button.addEventListener("click", function answerQuestion2() {
  answerQuestion(2);
});
a3Button.addEventListener("click", function answerQuestion3() {
  answerQuestion(3);
});
a4Button.addEventListener("click", function answerQuestion4() {
  answerQuestion(4);
});


// Function to change sets of questions. 
// After a choice is made, the 'state' will move up 1 changing the set of questions
// If incorrect timer will minus 10
function answerQuestion(answer) {
  if (state == 1){
    document.getElementById("challenge").textContent = questions.q2.question;
  document.getElementById("a1").textContent = questions.q2.a1;
  document.getElementById("a2").textContent = questions.q2.a2;
  document.getElementById("a3").textContent = questions.q2.a3;
  document.getElementById("a4").textContent = questions.q2.a4;
  document.getElementById("result").hidden = false;
  if (answer == 3) {
    document.getElementById("result").textContent = "Correct!";
  } else {
    document.getElementById("result").textContent = "Wrong!";
    timer -= 10;
    document.getElementById("timer").textContent = "Timer: " + timer;
  }
  state++;

} else if (state == 2) {
  document.getElementById("challenge").textContent = questions.q3.question;
  document.getElementById("a1").textContent = questions.q3.a1;
  document.getElementById("a2").textContent = questions.q3.a2;
  document.getElementById("a3").textContent = questions.q3.a3;
  document.getElementById("a4").textContent = questions.q3.a4;
  document.getElementById("result").hidden = false;
  if (answer == 3) {
    document.getElementById("result").textContent = "Correct!";
  } else {
    document.getElementById("result").textContent = "Wrong!";
    timer -= 10;
    document.getElementById("timer").textContent = "Timer: " + timer;
  }
  state++;
} else if (state == 3) {
  document.getElementById("challenge").textContent = questions.q4.question;
  document.getElementById("a1").textContent = questions.q4.a1;
  document.getElementById("a2").textContent = questions.q4.a2;
  document.getElementById("a3").textContent = questions.q4.a3;
  document.getElementById("a4").textContent = questions.q4.a4;
  document.getElementById("result").hidden = false;
  if (answer == 3) {
    document.getElementById("result").textContent = "Correct!";
  } else {
    document.getElementById("result").textContent = "Wrong!";
    timer -= 10;
    document.getElementById("timer").textContent = "Timer: " + timer;
  }
  state++;
} else if (state == 4) {
  document.getElementById("challenge").textContent = questions.q5.question;
  document.getElementById("a1").textContent = questions.q5.a1;
  document.getElementById("a2").textContent = questions.q5.a2;
  document.getElementById("a3").textContent = questions.q5.a3;
  document.getElementById("a4").textContent = questions.q5.a4;
  document.getElementById("result").hidden = false;
  if (answer == 4) {
    document.getElementById("result").textContent = "Correct!";
  } else {
    document.getElementById("result").textContent = "Wrong!";
    timer -= 10;
    document.getElementById("timer").textContent = "Timer: " + timer;
  }
  state++;
} else if (state == 5) {
  if (answer == 4) {
    document.getElementById("result").textContent = "Correct!";
  } else {
    document.getElementById("result").textContent = "Wrong!";
    timer -= 10;
    document.getElementById("timer").textContent = "Timer: " + timer;
  }
  stopTimer();
}
};




// Stops the timer, hides questions, displays results page.
function stopTimer(){
  // Stops the timer function
  clearInterval(timeInterval);

  // Hide the question pages
  document.getElementById("answers").hidden = true;

  // Display the result page
  document.getElementById("challenge").textContent = "All Done!";
  document.getElementById("initialsText1").textContent = "Your final score is " + timer + ".";
  document.getElementById("initials").textContent = "";

  document.getElementById("initialsText1").hidden = false;
  document.getElementById("initialsText2").hidden = false;
  document.getElementById("initials").value = "";
  document.getElementById("initials").hidden = false;
  document.getElementById("initialsSubmit").hidden = false;
  state= 0;
} if(timer <= 0) {
  timer == 0
}


// Activates when initials are entered after the quiz
function enterInitials(){
  // Ensures initials are not empty
  if(document.getElementById("initials").value.length > 0){
      //Updates the initials list and highscore list
      initials.push(document.getElementById("initials").value);
      highScore.push(timer);
      timer = 45;

      // Hides the results page
     
      document.getElementById("initialsText1").hidden = true;
      document.getElementById("initialsText2").hidden = true;
      document.getElementById("initials").hidden = true;
      document.getElementById("initialsSubmit").hidden = true;

      // Displays the high score page
      document.getElementById("challenge").textContent = "High Scores";
      for(var i = 0; i < highScore.length; i++){
          document.getElementById("scoreList").textContent += initials[i]+": "+highScore[i] + ", ";
      }
      document.getElementById("scoreList").hidden = false;
      document.getElementById("goBack").hidden = false;
      document.getElementById("clearHighScore").hidden = false;
    }
  };
  
  var initialsSubmitButton = document.getElementById("initialsSubmit");
  initialsSubmitButton.addEventListener("click", enterInitials);

  // var highScoreLink = document.getElementById("highScore");
  // highScoreLink.addEventListener("click", viewHighScore);


  // Clears the highscore list and displays the start quiz page
function clearHighScores(){
  highScore = [];
  initials = [];
  goBack();
};
var clearHighScoreButton = document.getElementById("clearHighScore");
clearHighScoreButton.addEventListener("click", clearHighScores);

var goBackButton = document.getElementById("goBack");
goBackButton.addEventListener("click", goBack);

  // Displays the start quiz page
function goBack(){
  timer = 45;
  document.getElementById("timer").textContent = "Timer: " + timer;
  document.getElementById("scoreList").textContent = "";
  document.getElementById("scoreList").hidden = true;
  document.getElementById("goBack").hidden = true;
  document.getElementById("clearHighScore").hidden = true;
  document.getElementById("challenge").textContent = "Coding Quiz Challenge";
  document.getElementById("beginText").hidden = false;
  document.getElementById("start").hidden = false;
}

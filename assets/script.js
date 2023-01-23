var highScore = [];
var initials = [];
var timer = 90;
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







var a1Button = document.getElementById("a1");
var a2Button = document.getElementById("a2");
var a3Button = document.getElementById("a3");
var a4Button = document.getElementById("a4");





function answerQuestion1() {
  answerQuestion(1);
};



function answerQuestion2() {
  answerQuestion(2);
};



function answerQuestion3() {
  answerQuestion(3);
};



function answerQuestion4() {
  answerQuestion(4);
};


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
  if (answer == 3) {
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
    timer -= 10; //timer = timer - 10;
    document.getElementById("timer").textContent = "Timer: " + timer;
  }
  stopTimer();
}
};




// 
//   document.getElementById("result").textContent = "Correct";
// } else {
//   document.getElementById("result").textContent = "Wrong";
//   timer -=10;
//   document.getElementById("timer").textContent = "Timer: " + timer;
// }




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
// Stops the timer, hides questions, displays results page.
function stopTimer(){
  // Stops the timer function
  clearInterval(timeInterval);

}
document.getElementById("answers").hidden = true;


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

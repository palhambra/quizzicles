var highScore = [];
var initials = [];
var timer = 90;
var timeInterval;

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




document.getElementById("answers").hidden = true;

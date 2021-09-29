const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQus = 0;
let score = 0;

loadQus();

function loadQus() {
  deselectedQus();
  const currentQuizData = currentQus;
  questionEl.innerText = quizData[currentQuizData].question;
  a_text.innerText = quizData[currentQuizData].a;
  b_text.innerText = quizData[currentQuizData].b;
  c_text.innerText = quizData[currentQuizData].c;
  d_text.innerText = quizData[currentQuizData].d;
}

function deselectedQus() {
  answerEls.forEach((ans) => {
    ans.checked = false;
  });
}

function getCheckedData() {
  let answer;
  answerEls.forEach((ans) => {
    if (ans.checked) {
      answer = ans.id;

    }
});
return answer;
}

submit.addEventListener("click", () => {

  const answer = getCheckedData();
  console.log(answer)

  if (answer) {
    if (answer === quizData[currentQus].correct) {
      score++;
    }

    currentQus++;
    console.log(currentQus);
    if (currentQus < quizData.length) {
      loadQus();
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()" id"submit">Reload Page</button>
            `;
    }
  }
});

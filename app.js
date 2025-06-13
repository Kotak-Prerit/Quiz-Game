const start_button = document.querySelector(".btn button");
const instructions = document.querySelector(".rules");
const exit_btn = instructions.querySelector(".buttons .exit");
const continue_btn = instructions.querySelector(".buttons .Continue");
const quiz = document.querySelector(".quiz");
const result_box = document.querySelector(".result_box");
const answers = document.querySelector(".answers");
const time_line = document.querySelector(".question .time_line");
const timer = document.querySelector(".timer .sec");
const seconds = document.querySelector(".question .sec");
const next_btn = document.querySelector(".footer .next");
const answers_list = document.querySelector(".answers");
const restart_quiz = result_box.querySelector(".buttons .Continue");
const exit_quiz = result_box.querySelector(".buttons .exit");

start_button.onclick = () => {
  instructions.classList.add("active_rule");
  document.getElementById("start_btn").style.opacity = "0";
};

exit_btn.onclick = () => {
  instructions.classList.remove("active_rule");
  document.getElementById("start_btn").style.opacity = "1";
};

continue_btn.onclick = () => {
  instructions.classList.remove("active_rule");
  quiz.classList.add("activeQuiz");
  showQuetions(0);
  counter(1);
  startTimer(15);
};

let que_count = 0;
let que_num = 1;
let clock;
let timeValue = 15;
let score = 0;

function showQuetions(index) {
  const que_text = document.querySelector(".que_text");
  let que_tag =
    "<h3>" +
    questions[index].id +
    "." +
    " " +
    questions[index].question +
    "</h3>";
  let ans_list =
    '<div class="ans">' +
    questions[index].options[0] +
    "<p></p></div>" +
    '<div class="ans">' +
    questions[index].options[1] +
    "<p></p></div>" +
    '<div class="ans">' +
    questions[index].options[2] +
    "<p></p></div>" +
    '<div class="ans">' +
    questions[index].options[3] +
    "<p></p></div>";
  que_text.innerHTML = que_tag;
  answers_list.innerHTML = ans_list;
  const ans = answers.querySelectorAll(".ans");
  for (let i = 0; i < ans.length; i++) {
    ans[i].setAttribute("onclick", "optionSelected(this)");
  }
}

let correctIcon = '<i class="fa-solid fa-check"></i>';
let IncorrectIcon = '<i class="fa-solid fa-times"></i>';

function optionSelected(answer) {
  clearInterval(clock);
  let ansfetch = answer.textContent;
  let correct = questions[que_count].answer;
  let allOpt = answers.children.length;
  if (ansfetch == correct) {
    score += 1;
    console.log(score);
    answer.classList.add("correct");
    console.log("Correct Answer");
    answer.insertAdjacentHTML("beforeend", correctIcon);
  } else {
    answer.classList.add("wrong");
    console.log("Wrong Answer");
    answer.insertAdjacentHTML("beforeend", IncorrectIcon);

    for (let i = 0; i < allOpt; i++) {
      if (answers.children[i].textContent == correct) {
        answers.children[i].setAttribute("class", "ans correct");
        answers.children[i].insertAdjacentHTML("beforeend", correctIcon);
      }
    }
  }

  for (let i = 0; i < allOpt; i++) {
    answers.children[i].classList.add("disabled");
  }
  next_btn.style.display = "flex";
}

function startTimer(time) {
  clock = setInterval(countdown, 1000);
  function countdown() {
    timer.textContent = time;
    time--;
    if (time < 9) {
      let zero = timer.textContent;
      timer.textContent = "0" + zero;
    }
    if (time < 0) {
      clearInterval(clock);
      timer.textContent = "00";

      let correct = questions[que_count].answer;
      let allOpt = answers.children.length;

      for (let i = 0; i < allOpt; i++) {
        if (answers.children[i].textContent == correct) {
          answers.children[i].setAttribute("class", "ans correct");
          answers.children[i].insertAdjacentHTML("beforeend", correctIcon);
        }
      }
      for (let i = 0; i < allOpt; i++) {
        answers.children[i].classList.add("disabled");
      }
      next_btn.style.display = "flex";
    }
  }
}

restart_quiz.onclick = () => {
  result_box.classList.remove("activeresult");
  quiz.classList.add("activeQuiz");
  que_count = 0;
  que_num = 1;
  timeValue = 15;
  score = 0;
  clearInterval(clock);
  showQuetions(que_count);
  counter(que_num);
  startTimer(15);
  next_btn.style.display = "none";
};

exit_quiz.onclick = () => {
  window.location.reload();
};

next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_num++;
    showQuetions(que_count);
    counter(que_num);
    clearInterval(clock);
    startTimer(15);
    next_btn.style.display = "none";
  } else {
    showResultbox();
  }
};

function counter(index) {
  const ques_counter = quiz.querySelector(".footer .Que_done");
  let totalQueCount =
    "<span><p>" +
    index +
    "</p>Of<p>" +
    questions.length +
    "</p>Questions</span>";
  ques_counter.innerHTML = totalQueCount;
}
function showResultbox() {
  instructions.classList.remove("active_rule");
  quiz.classList.remove("activeQuiz");
  result_box.classList.add("activeresult");
  const correctAns = result_box.querySelector(".score_text");
  const totalQuestions = questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);
  let status = percentage < 40 ? "FAIL" : "PASS";
  let feedback = "";

  if (percentage < 40) {
    feedback = "Don't give up! Review the material and try again.";
  } else if (percentage < 60) {
    feedback = "You passed! Keep practicing to improve your score.";
  } else if (percentage < 80) {
    feedback = "Congrats on being above average.";
  } else if (percentage < 100) {
    feedback = "Great job! You're well above average.";
  } else {
    feedback = "Outstanding! You got a perfect score!";
  }

  let comment =
    `<span><strong>${status}</strong><br>` +
    `You scored ${score} out of ${totalQuestions}
    (${percentage}%)<p>${feedback}</p></span>`;
  correctAns.innerHTML = comment;
}

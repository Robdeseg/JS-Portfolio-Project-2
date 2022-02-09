
// track varaible across multiple file
let score = localStorage.getItem('score');

if ("not-at-all") {
  score = JSON.parse(0);
  console.log(score)
}
if ("several-days") {
  score = JSON.parse(1);
  console.log(score)
}
if ("more-than-half") {
  score = JSON.parse(2);
  console.log(score)
}
if ("every-day") {
  score = JSON.parse(3);
  console.log(score)
}
else {
  localStorage.setItem('score', '0');
  score = localStorage.getItem('score');
  score = JSON.parse(score);
}


// get the form
const form = document.querySelector('#form');

// add a submit listener to the form
form.addEventListener('submit', submitEvent => {

  //stop page from reloading
  submitEvent.preventDefault();

  // get the value of the radio inputs
  const answer = submitEvent.target.answer.value;
  console.log(answer)

  // if the answer is correct increase score
  localStorage.setItem('score', JSON.stringify(Number(score) + 1));

  // get the next page
  window.location.href = `quizq${submitEvent.target.page.value}.html`
})


// document.addEventListener("DOMContentLoaded", function () {
//       let answerEntered = document.getElementById("submit");

//       for (let submit of answerEntered) {
//         submit.addEventListener("click", function () {
//             if (this.getAttribute("data-type") === "submit") {
//               calculateScore();
//             }
//           })
//         }

//         function calculateScore() {
//           var answer1 = 0;
//           var answer2 = 0;
//           var answer3 = 0;
//           var answer4 = 0;
//           var answer5 = 0;
//           var answer6 = 0;
//           var answer7 = 0;
//           var answer8 = 0;
//           var answer9 = 0;
//         }

//         var answers = document.getElementsByTagName("input");
//         for (i = 0; answers.length; i++) {
//           if ("not-at-all".checked.value == i) {} else if ("several-days".checked.value == i + 1) {} else if ("more-than-half".checked.value == i + 2) {} else if ("every-day".checked.value == i + 3) {}
//         }

//         var score = document.getElementById("score");
//         score.innerHTML = "answer1 + answer2 + answer3 + answer4 + answer5 + answer6 + answer7 + answer8 + answer9";

//         var result = document.getElementById("result-blurb");
//         if (final - score < 4) {
//           result.innerHTML = "This is considered to be completely normal, though even people who have returned this result can find it helpful to speak to someone. If you would like us to put you in touch with a counsellor, do please get in touch. We'd be delighted to help.";
//         }
//         var result = document.getElementById("result-blurb");
//         if (final - score > 4 < 9) {
//           result.innerHTML = "You have been classified as 'mild' on the scale of depression severity. We encourage you go get in touch so that we can advise you towards the appropriate care.";
//         }
//         var result = document.getElementById("result-blurb");
//         if (final - score > 9 < 14) {
//           result.innerHTML = "You have been classified as 'moderate' on the scale of depression severity. We encourage you go get in touch so that we can advise you towards the appropriate care.";
//         }
//         var result = document.getElementById("result-blurb");
//         if (final - score > 14 < 19) {
//           result.innerHTML = "You have been classified as 'moderately severe' on the scale of depression severity. We encourage you go get in touch so that we can advise you towards the appropriate care.";
//         }
//         var result = document.getElementById("result-blurb");
//         if (final - score > 19 < 27) {
//           result.innerHTML = "You have been classified as 'severe' on the scale of depression severity. We encourage you go get in touch so that we can advise you towards the appropriate care.";
//         }
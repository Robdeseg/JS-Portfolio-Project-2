function calculateScore() {
    var answer1 = 0;
    var answer2 = 0;
    var answer3 = 0;
    var answer4 = 0;
    var answer5 = 0;
    var answer6 = 0;
    var answer7 = 0;
    var answer8 = 0;
    var answer9 = 0;
}

var answers = document.getElementsByTagName("input");
for (i=0; answers.length; i++) {
    if ("not-at-all".checked.value == i) {
    } else if ("several-days".checked.value == i + 1) {
    } else if ("more-than-half".checked.value == i + 2) {
    } else if ("every-day".checked.value == i + 3) {}
    }


    questionScore() {

    }
    
    incrementScore() {
    
    }
    
    displayFinalScore() {
    
    }
    
    displayRecommendation() {

    var answerbox = document.getElementById('result');
  if (final-score < 4) {
    answerbox.innerHTML = "This is considered to be completely normal, though even people who have returned this result can find it helpful to speak to someone. If you would like us to put you in touch with a counsellor, do please get in touch. We'd be delighted to help.";
  }
  var answerbox = document.getElementById('result');
  if (final-score > 4 < 9) {
    answerbox.innerHTML = "You have been classified as 'mild' on the scale of depression severity. We encourage you go get in touch so that we can advise you towards the appropriate care.";
  }
  var answerbox = document.getElementById('result');
  if (final-score > 9 < 14) {
    answerbox.innerHTML = "You have been classified as 'moderate' on the scale of depression severity. We encourage you go get in touch so that we can advise you towards the appropriate care.";
  }
  var answerbox = document.getElementById('result');
  if (final-score > 14 < 19) {
    answerbox.innerHTML = "You have been classified as 'moderately severe' on the scale of depression severity. We encourage you go get in touch so that we can advise you towards the appropriate care.";
  }
  var answerbox = document.getElementById('result');
  if (final-score > 19 < 27) {
    answerbox.innerHTML = "You have been classified as 'severe' on the scale of depression severity. We encourage you go get in touch so that we can advise you towards the appropriate care.";
  }


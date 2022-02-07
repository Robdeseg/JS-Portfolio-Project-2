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
    if ("not-at-all"[i].checked) {
    } else if ("several-days"[i].checked.value == i + 1) {
    } else if ("more-than-half"[i].checked.value == i + 2) {
    } else if ("every-day"[i].checked.value == i + 3) {}
    }


questionScore() {

}

incrementScore() {

}

displayFinalScore() {

}

displayRecommendation() {

}

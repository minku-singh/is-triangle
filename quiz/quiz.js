let formQuiz = document.querySelector(".form-quiz");
let submitBtn = document.querySelector("#submit");
let output = document.querySelector("#output");

const correctAnswers = ['90°', 'right angled']; 

submitBtn.addEventListener("click", handleSubmit);
output.style.display = "none";

function calculateScore(formResults){
    let score = 0;
    for(let i = 0; i < correctAnswers.length; i++){
        if(formResults.get(`answer${i+1}`) === correctAnswers[i]){
            score++;
        }
    }
    return score;
}

function handleSubmit(){
    output.style.display = "block";
    let formResults = new FormData(formQuiz);
    let score = calculateScore(formResults);
    output.innerText = `Score: ${score}`;
}
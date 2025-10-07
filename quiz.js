function checkAnswer(){
    const correctAnswer = "4";
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    if (userAnswer == correctAnswer){
        const feedback = document.getElementById('feedback');
        feedback.textContent = "You are correct!! Well done";
        
    }
    else{
        feedback.textContent ="That is not correct. Try again"
    }
   
}
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
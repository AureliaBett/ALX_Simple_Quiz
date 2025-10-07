function checkAnswer(){
    const correctAnswer = "4";
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    if (userAnswer === correctAnswer){
        const feedback = document.getElementById('feedback');
        feedback.textContent = "Correct! Well done.";
        
    }
    else{
        feedback.textContent ="That's incorrect. Try again!"
    }
   
}
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
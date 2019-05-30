(function() {
    function buildQuiz() {

        const output = [];


        myQuestions.forEach((currentQuestion, questionNumber) => {

            const answers = [];


            for (letter in currentQuestion.answers) {

                answers.push(
                    `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
                );
            }


            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
            );
        });


        quizContainer.innerHTML = output.join("");
    }

    function showResults() {

        const answerContainers = quizContainer.querySelectorAll(".answers");


        let numCorrect = 0;


        myQuestions.forEach((currentQuestion, questionNumber) => {

            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;


            if (userAnswer === currentQuestion.correctAnswer) {

                numCorrect++;


                answerContainers[questionNumber].style.color = "lightgreen";
            } else {

                answerContainers[questionNumber].style.color = "red";
            }
        });


        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
        {
            question: "What grade am I in?",
            answers: {
                a: "11th",
                b: "12th",
                c: "9th"
            },
            correctAnswer: "c"
        },
        {
            question: "How old am I?",
            answers: {
                a: "15",
                b: "14",
                c: "16"
            },
            correctAnswer: "a"
        },
        {
            question: "How tall am I?",
            answers: {
                a: "5'5",
                b: "6'",
                c: "5'9",
                d: "5'8"
            },
            correctAnswer: "d"
        },
        {
            question: "What coding languages do I know?",
            answers: {
                a: "Java",
                b: "HTML",
                c: "JavaScript",
                d: "Kotlin",
                e: "All of the above"
            },
            correctAnswer: "e"
        }
    ];


    buildQuiz();


    submitButton.addEventListener("click", showResults);
})();
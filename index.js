quizQuestions = [

    { question: "What is the capital of India?", answer: "New Delhi" },

    { question: "Which planet is known as the Red Planet?", answer: "Mars" },

    { question: "What is 5 + 7?", answer: "12" },

    { question: "Who is President of Russia?", answer: "Vladimir Putin" },

    { question: "Which language is used for web development?", answer: "JavaScript" }
];

function runQuiz() {

    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {

        const currentQuestion = quizQuestions[i];

        const userAnswer = prompt(currentQuestion.question);

        if (userAnswer === null) {

            alert("Quiz aborted. Your current score is: $(score}");

        return;
        }

        const normalizedAnswer = currentQuestion.answer.toLowerCase().trim();

        const normalizedUserInput =userAnswer.toLowerCase().trim();

        if (normalizedUserInput == normalizedAnswer) {

            alert("Correct!");

        score++;

    } else {

        alert("Wrong! The correct answer is: ${ currentQuestion answer}");


    }
    }

    alert("Quiz Over! Your final score is $(score) out of $(quizQuestions.length)");
}
runQuiz();
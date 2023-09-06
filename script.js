const questions = [
    {
        question: "Em uma escala de 1 a 10, quão confortável você se sente ao utilizar dispositivos eletrônicos e navegar na internet?",
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "3", correct: true},
            { text: "4", correct: true},
            { text: "5", correct: true},
            { text: "6", correct: true},
            { text: "7", correct: true},
            { text: "8", correct: true},
            { text: "9", correct: true},
            { text: "10", correct: true},
        ]
    },
    {
        question: "Em uma escala de 1 a 10, o quanto você concorda com a afirmação: A tecnologia tem melhorado a minha qualidade de vida?",
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "3", correct: true},
            { text: "4", correct: true},
            { text: "5", correct: true},
            { text: "6", correct: true},
            { text: "7", correct: true},
            { text: "8", correct: true},
            { text: "9", correct: true},
            { text: "10", correct: true},
        ]
    },
    {
        question: "Em uma escala de 1 a 10, quão bem você acredita que consegue gerenciar o equilíbrio entre o tempo online e offline?",
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "3", correct: true},
            { text: "4", correct: true},
            { text: "5", correct: true},
            { text: "6", correct: true},
            { text: "7", correct: true},
            { text: "8", correct: true},
            { text: "9", correct: true},
            { text: "10", correct: true},
        ]
    },
    {
        question: "Em uma escala de frequência de 1 a 10, quão frequentemente você busca aprender sobre novas ferramentas ou recursos tecnológicos?",
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "3", correct: true},
            { text: "4", correct: true},
            { text: "5", correct: true},
            { text: "6", correct: true},
            { text: "7", correct: true},
            { text: "8", correct: true},
            { text: "9", correct: true},
            { text: "10", correct: true},
        ]
    },
    {
        question: "Em uma escala de 1 a 10, quão preocupado você está com a segurança dos seus dados pessoais enquanto navega na internet?",
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "3", correct: true},
            { text: "4", correct: true},
            { text: "5", correct: true},
            { text: "6", correct: true},
            { text: "7", correct: true},
            { text: "8", correct: true},
            { text: "9", correct: true},
            { text: "10", correct: true},
        ]
    },
    {
        question: "Em uma escala de 1 a 10, o quanto você concorda com a afirmação: A tecnologia tem facilitado a minha comunicação com amigos e familiares?",
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "3", correct: true},
            { text: "4", correct: true},
            { text: "5", correct: true},
            { text: "6", correct: true},
            { text: "7", correct: true},
            { text: "8", correct: true},
            { text: "9", correct: true},
            { text: "10", correct: true},
        ]
    },
    {
        question: "Em uma escala de 1 a 10, qual é a sua dependência percebida da internet e de dispositivos eletrônicos para realizar tarefas cotidianas?",
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: true},
            { text: "3", correct: true},
            { text: "4", correct: true},
            { text: "5", correct: true},
            { text: "6", correct: true},
            { text: "7", correct: true},
            { text: "8", correct: true},
            { text: "9", correct: true},
            { text: "10", correct: true},
        ]
    },

];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correto");
        score++;
    }else{
        selectedBtn.classList.add("incorreto");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("incorreto");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Obrigado por responder! Sua opinião é importante para nós!`;
    nextButton.innerHTML = "Voltar para página inicial";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        window.location.href = "./RamonTrabalho.html";
    }
})

startQuiz();

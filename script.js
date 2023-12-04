// QUESTÕES
const questions = [
    {
        question: "Em que ano a Rainha Elizabeth 2ª morreu?",
        answers: [
            { text: "2020", correct: false},
            { text: "2022", correct: true},
            { text: "2021", correct: false},
            { text: "2023", correct: false},
        ]
    },
    {
        question: "Qual o maior mamífero terrestre do mundo?",
        answers: [
            { text: "Elefante", correct: true},
            { text: "Baleia Azul", correct: false},
            { text: "Rinoceronte", correct: false},
            { text: "Hipopótamo", correct: false},
        ]
    },
    {
        question: "Quem descobriu o Brasil?",
        answers: [
            { text: "Deodoro da Fonseca", correct: false},
            { text: "Bartolomeu Dias", correct: false},
            { text: "Cristóvão Colombo", correct: false},
            { text: "Pedro Álvares Cabral", correct: true},
        ]
    },
    {
        question: "Qual é o menor país do mundo?",
        answers: [
            { text: "Vaticano", correct: true},
            { text: "Rússia", correct: false},
            { text: "Islândia", correct: false},
            { text: "Groenlândia", correct: false},
        ]
    },
    {
        question: "Onde é o lugar natural mais baixo do planeta Terra?",
        answers: [
            { text: "Monte Everest", correct: false},
            { text: "Fossa Subglacial Bentley", correct: false},
            { text: "Fossa das Marianas", correct: true},
            { text: "Depressão Molloy", correct: false},
        ]
    },
    {
        question: "Qual é o maior deserto do mundo?",
        answers: [
            { text: "Deserto do Saara", correct: true },
            { text: "Deserto da Arábia", correct: false },
            { text: "Deserto de Gobi", correct: false },
            { text: "Deserto de Atacama", correct: false },
        ]
    },
    {
        question: "Quem foi o primeiro presidente dos Estados Unidos?",
        answers: [
            { text: "Thomas Jefferson", correct: false },
            { text: "George Washington", correct: true },
            { text: "Abraham Lincoln", correct: false },
            { text: "John F. Kennedy", correct: false },
        ]
    },
    {
        question: "Quantos elementos químicos naturais existem na tabela periódica?",
        answers: [
            { text: "92", correct: true },
            { text: "118", correct: false },
            { text: "104", correct: false },
            { text: "106", correct: false },
        ]
    },
    {
        question: "Quem escreveu 'Romeu e Julieta'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Homer", correct: false },
        ]
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        answers: [
            { text: "Terra", correct: false },
            { text: "Júpiter", correct: true },
            { text: "Vênus", correct: false },
            { text: "Saturno", correct: false },
        ]
    },
    {
        question: "Em que ano ocorreu a Revolução Russa?",
        answers: [
            { text: "1917", correct: true },
            { text: "1905", correct: false },
            { text: "1925", correct: false },
            { text: "1933", correct: false },
        ]
    },
    {
        question: "Quem foi o primeiro homem a pisar na Lua?",
        answers: [
            { text: "Neil Armstrong", correct: true },
            { text: "Buzz Aldrin", correct: false },
            { text: "Yuri Gagarin", correct: false },
            { text: "John Glenn", correct: false },
        ]
    },
    {
        question: "Quem foi o fundador da Microsoft?",
        answers: [
            { text: "Steve Jobs", correct: false },
            { text: "Bill Gates", correct: true },
            { text: "Mark Zuckerberg", correct: false },
            { text: "Elon Musk", correct: false },
        ]
    },
    {
        question: "Em que ano a Primeira Guerra Mundial começou?",
        answers: [
            { text: "1914", correct: true },
            { text: "1918", correct: false },
            { text: "1939", correct: false },
            { text: "1945", correct: false },
        ]
    },
    {
        question: "Quem foi o famoso físico teórico conhecido por desenvolver a Teoria da Relatividade?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Niels Bohr", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Marie Curie", correct: false },
        ]
    }
]
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

const totalQuestions = document.getElementById('total-questions');
const totalQuestionsCount = questions.length; 

// Função para mostrar as questões
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    const questionText = `Questão ${questionNo} de ${totalQuestionsCount}`;
    totalQuestions.innerHTML = questionText; // Atualize o valor do elemento HTML

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer); 
    });
}

// Função para recomeçar o quiz
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }  
};

// Função para selecionar uma resposta
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        } 
        button.disabled = true; // desativando o botão ao clicar em uma questão
    });
    nextButton.style.display = "block"; // mostrando o botão novamente para a próxima pergunta
    
}

// Função para mostrar a pontuação
function showScore(){
    resetState();
    questionElement.innerHTML = `Sua pontuação foi de ${score} para ${questions.length} questões!`
    nextButton.innerHTML = "Jogue Novamente!"
    nextButton.style.display = "block"
    nextButton.removeEventListener("click", handleNextButton);
    nextButton.addEventListener("click", restartQuiz);
    totalQuestions.style.display = 'none'
}

// Função para reiniciar o quiz
function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    nextButton.innerHTML = "Próximo";
    nextButton.removeEventListener("click", restartQuiz);
    nextButton.addEventListener("click", handleNextButton);

    totalQuestions.style.display = 'block';

    showQuestion();
}

// Função para o botão de próxima
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", handleNextButton);

// Função para começar o quiz
document.addEventListener('DOMContentLoaded', function() {
    const startScreen = document.getElementById('start-screen');
    const startButton = document.getElementById('start-btn');
    const quizContainer = document.querySelector('.app');

    startButton.addEventListener('click', startQuiz);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        startScreen.style.display = 'none';
        quizContainer.style.display = 'block';
        showQuestion();
    }
});
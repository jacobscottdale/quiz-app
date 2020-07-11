const questions = [
    {
        question: 'Which of these cocktails   contains: Rye, Lime juice, Simple syrup, and Tabasco?',
        answers: [
            {optionLabel: 'The Bone', value: 'the-bone'},
            {optionLabel: 'Vieux Carre', value: 'vieux-carre'},
            {optionLabel: 'Hot and Sour', value: 'hot-and-sour'},
            {optionLabel: 'The Torchlight', value: 'the-torchlight'}
        ],
        correctAnswer: 'the-bone'
    },
    {
        question: '2Which of these cocktails   contains: Rye, Lime juice, Simple syrup, and Tabasco?',
        answers: [
            {optionLabel: 'The Bone', value: 'the-bone'},
            {optionLabel: 'Vieux Carre', value: 'vieux-carre'},
            {optionLabel: 'Hot and Sour', value: 'hot-and-sour'},
            {optionLabel: 'The Torchlight', value: 'the-torchlight'}
        ],
        correctAnswer: 'vieux-carre'
    },
    {
        question: '3Which of these cocktails   contains: Rye, Lime juice, Simple syrup, and Tabasco?',
        answers: [
            {optionLabel: 'The Bone', value: 'the-bone'},
            {optionLabel: 'Vieux Carre', value: 'vieux-carre'},
            {optionLabel: 'Hot and Sour', value: 'hot-and-sour'},
            {optionLabel: 'The Torchlight', value: 'the-torchlight'}
        ],
        correctAnswer: 'hot-and-sour'
    },
    {
        question: '4Which of these cocktails   contains: Rye, Lime juice, Simple syrup, and Tabasco?',
        answers: [
            {optionLabel: 'The Bone', value: 'the-bone'},
            {optionLabel: 'Vieux Carre', value: 'vieux-carre'},
            {optionLabel: 'Hot and Sour', value: 'hot-and-sour'},
            {optionLabel: 'The Torchlight', value: 'the-torchlight'}
        ],
        correctAnswer: 'the-torchlight'
    },
    {
        question: '5Which of these cocktails   contains: Rye, Lime juice, Simple syrup, and Tabasco?',
        answers: [
            {optionLabel: 'The Bone', value: 'the-bone'},
            {optionLabel: 'Vieux Carre', value: 'vieux-carre'},
            {optionLabel: 'Hot and Sour', value: 'hot-and-sour'},
            {optionLabel: 'The Torchlight', value: 'the-torchlight'}
        ],
        correctAnswer: 'the-bone'
    }
    
]

let questionNumber = 0;
let score = 0;

function renderQuizStart() {
    // This function will be responsible for rendering the quiz in the DOM

    console.log('`renderQuizStart` ran');
    console.log(questions);
}

function handleQuizStart() {
    // This function will be responsible for when users press the "Start" button
    // Should pass to renderScoreHeader
    console.log('`handleQuizStart` ran');
}

function renderScoreHeader() {
    // This function will be responsible for rendering the score header in the DOM
    // Updates the question # and the score
    console.log('`renderScoreHeader` ran');
}

function renderQuestion() {
    // This function will be reponsible for rendering the quiz questions in the DOM
    // Should also call renderScoreHeader
    console.log('`renderQuestion` ran');
}

function handleAnswerSubmit() {
    // This function will be responsible for when users submit their answer for a question
    // Should pass to renderQuestionResponse
    
    console.log('`handleAnswerSubmit` ran');
}

function renderQuestionResponse() {
    // This function will be responsible for rendering a message in the DOM for the user depending on whether they answered correctly
    console.log('`renderQuestionResponse` ran');
}   

function handleNextQuestion() {
    // This function will be responsible for when users click the "Next" button the Question Response view
    // If not the final question, should pass on to renderQuestion
    // If the final question, should pass to renderQuizEnd
    console.log('`handleNextQuestion` ran');
}


function renderQuizEnd() {
    // This function will be responsible for rendering the end-of-quiz message in the DOM depending on the user's score
    console.log('`renderQuizEnd` ran');
}

function handleStartOver() {
    // This function will be responsible for when the user clicks the "Start Over" button on the QuizEnd view
    // Should pass to renderQuizStart
    console.log('`handleStartOver` ran');
}




// Callback function
function handleQuiz() {
    renderQuizStart();
    handleQuizStart();
    handleAnswerSubmit();
    handleNextQuestion();
    handleStartOver();
}

// When the page loads, call `handleQuiz`
$(handleQuiz);
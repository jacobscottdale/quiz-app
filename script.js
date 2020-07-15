const questions = [
    {
        question: 'Rye, lime juice, simple syrup, and tabasco?',
        answers: [
            { optionLabel: 'The Bone', value: 'the-bone' },
            { optionLabel: 'Vieux Carre', value: 'vieux-carre' },
            { optionLabel: 'Hot and Sour', value: 'hot-and-sour' },
            { optionLabel: 'The Torchlight', value: 'the-torchlight' }
        ],
        correctAnswer: 'the-bone',
        correctLabel: 'The Bone',
        cocktailDescription: 'Created by Esquire drinks correspondent David Wondrich, for The Chickenbone Cafe in Williamsburg. There\'s nothing particularly fancy about this cocktail, just a little tabasco to spice things up!'
    },
    {
        question: 'Rye, ginger beer, bitters and lemon juice',
        answers: [
            { optionLabel: 'Moscow Mule', value: 'moscow-mule' },
            { optionLabel: 'Pitcher in the Rye', value: 'pitcher-in-the-rye' },
            { optionLabel: 'Dry Rachel', value: 'dry-rachel' },
            { optionLabel: 'Horsefeather', value: 'horsefeather' }
        ],
        correctAnswer: 'horsefeather',
        correctLabel: 'Horsefeather',
        cocktailDescription: 'Built on a whiskey base and topped with ginger beer and a squeeze of lemon, the Horsefeather reads like a Kentucky take on the Moscow Mule.'
    },
    {
        question: 'Plymouth gin, lemon juice, Luxardo maraschino liqueur, and Crème de violette',
        answers: [
            { optionLabel: 'Purple Haze', value: 'purple-haze' },
            { optionLabel: 'Aviation', value: 'aviation' },
            { optionLabel: 'The Lilac', value: 'the-lilac' },
            { optionLabel: 'Don\'t Call Me Shirley', value: 'dont-call-me-shirley' }
        ],
        correctAnswer: 'aviation',
        correctLabel: 'Aviation',
        cocktailDescription: 'A classic gin sipper dating back to the turn of the 20th century, the Aviation was all but forgotten until about a decade ago. That’s when its secret-weapon ingredient, crème de violette, reappeared on the American market. Today, the cocktail is distinguished by its purple-bluish hue and floral, citrus flavors.'
    },
    {
        question: 'Beefeater gin, lemon,meadowsweet syrup, basil, and apple juice and ',
        answers: [
            { optionLabel: 'Basil Boquet', value: 'basil-boquet' },
            { optionLabel: 'Basil Fawlty', value: 'basil-fawlty' },
            { optionLabel: 'Gin Basil Bash', value: 'gin-basil-bash' },
            { optionLabel: 'The Crowded Glass', value: 'the-crowded-glass' }
        ],
        correctAnswer: 'basil-fawlty',
        correctLabel: 'Basil Fawlty',
        cocktailDescription: 'Served at Oskar’s Bar in London, this extremely British drink is named after an iconic British sitcom character. It\'s no laughing matter though-- it\'s seriously delicious!'
    },
    {
        question: 'Kummel Wolfschidmt liqueur, cardamom bitters, orange zest, Bols Genever, and tonic water',
        answers: [
            { optionLabel: 'The Dutchman', value: 'the-dutchman' },
            { optionLabel: 'The Currier', value: 'the-currier' },
            { optionLabel: 'Forgotten Tonic', value: 'forgotten-tonic' },
            { optionLabel: 'Crystal Clear', value: 'crystal-clear' }
        ],
        correctAnswer: 'forgotten-tonic',
        correctLabel: 'Forgotten Tonic',
        cocktailDescription: 'This refreshing cocktail from Gabor Omufer, Bartender at Cinnamon Club, combines the warm, malty flavours of Genever with the caraway and aniseed notes of the Kummel Wolfschmidt, finishing with a healthy splash of tonic.'
    }
]

let questionNumber = 0;
let questionIndex = questionNumber - 1;
let score = 0;
const results = {
    perfect: "That is a perfect score! You might be an alcoholic?",
    great: "That\'s great! Want to try for a better score?",
    good: "Not too shabby, but I bet you could do better",
    bad: "Alright, maybe we should start you off with a vodka cranberry... "
};
    

function generateQuizStart () {
    console.log('Generating start of quiz...')
    const quizStartContent =
        `<div>
        <h1>Cocktail Ingredients Quiz</h1>
        <h2>Can you use a list of ingredients to guess the name of the cocktail?</h2>
        <button class='start-button'>Start</button>
    </div>`;
    return quizStartContent;
}

function renderQuizStart() {
    // This function will be responsible for rendering the quiz in the DOM
    console.log('`renderQuizStart` ran');
    
    $('.quiz-start-end').html(generateQuizStart());
}

function handleQuizStartClicked() {
    // This function will be responsible for when users press the "Start" button
    // Should pass to renderScoreHeader
    $('.quiz-start-end').on('click', '.start-button', event => {
        console.log('`handleQuizStartClicked` ran');
        emptyField('.quiz-start-end');
        updateQuestionNumber();
        renderScoreHeader();
        renderQuestion();
    })
}

function updateQuestionNumber() {
    questionNumber++;
    questionIndex++
    console.log('questionNumber is ' + questionNumber);
}

function generateQuestion() {
    console.log('Generating question...')
    const questionContent =
        `<div class='question-picture quiz-question-answer-item'>
        <img src="pictures/ingredients-${questions[questionIndex].correctAnswer}.png" alt="cocktail ingredients">
    </div>
    <div class='quiz-question-answer-item question-field'>
    <form id='question-response-form'>
        <div class='question-response-container'>    
            <h3>
                Which of these cocktails contains 
            </h3>
            <h2 class='questionText'>
                ${questions[questionIndex].question}
            </h2>
            <div class='answers-container'>
                <div class='answers-item'>
                    <input name="cocktail-response" type="radio" value="${questions[questionIndex].answers[0].value}" required>
                    <label for="${questions[questionIndex].answers[0].value}">${questions[questionIndex].answers[0].optionLabel}</label>
                </div>

                <div class='answers-item'>
                    <input name="cocktail-response" type="radio" value="${questions[questionIndex].answers[1].value}">
                    <label for="${questions[questionIndex].answers[1].value}">${questions[questionIndex].answers[1].optionLabel}</label>
                </div>

                <div class='answers-item'>
                    <input name="cocktail-response" type="radio" value="${questions[questionIndex].answers[2].value}">
                    <label for="${questions[questionIndex].answers[2].value}">${questions[questionIndex].answers[2].optionLabel}</label>
                </div>

                <div class='answers-item'>
                    <input name="cocktail-response" type="radio" value="${questions[questionIndex].answers[3].value}">
                    <label for="${questions[questionIndex].answers[3].value}">${questions[questionIndex].answers[3].optionLabel}</label>
                </div>
                <div>
                <button type='submit'>Submit</button>
                </div>
            </div>
        </div>
    </form>
    </div>`;
    return questionContent;
}

function renderQuestion() {
    // This function will be reponsible for rendering the quiz questions in the DOM
    // Should also call renderScoreHeader
    console.log('`renderQuestion` ran');
    $('.quiz-question-answer').html(generateQuestion());
}

function generateScoreHeader() {
    const scoreHeaderContent =
    `<header>
        <ul>
            <li class='js-question-number'>Question ${questionNumber} of ${questions.length}</li>
            <li class='js-score'>Score: ${score}/${questions.length}</li>
        </ul>
    </header>`;
    return scoreHeaderContent;
}

function renderScoreHeader() {
    // This function will be responsible for rendering the score header in the DOM
    // Updates the question # and the score
    console.log('`renderScoreHeader` ran');
    $('.banner').html(generateScoreHeader);
}

function handleAnswerSubmit() {
    // This function will be responsible for when users submit their answer for a question
    // Should pass to renderQuestionResponse
    $('.quiz-question-answer').submit(event => {
        console.log('`handleAnswerSubmit` ran');
        event.preventDefault();
        const userAnswer = $('input:checked').val();
        renderQuestionResponse(userAnswer);
    })
}

function increaseScore() {
    score += 1;
}

function renderQuestionResponse(userAnswer) {
    // This function will be responsible for rendering a message in the DOM for the user depending on whether they answered correctly
    console.log('`renderQuestionResponse` ran');
    const correctAnswer = questions[questionIndex].correctAnswer;
    console.log(userAnswer);
    if (userAnswer === correctAnswer) {
        increaseScore();
        $('.quiz-question-answer').html(generateRightAnswer());
        renderScoreHeader();
    }
    else {
        $('.quiz-question-answer').html(generateWrongAnswer());
    }
}

function generateRightAnswer() {
    const questionResponseContent =
        `<div class='question-picture quiz-question-answer-item'>
            <img src="pictures/${questions[questionIndex].correctAnswer}.png" alt="${questions[questionIndex]} cocktail">
        </div>
        <div class='quiz-question-answer-item question-field'>
        <div class='question-response-container'>
            <h2>Correct!</h2>
            <h3>${questions[questionIndex].correctLabel}</h3>
            <p>
                ${questions[questionIndex].cocktailDescription}
            </p>
            <div>
            <button class='next-question'>Next</button>
            </div>
        </div>
        </div>`;
    return questionResponseContent;
}

function generateWrongAnswer() {
    const questionResponseContent =
    `<div class='question-picture quiz-question-answer-item'>
            <img src="pictures/${questions[questionIndex].correctAnswer}.png" alt="${questions[questionIndex]} cocktail">
        </div>
        <div class='quiz-question-answer-item question-field'>
        <div class='question-response-container'>
        <h2>Incorrect!</h2>
        <p>The correct answer was ${questions[questionIndex].correctLabel}</p>
            <div>
            <button class='next-question'>Next</button>
            </div>
        </div>
        </div>`;
    return questionResponseContent;
    
}

function handleNextQuestion() {
    // This function will be responsible for when users click the "Next" button the Question Response view
    // If not the final question, should pass on to renderQuestion
    // If the final question, should pass to renderQuizEnd
    $('.quiz-question-answer').on('click', '.next-question', event => {
        console.log('`handleNextQuestion` ran');
        if (questionNumber < 5) {
            updateQuestionNumber();
            console.log('loading question #' + questionNumber);
            renderScoreHeader();
            emptyField('.quiz-question-answer');
            renderQuestion();
        }
        else {
            console.log('That was the last question');
            emptyField('.quiz-question-answer');
            emptyField('.banner');
            renderQuizEnd();
        }
    })
}

function generateQuizEnd() {
    let resultText = '';
    if (score < 3) {
        resultText = results.bad;
    }
    else if (score < 4) {
        resultText = results.good;
    }
    else if (score < 5) {
        resultText = results.great;
    }
    else if (score === 5) {
        resultText = results.perfect;
    }
    const quizEndContent =
        `<div>
        <h1>Cocktail Ingredients Quiz</h1>
        <h2>You got ${score} out of ${questions.length} questions correct!</h2>
        <p>${resultText}</p>
        <button class='restart-button'>Start Over</button>
    </div>`;
    return quizEndContent;
}

function renderQuizEnd() {
    // This function will be responsible for rendering the end-of-quiz message in the DOM depending on the user's score
    console.log('`renderQuizEnd` ran');
    
    $('.quiz-start-end').html(generateQuizEnd());
}

function handleStartOver() {
    // This function will be responsible for when the user clicks the "Start Over" button on the QuizEnd view
    // Should pass to renderQuizStart
    $('.quiz-start-end').on('click', '.restart-button', event => {
        console.log('`handleStartOver` ran');
        resetQuiz();
        renderQuizStart();
    })
}

function resetQuiz() {
    score = 0;
    questionNumber = 0;
    questionIndex = questionNumber - 1;
}

function emptyField(targetClass) {
    $(targetClass).html('');
}




// Callback function
function handleQuiz() {
    renderQuizStart();
    handleQuizStartClicked();
    handleAnswerSubmit();
    handleNextQuestion();
    handleStartOver();
}

// When the page loads, call `handleQuiz`
$(handleQuiz);
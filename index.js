/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

const translations = {
    en: {
        quizTitle: "The Design & Innovation Quiz",
        scoreText: "Score",
        startTitle: "Test Your Knowledge!",
        startDescription: "Select a difficulty to begin the quiz about the pioneers of design, art, and technology.",
        easy: "Easy",
        medium: "Medium",
        hard: "Hard",
        correctMessage: "Correct!",
        wrongMessage: "Wrong!",
        theAnswerWas: "The answer was:",
        correctAnswerWas: "The correct answer was:",
        learnMore: "Learn More:",
        nextQuestion: "Next Question",
        quizComplete: "Quiz complete!",
        finalScore: "Your final score is",
        outOf: "out of",
        answeredCorrectly: "You answered correctly",
        questions: "questions!",
        encouragingMessage_low: "Keep trying! Every master was once a beginner.",
        encouragingMessage_mid: "Good job! You're getting the hang of it.",
        encouragingMessage_high: "Excellent work! You're a true connoisseur.",
        home: "Home",
        gameModeTitle: "Choose a Game Mode",
        tenQuestions: "10 Questions",
        timeAttack: "Time Attack (30s)",
        timerText: "Time",
        streakText: "Streak",
        correctAnswersStat: "Correct Answers",
        longestStreakStat: "Longest Streak",
        questionsAnsweredStat: "Answered",
        accuracyStat: "Accuracy",
        themeTitle: "Choose a Theme",
        modeTitle: "Choose a Mode",
        fontTitle: "Choose a Font",
    },
    fr: {
        quizTitle: "Le Quiz du Design et de l'Innovation",
        scoreText: "Score",
        startTitle: "Testez Vos Connaissances !",
        startDescription: "Sélectionnez une difficulté pour commencer le quiz sur les pionniers du design, de l'art et de la technologie.",
        easy: "Facile",
        medium: "Moyen",
        hard: "Difficile",
        correctMessage: "Correct !",
        wrongMessage: "Faux !",
        theAnswerWas: "La réponse était :",
        correctAnswerWas: "La bonne réponse était :",
        learnMore: "En savoir plus :",
        nextQuestion: "Question Suivante",
        quizComplete: "Quiz terminé !",
        finalScore: "Votre score final est de",
        outOf: "sur",
        answeredCorrectly: "Vous avez répondu correctly à",
        questions: "questions !",
        encouragingMessage_low: "Continuez d'essayer ! Chaque maître a été un débutant.",
        encouragingMessage_mid: "Bon travail ! Vous commencez à maîtriser le sujet.",
        encouragingMessage_high: "Excellent travail ! Vous êtes un vrai connaisseur.",
        home: "Accueil",
        gameModeTitle: "Choisissez un mode de jeu",
        tenQuestions: "10 Questions",
        timeAttack: "Course contre la montre (30s)",
        timerText: "Temps",
        streakText: "Série",
        correctAnswersStat: "Bonnes Réponses",
        longestStreakStat: "Plus Longue Série",
        questionsAnsweredStat: "Répondues",
        accuracyStat: "Précision",
        themeTitle: "Choisissez un Thème",
        modeTitle: "Choisissez un Mode",
        fontTitle: "Choisissez une Police",
    }
};

// Screen elements
const languageSelection = document.getElementById('language-selection');
const startScreen = document.getElementById('start-screen');
const gameModeScreen = document.getElementById('game-mode-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const endScreen = document.getElementById('end-screen');

// Button elements
const enBtn = document.getElementById('en-btn');
const frBtn = document.getElementById('fr-btn');
const themeButtons = document.querySelectorAll('.theme-btn');
const fontButtons = document.querySelectorAll('.font-btn');
const lightModeBtn = document.getElementById('light-mode-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');
const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const tenQuestionsBtn = document.getElementById('ten-questions-btn');
const timeAttackBtn = document.getElementById('time-attack-btn');
const nextBtn = document.getElementById('next-btn');
const homeBtn = document.getElementById('home-btn');

// Display elements
const gameStats = document.getElementById('game-stats');
const scoreDisplay = document.getElementById('score-display');
const timerDisplay = document.getElementById('timer-display');
const streakDisplay = document.getElementById('streak-display');
const questionTextEl = document.getElementById('question-text');
const answerButtonsEl = document.getElementById('answer-buttons');
const resultMessageEl = document.getElementById('result-message');
const correctAnswerTextEl = document.getElementById('correct-answer-text');
const bioTextEl = document.getElementById('bio-text');
const pioneerImageEl = document.getElementById('pioneer-image');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const streakCountEl = document.getElementById('streak-count');
const finalScoreTextEl = document.getElementById('final-score-text');
const endMessageTextEl = document.getElementById('end-message-text');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const correctAnswersDisplay = document.getElementById('correct-answers-display');
const longestStreakDisplay = document.getElementById('longest-streak-display');
const questionsAnsweredDisplay = document.getElementById('questions-answered-display');
const accuracyDisplay = document.getElementById('accuracy-display');


// State variables
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let maxStreak = 0;
let correctAnswersCount = 0;
let selectedAnswerIndex = null;
let currentLanguage = 'en';
let enQuizData = [];
let frQuizData = [];
let currentQuizData = [];
let selectedDifficulty = '';
let gameMode = ''; // '10q' or 'time'
let timer;
let timeLeft = 30;
let isGameActive = false;

function applyTheme(theme) {
    document.body.dataset.theme = theme;
    localStorage.setItem('quizTheme', theme);
    themeButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

function applyFont(font) {
    document.body.dataset.font = font;
    localStorage.setItem('quizFont', font);
    fontButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.font === font);
    });
}

function applyColorMode(mode) {
    document.body.dataset.colorMode = mode;
    localStorage.setItem('quizColorMode', mode);
    lightModeBtn.classList.toggle('active', mode === 'light');
    darkModeBtn.classList.toggle('active', mode === 'dark');
}

function initializeAppearance() {
    const savedTheme = localStorage.getItem('quizTheme') || 'sand';
    const savedColorMode = localStorage.getItem('quizColorMode') || 'light';
    const savedFont = localStorage.getItem('quizFont') || 'poppins';
    
    applyTheme(savedTheme);
    applyColorMode(savedColorMode);
    applyFont(savedFont);

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            applyTheme(button.dataset.theme);
        });
    });

    fontButtons.forEach(button => {
        button.addEventListener('click', () => {
            applyFont(button.dataset.font);
        });
    });

    lightModeBtn.addEventListener('click', () => applyColorMode('light'));
    darkModeBtn.addEventListener('click', () => applyColorMode('dark'));
}


async function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (key && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    try {
        if (lang === 'fr' && frQuizData.length === 0) {
            const response = await fetch('quiz-data-fr.json');
            if (!response.ok) throw new Error('Failed to load French data');
            frQuizData = await response.json();
        }
        currentQuizData = lang === 'fr' ? frQuizData : enQuizData;
        languageSelection.style.display = 'none';
        startScreen.style.display = 'block';
        homeBtn.style.display = 'block';
    } catch (error) {
        console.error('Failed to load quiz data for selected language:', error);
        alert('Error loading quiz data. Please try again.');
    }
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function initializeQuiz() {
    enBtn.addEventListener('click', () => setLanguage('en'));
    frBtn.addEventListener('click', () => setLanguage('fr'));
    
    difficultyButtons.forEach(button => {
        button.addEventListener('click', () => selectDifficulty(button.dataset.difficulty));
    });

    tenQuestionsBtn.addEventListener('click', () => startGame('10q'));
    timeAttackBtn.addEventListener('click', () => startGame('time'));
    
    nextBtn.addEventListener('click', nextQuestion);
    homeBtn.addEventListener('click', goHome);
}

function selectDifficulty(difficulty) {
    selectedDifficulty = difficulty;
    startScreen.style.display = 'none';
    gameModeScreen.style.display = 'block';
}

function getQuestionsByDifficulty(difficulty) {
    const citationRegex = /\[\d+(, \d+)*\]/g;
    const allQuestions = currentQuizData.flatMap(person =>
        person.quiz.map(q => ({
            difficulty: q.difficulty,
            question: q.question.replace(citationRegex, '').trim(),
            options: q.answers,
            correctAnswerIndex: q.answers.indexOf(q.correct_answer),
            name: person.name,
            bio: person.know_more.replace(citationRegex, '').trim(),
            imageUrl: null,
        }))
    );
    return allQuestions.filter(q => q.difficulty.toLowerCase() === difficulty.toLowerCase());
}

function startGame(mode) {
    gameMode = mode;
    const questionsForDifficulty = getQuestionsByDifficulty(selectedDifficulty);
    shuffledQuestions = shuffleArray(questionsForDifficulty);

    if (gameMode === '10q') {
        if (shuffledQuestions.length < 10) {
            alert(`Sorry, not enough questions for the ${selectedDifficulty} level (found ${shuffledQuestions.length}, need 10).`);
            goHome();
            return;
        }
        shuffledQuestions = shuffledQuestions.slice(0, 10);
    }
    
    if (shuffledQuestions.length === 0) {
        alert(`Sorry, no questions available for the ${selectedDifficulty} level.`);
        goHome();
        return;
    }

    isGameActive = true;
    score = 0;
    streak = 0;
    maxStreak = 0;
    correctAnswersCount = 0;
    currentQuestionIndex = 0;
    scoreEl.textContent = '0';

    gameModeScreen.style.display = 'none';
    
    gameStats.style.display = 'flex';
    
    if (gameMode === 'time') {
        timerDisplay.style.display = 'block';
        progressContainer.style.display = 'none';
        startTimer();
    } else { // 10q mode
        timerDisplay.style.display = 'none';
        progressContainer.style.display = 'block';
    }
    
    questionScreen.style.display = 'block';
    displayQuestion();
}

function startTimer() {
    timeLeft = 30;
    timeEl.textContent = timeLeft;
    timer = setInterval(() => {
        if (!isGameActive) return;
        timeLeft--;
        timeEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function displayQuestion() {
    resetState();
    if (currentQuestionIndex >= shuffledQuestions.length) {
        endGame();
        return;
    }

    if (gameMode === '10q') {
        const progressPercent = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionTextEl.textContent = currentQuestion.question;

    currentQuestion.options.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('answer-btn');
        button.dataset.index = index.toString();
        button.addEventListener('click', handleAnswerSelect);
        answerButtonsEl.appendChild(button);
    });
}

function handleAnswerSelect(e) {
    if (!isGameActive) return;

    const selectedButton = e.target;
    
    Array.from(answerButtonsEl.children).forEach(button => {
        button.disabled = true;
    });

    selectedButton.classList.add('selected');
    selectedAnswerIndex = parseInt(selectedButton.dataset.index);
    
    checkAnswer();
}

function updateStreakDisplay() {
    streakCountEl.textContent = `${streak}x`;
    streakDisplay.style.display = 'block';
    streakDisplay.classList.remove('streaking');
    // Trigger reflow to restart animation
    void streakDisplay.offsetWidth;
    streakDisplay.classList.add('streaking');
}

function checkAnswer() {
    if (selectedAnswerIndex === null) return;

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswerIndex === currentQuestion.correctAnswerIndex;

    if (isCorrect) {
        correctAnswersCount++;
        streak++;
        maxStreak = Math.max(maxStreak, streak);
        const streakBonus = Math.max(0, streak - 1) * 25;
        const basePoints = (gameMode === 'time') ? 50 : 100;
        const timeBonus = (gameMode === 'time') ? timeLeft * 5 : 0;
        score += basePoints + timeBonus + streakBonus;

        if (streak >= 2) {
            updateStreakDisplay();
        }
    } else {
        streak = 0;
        streakDisplay.style.display = 'none';
    }
    
    scoreEl.textContent = score.toString();
    
    if (gameMode === 'time') {
        isGameActive = false; // Prevent clicks during feedback
        const feedbackClass = isCorrect ? 'feedback-correct' : 'feedback-wrong';
        const buttonFeedbackClass = isCorrect ? 'correct-flash' : 'wrong-flash';
        const selectedButton = answerButtonsEl.querySelector(`[data-index='${selectedAnswerIndex}']`);
        
        if (selectedButton) selectedButton.classList.add(buttonFeedbackClass);
        document.body.classList.add(feedbackClass);

        setTimeout(() => {
            document.body.classList.remove(feedbackClass);
            if (selectedButton) selectedButton.classList.remove(buttonFeedbackClass, 'selected');
            isGameActive = true;
            if (timeLeft > 0) {
                 nextQuestion();
            }
        }, 400);
    } else {
        displayResult(isCorrect, currentQuestion);
    }
}

function displayResult(isCorrect, questionData) {
    questionScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    resultScreen.classList.remove('correct', 'wrong');
    
    const correctAnswer = questionData.options[questionData.correctAnswerIndex];

    if (isCorrect) {
        resultMessageEl.textContent = translations[currentLanguage].correctMessage;
        resultScreen.classList.add('correct');
        correctAnswerTextEl.textContent = `${translations[currentLanguage].theAnswerWas} ${correctAnswer}`;
    } else {
        resultMessageEl.textContent = translations[currentLanguage].wrongMessage;
        resultScreen.classList.add('wrong');
        correctAnswerTextEl.textContent = `${translations[currentLanguage].correctAnswerWas} ${correctAnswer}`;
    }
    
    correctAnswerTextEl.style.display = 'block';
    pioneerImageEl.style.display = 'none'; // Images are not available
    bioTextEl.textContent = questionData.bio;
    const learnMoreEl = resultScreen.querySelector('[data-translate-key="learnMore"]');
    learnMoreEl.textContent = `${translations[currentLanguage].learnMore} ${questionData.name}`;
}

function nextQuestion() {
    currentQuestionIndex++;
    resultScreen.style.display = 'none';
    questionScreen.style.display = 'block';
    displayQuestion();
}

function endGame() {
    if (!isGameActive) return;
    isGameActive = false;
    clearInterval(timer);

    questionScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    gameStats.style.display = 'none';
    progressContainer.style.display = 'none';

    const finalScoreMsg = `${translations[currentLanguage].finalScore} ${score}.`;
    let percentage = 0;
    const totalQuestions = shuffledQuestions.length;
    
    if (gameMode === '10q') {
        const maxScore = (totalQuestions * 100) + (((totalQuestions - 1) * totalQuestions / 2) * 25);
        percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
    } else { // time attack
        percentage = score > 1500 ? 100 : (score / 1500) * 100;
    }
    
    finalScoreTextEl.textContent = `${translations[currentLanguage].quizComplete} ${finalScoreMsg}`;

    const correctAnswersText = (gameMode === '10q' && totalQuestions > 0)
        ? `${correctAnswersCount} / ${totalQuestions}`
        : `${correctAnswersCount}`;
    correctAnswersDisplay.textContent = `${translations[currentLanguage].correctAnswersStat}: ${correctAnswersText}`;
    longestStreakDisplay.textContent = `${translations[currentLanguage].longestStreakStat}: ${maxStreak}x`;

    if (gameMode === 'time') {
        const totalAnswered = currentQuestionIndex;
        const accuracy = totalAnswered > 0 ? Math.round((correctAnswersCount / totalAnswered) * 100) : 0;

        questionsAnsweredDisplay.textContent = `${translations[currentLanguage].questionsAnsweredStat}: ${totalAnswered}`;
        accuracyDisplay.textContent = `${translations[currentLanguage].accuracyStat}: ${accuracy}%`;

        questionsAnsweredDisplay.style.display = 'block';
        accuracyDisplay.style.display = 'block';
    }

    if (percentage < 40) {
        endMessageTextEl.textContent = translations[currentLanguage].encouragingMessage_low;
    } else if (percentage < 80) {
        endMessageTextEl.textContent = translations[currentLanguage].encouragingMessage_mid;
    } else {
        endMessageTextEl.textContent = translations[currentLanguage].encouragingMessage_high;
    }
    
    endScreen.style.display = 'flex';
    // Add class with a slight delay to trigger animations after display change
    setTimeout(() => endScreen.classList.add('visible'), 50);
}

function goHome() {
    isGameActive = false;
    if (timer) clearInterval(timer);

    // Hide all game screens and clear content to prevent flashes
    finalScoreTextEl.textContent = '';
    endMessageTextEl.textContent = '';
    correctAnswersDisplay.textContent = '';
    longestStreakDisplay.textContent = '';
    questionsAnsweredDisplay.textContent = '';
    accuracyDisplay.textContent = '';
    
    endScreen.style.display = 'none';
    endScreen.classList.remove('visible'); // Remove class to reset animations
    gameModeScreen.style.display = 'none';
    questionScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    startScreen.style.display = 'none';
    gameStats.style.display = 'none';
    homeBtn.style.display = 'none';

    // Show the very first screen
    languageSelection.style.display = 'block';

    // Reset all state variables
    score = 0;
    streak = 0;
    maxStreak = 0;
    correctAnswersCount = 0;
    currentQuestionIndex = 0;
    shuffledQuestions = [];
    selectedDifficulty = '';
    gameMode = '';
    
    // UI state reset
    scoreEl.textContent = '0';
    streakCountEl.textContent = '0';
    timerDisplay.style.display = 'none';
    streakDisplay.style.display = 'none';
    questionsAnsweredDisplay.style.display = 'none';
    accuracyDisplay.style.display = 'none';
    progressContainer.style.display = 'none';
    progressBar.style.width = '0%';
    document.body.classList.remove('feedback-correct', 'feedback-wrong');
}

function resetState() {
    selectedAnswerIndex = null;
    streakDisplay.classList.remove('streaking');
    correctAnswerTextEl.style.display = 'none';
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
}

function setupInitialUI() {
    // On load, only show the language selection screen.
    startScreen.style.display = 'none';
    gameModeScreen.style.display = 'none';
    questionScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    endScreen.style.display = 'none';
    gameStats.style.display = 'none';
    homeBtn.style.display = 'none';
    timerDisplay.style.display = 'none';
    streakDisplay.style.display = 'none';
    questionsAnsweredDisplay.style.display = 'none';
    accuracyDisplay.style.display = 'none';
    progressContainer.style.display = 'none';
}

async function main() {
    try {
        const response = await fetch('quiz-data.json');
        if (!response.ok) throw new Error(`Network error: ${response.statusText}`);
        enQuizData = await response.json();
        currentQuizData = enQuizData;
        initializeAppearance();
        initializeQuiz();
        setupInitialUI();
    } catch (error) {
        console.error('Failed to load initial quiz data:', error);
        document.getElementById('app-container').innerHTML = '<h1>Error: Could not load quiz data. Please try refreshing.</h1>';
    }
}

main();
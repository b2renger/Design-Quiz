/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

const fullQuizData = {
    en: [
        { "name": "Charles Eames", "bio": "Charles Eames, along with his wife Ray, was an American designer who made significant contributions to modern architecture and furniture. The Eames Office is famous for groundbreaking designs like the Eames Lounge Chair, which blended comfort, luxury, and mass-production techniques.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Charles+Eames", "questions": [ { "question": "Which iconic piece of furniture is Charles and Ray Eames most famous for designing?", "options": ["The Egg Chair", "The Tulip Table", "The Eames Lounge Chair", "The Barcelona Chair"], "correctAnswerIndex": 2, "difficulty": "Easy" }, { "question": "The famous short film 'Powers of Ten' was created by the Eames Office to explore what concept?", "options": ["Architectural Blueprints", "The relative scale of the Universe", "Color Theory", "The history of furniture"], "correctAnswerIndex": 1, "difficulty": "Medium" } ] },
        { "name": "Zaha Hadid", "bio": "Dame Zaha Hadid was an Iraqi-British architect, artist and designer, recognized as a major figure in architecture of the late 20th and early 21st centuries. She was known for her radically futuristic designs with curving facades and sharp angles, often described as 'deconstructivist'.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Zaha+Hadid", "questions": [ { "question": "Zaha Hadid was the first woman to receive which prestigious architecture award?", "options": ["The Nobel Prize in Architecture", "The Pritzker Architecture Prize", "The RIBA Royal Gold Medal", "The Aga Khan Award for Architecture"], "correctAnswerIndex": 1, "difficulty": "Easy" }, { "question": "Which of these famous buildings is known for its flowing, wave-like structure designed by Zaha Hadid?", "options": ["The Shard, London", "The Sydney Opera House", "The Heydar Aliyev Center, Baku", "The Guggenheim Museum, Bilbao"], "correctAnswerIndex": 2, "difficulty": "Medium" } ] },
        { "name": "Steve Wozniak", "bio": "Steve Wozniak, also known by his nickname 'Woz', is an American electronics engineer, computer programmer, and philanthropist. In 1976, he co-founded Apple Inc. with Steve Jobs, which later became the world's largest technology company.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Steve+Wozniak", "questions": [ { "question": "What was the name of the first computer Steve Wozniak designed and hand-built, which became Apple's first product?", "options": ["The Macintosh", "The Apple I", "The Lisa", "The Apple II"], "correctAnswerIndex": 1, "difficulty": "Easy" }, { "question": "Before co-founding Apple, Steve Wozniak was known for creating 'blue boxes'. What did these devices do?", "options": ["Play video games", "Store digital photos", "Make free long-distance phone calls", "Connect to the early internet"], "correctAnswerIndex": 2, "difficulty": "Medium" } ] },
        { "name": "Ada Lovelace", "bio": "Ada Lovelace was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She is often regarded as the first computer programmer for writing an algorithm intended to be processed by a machine.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Ada+Lovelace", "questions": [ { "question": "Ada Lovelace is considered the first computer programmer for her work on which machine?", "options": ["The ENIAC", "The Colossus", "The Analytical Engine", "The Turing Machine"], "correctAnswerIndex": 2, "difficulty": "Easy" }, { "question": "Ada Lovelace was the daughter of which famous Romantic poet?", "options": ["Lord Byron", "Percy Bysshe Shelley", "John Keats", "William Wordsworth"], "correctAnswerIndex": 0, "difficulty": "Hard" } ] },
        { "name": "Issey Miyake", "bio": "Issey Miyake was a Japanese fashion designer known for his technology-driven clothing designs, exhibitions, and fragrances. He was famous for his innovative use of pleats, creating garments that were both artistic and practical.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Issey+Miyake", "questions": [ { "question": "What is the name of Issey Miyake's signature line, known for its permanently pleated garments?", "options": ["Origami Wear", "Fold & Form", "Pleats Please", "A-POC (A Piece of Cloth)"], "correctAnswerIndex": 2, "difficulty": "Medium" }, { "question": "Issey Miyake famously designed the black turtlenecks that became a signature part of whose wardrobe?", "options": ["Andy Warhol", "Karl Lagerfeld", "Steve Jobs", "David Bowie"], "correctAnswerIndex": 2, "difficulty": "Easy" } ] },
        { "name": "Walter Gropius", "bio": "Walter Gropius was a German architect and founder of the Bauhaus School, one of the most influential currents in modern design and architectural education. The Bauhaus philosophy sought to unify art, craft, and technology.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Walter+Gropius", "questions": [ { "question": "Walter Gropius founded which influential German school of art, design, and architecture?", "options": ["The Ulm School of Design", "The Bauhaus", "Staatliche Kunstakademie", "The Vkhutemas"], "correctAnswerIndex": 1, "difficulty": "Easy" }, { "question": "What was a core principle of the Bauhaus school founded by Gropius?", "options": ["Ornate and decorative design", "Separating fine art from practical crafts", "The unification of art, craft, and technology", "Revival of classical architectural styles"], "correctAnswerIndex": 2, "difficulty": "Medium" } ] },
        { "name": "Saul Bass", "bio": "Saul Bass was an American graphic designer and Oscar-winning filmmaker, best known for his design of motion picture title sequences, film posters, and corporate logos. His work revolutionized the role of title sequences, turning them into an art form.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Saul+Bass", "questions": [ { "question": "Saul Bass was a master of which specific area of film design?", "options": ["Costume Design", "Special Effects", "Cinematography", "Title Sequence Design"], "correctAnswerIndex": 3, "difficulty": "Easy" }, { "question": "Which of these iconic corporate logos was designed by Saul Bass?", "options": ["The Apple logo", "The Nike 'swoosh'", "The AT&T 'bell' logo", "The Coca-Cola script"], "correctAnswerIndex": 2, "difficulty": "Hard" } ] },
        { "name": "Louise Bourgeois", "bio": "A French-American artist, best known for her large-scale sculpture and installation art, Bourgeois was also a prolific painter and printmaker. Her work is autobiographical, exploring themes of family, sexuality, and death.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Louise+Bourgeois", "questions": [ { "question": "Louise Bourgeois is famous for her monumental sculptures of what creature?", "options": ["Spiders", "Horses", "Birds", "Dogs"], "correctAnswerIndex": 0, "difficulty": "Easy" }, { "question": "What is the title of her famous spider sculpture, dedicated to her mother?", "options": ["Maman", "Arachne", "Spinner", "Weaver"], "correctAnswerIndex": 0, "difficulty": "Hard" } ] },
        { "name": "Alvar Aalto", "bio": "A Finnish architect and designer, Alvar Aalto's work includes architecture, furniture, textiles and glassware. He was a key figure in the development of modernism and is known for his human-centered approach to design.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Alvar+Aalto", "questions": [ { "question": "Alvar Aalto is a renowned architect and designer from which country?", "options": ["Sweden", "Denmark", "Finland", "Norway"], "correctAnswerIndex": 2, "difficulty": "Easy" }, { "question": "Which iconic piece of glassware, known for its organic, wavy shape, was designed by Alvar Aalto?", "options": ["Savoy Vase", "Ultima Thule", "Kartio Glass", "Kastehelmi Jar"], "correctAnswerIndex": 0, "difficulty": "Medium" } ] },
        { "name": "Eileen Gray", "bio": "An Irish architect and furniture designer and a pioneer of the Modern Movement. Her work was influential but often overlooked in her time. Her most famous works include the E-1027 table and the Bibendum Chair.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Eileen+Gray", "questions": [ { "question": "Eileen Gray's iconic, adjustable circular side table is named what?", "options": ["Bibendum Table", "E-1027", "Transat Chair", "Roquebrune"], "correctAnswerIndex": 1, "difficulty": "Medium" }, { "question": "The Bibendum Chair was named after what famous advertising character?", "options": ["The Michelin Man", "The Pillsbury Doughboy", "Mr. Peanut", "The Jolly Green Giant"], "correctAnswerIndex": 0, "difficulty": "Hard" } ] },
        { "name": "Paul Rand", "bio": "An American art director and graphic designer, best known for his corporate logo designs, including the logos for IBM, UPS, and ABC. He was one of the first American commercial artists to embrace and practice the Swiss Style of graphic design.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Paul+Rand", "questions": [ { "question": "Paul Rand was a master of corporate identity, designing the iconic logo for which major tech company?", "options": ["Microsoft", "Apple", "IBM", "Intel"], "correctAnswerIndex": 2, "difficulty": "Easy" }, { "question": "Paul Rand's design philosophy emphasized the importance of what quality in a logo?", "options": ["Complexity", "Simplicity", "Literalism", "Abstraction"], "correctAnswerIndex": 1, "difficulty": "Medium" } ] }
    ],
    fr: [
        { "name": "Charles Eames", "bio": "Charles Eames, avec sa femme Ray, était un designer américain qui a apporté d'importantes contributions à l'architecture et au mobilier modernes. Le bureau Eames est célèbre pour ses créations révolutionnaires comme le fauteuil Eames Lounge Chair, qui alliait confort, luxe et techniques de production en série.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Charles+Eames", "questions": [ { "question": "Pour quel meuble emblématique Charles et Ray Eames sont-ils les plus célèbres ?", "options": ["Le fauteuil Egg Chair", "La table Tulip", "Le fauteuil Eames Lounge Chair", "Le fauteuil Barcelona"], "correctAnswerIndex": 2, "difficulty": "Easy" }, { "question": "Le célèbre court métrage 'Powers of Ten' a été créé par le bureau Eames pour explorer quel concept ?", "options": ["Les plans d'architecture", "L'échelle relative de l'Univers", "La théorie des couleurs", "L'histoire du mobilier"], "correctAnswerIndex": 1, "difficulty": "Medium" } ] },
        { "name": "Zaha Hadid", "bio": "Dame Zaha Hadid était une architecte, artiste et designer irako-britannique, reconnue comme une figure majeure de l'architecture de la fin du 20e et du début du 21e siècle. Elle était connue pour ses créations radicalement futuristes aux façades incurvées et aux angles vifs, souvent qualifiées de 'déconstructivistes'.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Zaha+Hadid", "questions": [ { "question": "Zaha Hadid a été la première femme à recevoir quel prestigieux prix d'architecture ?", "options": ["Le prix Nobel d'architecture", "Le prix d'architecture Pritzker", "La médaille d'or royale du RIBA", "Le prix Aga Khan d'architecture"], "correctAnswerIndex": 1, "difficulty": "Easy" }, { "question": "Lequel de ces bâtiments célèbres est connu pour sa structure fluide, en forme de vague, conçue par Zaha Hadid ?", "options": ["The Shard, Londres", "L'Opéra de Sydney", "Le centre Heydar Aliyev, Bakou", "Le musée Guggenheim, Bilbao"], "correctAnswerIndex": 2, "difficulty": "Medium" } ] },
        { "name": "Steve Wozniak", "bio": "Steve Wozniak, également connu sous son surnom 'Woz', est un ingénieur électronicien, programmeur informatique et philanthrope américain. En 1976, il a cofondé Apple Inc. avec Steve Jobs, qui est devenue plus tard la plus grande entreprise technologique du monde.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Steve+Wozniak", "questions": [ { "question": "Quel était le nom du premier ordinateur que Steve Wozniak a conçu et assemblé à la main, qui est devenu le premier produit d'Apple ?", "options": ["Le Macintosh", "L'Apple I", "Le Lisa", "L'Apple II"], "correctAnswerIndex": 1, "difficulty": "Easy" }, { "question": "Avant de cofonder Apple, Steve Wozniak était connu pour créer des 'boîtes bleues'. Que faisaient ces appareils ?", "options": ["Jouer à des jeux vidéo", "Stocker des photos numériques", "Passer des appels longue distance gratuits", "Se connecter à l'internet primitif"], "correctAnswerIndex": 2, "difficulty": "Medium" } ] },
        { "name": "Ada Lovelace", "bio": "Ada Lovelace était une mathématicienne et écrivaine anglaise, principalement connue pour son travail sur l'ordinateur mécanique à usage général proposé par Charles Babbage, la Machine Analytique. Elle est souvent considérée comme la première programmeuse informatique pour avoir écrit un algorithme destiné à être traité par une machine.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Ada+Lovelace", "questions": [ { "question": "Ada Lovelace est considérée comme la première programmeuse informatique pour son travail sur quelle machine ?", "options": ["L'ENIAC", "Le Colossus", "La Machine Analytique", "La Machine de Turing"], "correctAnswerIndex": 2, "difficulty": "Easy" }, { "question": "Ada Lovelace était la fille de quel célèbre poète romantique ?", "options": ["Lord Byron", "Percy Bysshe Shelley", "John Keats", "William Wordsworth"], "correctAnswerIndex": 0, "difficulty": "Hard" } ] },
        { "name": "Issey Miyake", "bio": "Issey Miyake était un créateur de mode japonais connu pour ses vêtements, expositions et parfums à la pointe de la technologie. Il était célèbre pour son utilisation innovante des plis, créant des vêtements à la fois artistiques et pratiques.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Issey+Miyake", "questions": [ { "question": "Quel est le nom de la ligne signature d'Issey Miyake, connue pour ses vêtements plissés en permanence ?", "options": ["Origami Wear", "Fold & Form", "Pleats Please", "A-POC (A Piece of Cloth)"], "correctAnswerIndex": 2, "difficulty": "Medium" }, { "question": "Issey Miyake est célèbre pour avoir conçu les cols roulés noirs qui sont devenus un élément signature de la garde-robe de qui ?", "options": ["Andy Warhol", "Karl Lagerfeld", "Steve Jobs", "David Bowie"], "correctAnswerIndex": 2, "difficulty": "Easy" } ] },
        { "name": "Walter Gropius", "bio": "Walter Gropius était un architecte allemand et le fondateur de l'école du Bauhaus, l'un des courants les plus influents de l'éducation en design moderne et en architecture. La philosophie du Bauhaus cherchait à unifier l'art, l'artisanat et la technologie.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Walter+Gropius", "questions": [ { "question": "Walter Gropius a fondé quelle influente école allemande d'art, de design et d'architecture ?", "options": ["L'École de design d'Ulm", "Le Bauhaus", "Staatliche Kunstakademie", "Le Vkhutemas"], "correctAnswerIndex": 1, "difficulty": "Easy" }, { "question": "Quel était un principe fondamental de l'école du Bauhaus fondée par Gropius ?", "options": ["Design orné et décoratif", "Séparer les beaux-arts de l'artisanat pratique", "L'unification de l'art, de l'artisanat et de la technologie", "Renaissance des styles architecturaux classiques"], "correctAnswerIndex": 2, "difficulty": "Medium" } ] },
        { "name": "Saul Bass", "bio": "Saul Bass était un graphiste et cinéaste américain lauréat d'un Oscar, surtout connu pour la conception de génériques de films, d'affiches de films et de logos d'entreprise. Son travail a révolutionné le rôle des génériques, les transformant en une forme d'art.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Saul+Bass", "questions": [ { "question": "Saul Bass était un maître dans quel domaine spécifique de la conception cinématographique ?", "options": ["Création de costumes", "Effets spéciaux", "Cinématographie", "Conception de génériques"], "correctAnswerIndex": 3, "difficulty": "Easy" }, { "question": "Lequel de ces logos d'entreprise emblématiques a été conçu par Saul Bass ?", "options": ["Le logo d'Apple", "Le 'swoosh' de Nike", "Le logo 'cloche' d'AT&T", "Le script de Coca-Cola"], "correctAnswerIndex": 2, "difficulty": "Hard" } ] },
        { "name": "Louise Bourgeois", "bio": "Artiste franco-américaine, surtout connue pour ses sculptures et installations à grande échelle, Bourgeois était aussi une peintre et graveuse prolifique. Son travail est autobiographique, explorant les thèmes de la famille, de la sexualité et de la mort.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Louise+Bourgeois", "questions": [ { "question": "Louise Bourgeois est célèbre pour ses sculptures monumentales de quelle créature ?", "options": ["Araignées", "Chevaux", "Oiseaux", "Chiens"], "correctAnswerIndex": 0, "difficulty": "Easy" }, { "question": "Quel est le titre de sa célèbre sculpture d'araignée, dédiée à sa mère ?", "options": ["Maman", "Arachné", "Fileuse", "Tisserande"], "correctAnswerIndex": 0, "difficulty": "Hard" } ] },
        { "name": "Alvar Aalto", "bio": "Architecte et designer finlandais, l'œuvre d'Alvar Aalto comprend l'architecture, le mobilier, les textiles et la verrerie. Il a été une figure clé dans le développement du modernisme et est connu pour son approche du design centrée sur l'humain.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Alvar+Aalto", "questions": [ { "question": "Alvar Aalto est un architecte et designer de renom de quel pays ?", "options": ["Suède", "Danemark", "Finlande", "Norvège"], "correctAnswerIndex": 2, "difficulty": "Easy" }, { "question": "Quelle pièce de verrerie emblématique, connue pour sa forme organique et ondulée, a été conçue par Alvar Aalto ?", "options": ["Vase Savoy", "Ultima Thule", "Verre Kartio", "Bocal Kastehelmi"], "correctAnswerIndex": 0, "difficulty": "Medium" } ] },
        { "name": "Eileen Gray", "bio": "Architecte et designer de meubles irlandaise et pionnière du Mouvement Moderne. Son travail a été influent mais souvent négligé à son époque. Ses œuvres les plus célèbres incluent la table E-1027 et le fauteuil Bibendum.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Eileen+Gray", "questions": [ { "question": "Comment s'appelle la table d'appoint circulaire et réglable emblématique d'Eileen Gray ?", "options": ["Table Bibendum", "E-1027", "Chaise Transat", "Roquebrune"], "correctAnswerIndex": 1, "difficulty": "Medium" }, { "question": "Le fauteuil Bibendum a été nommé d'après quel célèbre personnage publicitaire ?", "options": ["Le Bonhomme Michelin", "Le bonhomme Pillsbury", "Mr. Peanut", "Le Géant Vert"], "correctAnswerIndex": 0, "difficulty": "Hard" } ] },
        { "name": "Paul Rand", "bio": "Directeur artistique et graphiste américain, surtout connu pour ses conceptions de logos d'entreprise, y compris les logos pour IBM, UPS et ABC. Il a été l'un des premiers artistes commerciaux américains à adopter et à pratiquer le Style suisse du graphisme.", "imageUrl": "https://placehold.co/300x300/EFEFEF/333333?text=Paul+Rand", "questions": [ { "question": "Paul Rand était un maître de l'identité d'entreprise, concevant le logo emblématique pour quelle grande entreprise technologique ?", "options": ["Microsoft", "Apple", "IBM", "Intel"], "correctAnswerIndex": 2, "difficulty": "Easy" }, { "question": "La philosophie de conception de Paul Rand mettait l'accent sur l'importance de quelle qualité dans un logo ?", "options": ["Complexité", "Simplicité", "Littéralisme", "Abstraction"], "correctAnswerIndex": 1, "difficulty": "Medium" } ] }
    ]
};

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
        correctAnswerWas: "The correct answer was:",
        learnMore: "Learn More:",
        nextQuestion: "Next Question",
        quizComplete: "Quiz complete! Your final score is",
        outOf: "out of"
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
        correctAnswerWas: "La bonne réponse était :",
        learnMore: "En savoir plus :",
        nextQuestion: "Question Suivante",
        quizComplete: "Quiz terminé ! Votre score final est de",
        outOf: "sur"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const languageSelection = document.getElementById('language-selection');
    const startScreen = document.getElementById('start-screen');
    const questionScreen = document.getElementById('question-screen');
    const resultScreen = document.getElementById('result-screen');
    const scoreDisplay = document.getElementById('score-display');

    const enBtn = document.getElementById('en-btn');
    const frBtn = document.getElementById('fr-btn');
    const nextBtn = document.getElementById('next-btn');
    const easyBtn = document.getElementById('easy-btn');
    const mediumBtn = document.getElementById('medium-btn');
    const hardBtn = document.getElementById('hard-btn');

    const questionTextEl = document.getElementById('question-text');
    const answerButtonsEl = document.getElementById('answer-buttons');
    const resultMessageEl = document.getElementById('result-message');
    const correctAnswerTextEl = document.getElementById('correct-answer-text');
    const bioTextEl = document.getElementById('bio-text');
    const pioneerImageEl = document.getElementById('pioneer-image');
    const scoreEl = document.getElementById('score');

    let shuffledQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedAnswerIndex = null;
    let currentLanguage = 'en';

    function setLanguage(lang) {
        currentLanguage = lang;
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (key) {
                element.textContent = translations[lang][key];
            }
        });
        languageSelection.classList.add('hidden');
        startScreen.classList.remove('hidden');
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
        easyBtn.addEventListener('click', () => startGame('Easy'));
        mediumBtn.addEventListener('click', () => startGame('Medium'));
        hardBtn.addEventListener('click', () => startGame('Hard'));
        nextBtn.addEventListener('click', nextQuestion);
    }

    function getShuffledQuestions(difficulty) {
        const quizData = fullQuizData[currentLanguage];
        const allQuestionsForLang = quizData.flatMap(person =>
            person.questions.map(q => ({ ...q, name: person.name, bio: person.bio, imageUrl: person.imageUrl }))
        );
        const filteredQuestions = allQuestionsForLang.filter(q => q.difficulty === difficulty);
        return shuffleArray(filteredQuestions);
    }

    function startGame(difficulty) {
        shuffledQuestions = getShuffledQuestions(difficulty);

        if (shuffledQuestions.length === 0) {
            alert(`Sorry, no questions are available for the ${difficulty} level yet!`);
            return;
        }

        startScreen.classList.add('hidden');
        scoreDisplay.classList.remove('hidden');
        questionScreen.classList.remove('hidden');
        score = 0;
        currentQuestionIndex = 0;
        scoreEl.textContent = '0';
        displayQuestion();
    }

    function displayQuestion() {
        resetState();
        if (currentQuestionIndex >= shuffledQuestions.length) {
            alert(`${translations[currentLanguage].quizComplete} ${score} ${translations[currentLanguage].outOf} ${shuffledQuestions.length}.`);
            questionScreen.classList.add('hidden');
            scoreDisplay.classList.add('hidden');
            startScreen.classList.remove('hidden');
            return;
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
        const selectedButton = e.target;
        
        Array.from(answerButtonsEl.children).forEach(button => {
            button.classList.remove('selected');
        });

        selectedButton.classList.add('selected');
        selectedAnswerIndex = parseInt(selectedButton.dataset.index);
        
        setTimeout(checkAnswer, 300);
    }

    function checkAnswer() {
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        const isCorrect = selectedAnswerIndex === currentQuestion.correctAnswerIndex;

        if (isCorrect) {
            score++;
            scoreEl.textContent = score.toString();
        }

        displayResult(isCorrect, currentQuestion);
    }
    
    function displayResult(isCorrect, questionData) {
        questionScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        resultScreen.classList.remove('correct', 'wrong');

        if (isCorrect) {
            resultMessageEl.textContent = translations[currentLanguage].correctMessage;
            resultScreen.classList.add('correct');
            correctAnswerTextEl.textContent = '';
        } else {
            resultMessageEl.textContent = translations[currentLanguage].wrongMessage;
            resultScreen.classList.add('wrong');
            const correctAnswer = questionData.options[questionData.correctAnswerIndex];
            correctAnswerTextEl.textContent = `${translations[currentLanguage].correctAnswerWas} ${correctAnswer}`;
        }

        pioneerImageEl.src = questionData.imageUrl;
        pioneerImageEl.alt = `Image of ${questionData.name}`;
        bioTextEl.textContent = questionData.bio;
        const learnMoreEl = resultScreen.querySelector('[data-translate-key="learnMore"]');
        learnMoreEl.textContent = `${translations[currentLanguage].learnMore} ${questionData.name}`;
    }

    function nextQuestion() {
        currentQuestionIndex++;
        resultScreen.classList.add('hidden');
        questionScreen.classList.remove('hidden');
        displayQuestion();
    }
    
    function resetState() {
        selectedAnswerIndex = null;
        while (answerButtonsEl.firstChild) {
            answerButtonsEl.removeChild(answerButtonsEl.firstChild);
        }
    }

    initializeQuiz();
});
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Which language runs directly in a web browser?",
        options: ["Python", "C++", "JavaScript", "Java"],
        answer: "JavaScript"
    },
    {
        question: "What is the result of 5 + 3?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        answer: "Netscape"
    },
    {
        question: "Which keyword declares a block-scoped variable that can be reassigned?",
        options: ["const", "let", "var", "static"],
        answer: "let"
    },
    {
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Object Management",
            "Digital Ordinance Model",
            "Document Orientation Method"
        ],
        answer: "Document Object Model"
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.object()"
        ],
        answer: "JSON.parse()"
    },
    {
        question: "Which array method creates a new array by transforming each element?",
        options: ["filter()", "find()", "map()", "reduce()"],
        answer: "map()"
    },
    {
        question: "Which operator checks both value and type equality?",
        options: ["==", "=", "===", "!="],
        answer: "==="
    },
    {
        question: "Which HTML tag is used to display an image?",
        options: ["<image>", "<img>", "<picture-url>", "<src>"],
        answer: "<img>"
    },
    {
        question: "Which CSS property changes text color?",
        options: ["font-style", "background", "text-color", "color"],
        answer: "color"
    },
    {
        question: "Which method selects the first matching CSS selector?",
        options: [
            "querySelector()",
            "querySelectorAll()",
            "getElementsByClassName()",
            "selectElement()"
        ],
        answer: "querySelector()"
    },
    {
        question: "What does API stand for?",
        options: [
            "Application Programming Interface",
            "Advanced Program Integration",
            "Applied Programming Internet",
            "Application Process Interaction"
        ],
        answer: "Application Programming Interface"
    },
    {
        question: "Which keyword is used to define an asynchronous function?",
        options: ["await", "async", "promise", "defer"],
        answer: "async"
    },
    {
        question: "Which method adds an element to the end of an array?",
        options: ["pop()", "shift()", "push()", "unshift()"],
        answer: "push()"
    },
    {
        question: "What does localStorage store data as?",
        options: [
            "JavaScript objects directly",
            "Strings",
            "Functions",
            "HTML elements"
        ],
        answer: "Strings"
    },
    {
        question: "Which event occurs when a user clicks an element?",
        options: ["change", "submit", "mouseover", "click"],
        answer: "click"
    },
    {
        question: "Which array method returns the first element that matches a condition?",
        options: ["map()", "find()", "forEach()", "reduce()"],
        answer: "find()"
    }
];
let currentQuestionIndex = 0;
let score = 0;
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart");

const checkAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    const optionButtons = optionsElement.querySelectorAll(".option");

    optionButtons.forEach(button => {
        button.disabled = true;
        if (button.textContent === currentQuestion.answer) {
            button.classList.add("correct");
        } else if (button.textContent === selectedOption) {
            button.classList.add("incorrect");
        } else {
            button.classList.remove("correct", "incorrect");
        }
    });
};

const displayQuestion = () => {
    nextButton.disabled = true;
    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";
    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => {
            checkAnswer(option);
            nextButton.disabled = false;
        });
        optionsElement.appendChild(button);
    });

}
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        questionElement.style.display = "none";
        optionsElement.style.display = "none";
        nextButton.style.display = "none";
        resultElement.style.display = "flex";
        scoreElement.textContent = `Score: ${score}/${questions.length}`;
    }
});
restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    questionElement.style.display = "block";
    optionsElement.style.display = "flex";
    nextButton.style.display = "block";
    resultElement.style.display = "none";
    displayQuestion();
});
displayQuestion();
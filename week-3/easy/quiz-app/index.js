import { quizData } from './data.js';

let index = 0;
let total = quizData.length;
let right = 0, wrong = 0;
const queBox = document.getElementById("questionBox");
const optionInputs = document.querySelectorAll('.option');

const loadQuestion = () => {
    // handeling array index out of bound 
    if (index >= total) {
        return endQuiz();
    } else {
        reset();
    }
    const data = quizData[index];
    console.log(data);
    queBox.innerText = `${index + 1} ) ${data.question}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    if (index < total) {
        const ans = getAnswer();
        console.log(ans, quizData[index].correct);
        // we take the checked value and match it with its answer to see if it's correct or not 
        if (ans === quizData[index].correct) {
            right++;
        } else {
            wrong++;
        }
        index++;
        loadQuestion();
    }
    return;
};

// making submitQuiz as global which makes it accessible from anywhere
window.submitQuiz = submitQuiz;

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    );
    return answer;
};

const reset = () => {
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                input.checked = false;
            }
        }
    );
};

const endQuiz = () => {
    document.getElementsByClassName("container")[0].innerHTML = `
    <h3> Thank you for Playing the Quiz</h3>
    <p>Right Answers: ${right}</p>
    <p>Wrong Answers: ${wrong}</p>
    `;
};

loadQuestion();


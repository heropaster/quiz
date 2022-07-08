//  Каждый вопрос в блоке является объектом, имеющим:
//1.Вопрос 2.Массив ответов 3.Номер правильного ответа
let score = 0;
const quizJs = [
    {
        question:'"13" + 7',
        answers:[
            {
                id:'1',
                value:'137',
                correct:true,
            },
            {
                id:'2',
                value:'20',
                correct:false,
            },
            {
                id:'3',
                value:'713',
                correct:false,
            },
            {
                id:'4',
                value:'"13"7',
                correct:false,
            }
        ]
    },
    {
        question:'Вопрос2',
        answers:[
            {
                id:'1',
                value:'Ответ1',
                correct:false,
            },
            {
                id:'2',
                value:'Ответ2',
                correct:false,
            },
            {
                id:'3',
                value:'Ответ3',
                correct:true,
            },
            {
                id:'4',
                value:'Ответ4',
                correct:false,
            }
        ]
    },
] 

const quiz= document.getElementById('quiz')
const questions= document.getElementById('questions')
const count= document.getElementById('count')
const btnNext = document.getElementById('btnNext')
const btnRestart = document.getElementById('btnRestart')

const renderQuestions = function(index) {
    renderCount(index+1);

    questions.dataset.current = index

    const renderAnswers = () =>quizJs[index].answers.
        map((answer)=> 
        `
        <li>
            <label>
                    <input type="radio" class="answer" name=${index} value=${answer.id}>
                    <span>${answer.value}</span>
            </label>
        </li>
        `)
        .join('');

    questions.innerHTML = `
    <div class="quiz-questions-item">
                <div class="quiz-question">${quizJs[index].question}</div>
                <ul class="quiz-answers">${renderAnswers()}
                    
                </ul>
            </div>
    `;
};

const renderCount = function(current) {
    count.innerHTML = `${current}/${quizJs.length}`
};


function checkAnswer() {
    const nextQuestion = parseInt(parseInt(questions.dataset.current) + 1)
    //Выбранная кнопка
    const checkedRadio  = questions.querySelector('input[type="radio"]:checked')
    if (!checkedRadio) {
        btnNext.style.backgroundColor="#E63D2D" //Если ответ не выбран, кнопка окрашивается в красный на 2 секунды
        setInterval(function() {
            btnNext.style.backgroundColor="#fff";
            clearInterval()
        },2000)
        return
    };

        //Проверка номера ответа пользователя
    const user_answer = parseInt(checkedRadio.value-1)
    //Если ответ верный - счет увеличен
        if (quizJs[questions.dataset.current].answers[user_answer].correct) {
            score++
        };


    if (quizJs.length == nextQuestion) {
        console.log('Это последний вопрос')
        showResults()
    } else {
        renderQuestions(nextQuestion)
    }
}


let localResults = {};

quiz.addEventListener('change', (event)=> {
    //Изменение ответов
    if (event.target.classList.contains('answer')) {
        localResults[event.target.name] = event.target.value
    }

});
quiz.addEventListener('click', (event)=> {
    //Нажатие по кнопкам
    if (event.target.classList.contains('btnNext')) {
        checkAnswer()
    }
    if (event.target.classList.contains('btnRestart')) {
        console.log("Начать заново")
    }
});

renderQuestions(0)

function showResults() {
}
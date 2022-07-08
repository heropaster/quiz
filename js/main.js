//  Каждый вопрос в блоке является объектом, имеющим:
//1.Вопрос 2.Массив ответов 3.Номер правильного ответа
const quizJs = [
    {
        question:"Вопрос1",
        answers:[
            {
                id:'1',
                value:'Ответ1',
                correct:true,
            },
            {
                id:'2',
                value:'Ответ2',
                correct:false,
            },
            {
                id:'3',
                value:'Ответ3',
                correct:false,
            },
            {
                id:'4',
                value:'Ответ4',
                correct:false,
            }
        ]
    },
    {
        question:"Вопрос2",
        answers:[
            {
                id:'5',
                value:'Ответ1',
                correct:false,
            },
            {
                id:'6',
                value:'Ответ2',
                correct:false,
            },
            {
                id:'7',
                value:'Ответ3',
                correct:true,
            },
            {
                id:'8',
                value:'Ответ4',
                correct:false,
            }
        ]
    },
] 

const quiz= document.getElementById('quiz')
const questions= document.getElementById('questions')
const count= document.getElementById('count')
const btnNext = document.getElementById('btn')
const btnRestart = document.getElementById('btn')

const renderQuestions = function(index) {
    renderCount(index+1);

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
    console.log('checkAnswer started')

    //Выбранная кнопка
    const checkedRadio  = questions.querySelector('input[type="radio"]:checked')
    console.log(checkedRadio)
}

quiz.addEventListener('change', (event)=> {
    //Изменение ответов
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
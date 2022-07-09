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
        question:'Какой язык работает в браузерах?',
        answers:[
            {
                id:'1',
                value:'CSS',
                correct:false,
            },
            {
                id:'2',
                value:'JavaScript',
                correct:true,
            },
            {
                id:'3',
                value:'C',
                correct:false,
            },
            {
                id:'4',
                value:'Python',
                correct:false,
            }
        ]
    },
    {
        question:'Как расшифровывается CSS?',
        answers:[
            {
                id:'1',
                value:'Central Style Sheets',
                correct:false,
            },
            {
                id:'2',
                value:'Cascading Simple Sheets',
                correct:false,
            },
            {
                id:'3',
                value:'Cascading Style Sheets',
                correct:true,
            },
            {
                id:'4',
                value:'Cared Styled Coding',
                correct:false,
            }
        ]
    },
    {
        question:'В каком году был создан JavaScript?',
        answers:[
            {
                id:'1',
                value:'1994',
                correct:false,
            },
            {
                id:'2',
                value:'2001',
                correct:false,
            },
            {
                id:'3',
                value:'1995',
                correct:true,
            },
            {
                id:'4',
                value:'1996',
                correct:false,
            }
        ]
    },
    {
        question:'Что такое HTML?',
        answers:[
            {
                id:'1',
                value:'Hypertext Markdown Language',
                correct:false,
            },
            {
                id:'2',
                value:'Hyperloop Machine Language',
                correct:false,
            },
            {
                id:'3',
                value:'Hyper tangled massive loop',
                correct:false,
            },
            {
                id:'4',
                value:'Hypertext Markup Language',
                correct:true,
            }
        ]
    },
    {
        question:'Оператор "&&" - это?',
        answers:[
            {
                id:'1',
                value:'Оператор присваивания',
                correct:false,
            },
            {
                id:'2',
                value:'Логическое ИЛИ',
                correct:false,
            },
            {
                id:'3',
                value:'Логическое И',
                correct:true,
            },
            {
                id:'4',
                value:'Нет правильного ответа',
                correct:false,
            }
        ]
    },
    {
        question:'Какие бывают способы объявления функции',
        answers:[
            {
                id:'1',
                value:'Function Declaration',
                correct:false,
            },
            {
                id:'2',
                value:'Function Expression',
                correct:false,
            },
            {
                id:'3',
                value:'Named Function Expression',
                correct:false,
            },
            {
                id:'4',
                value:'Все ответы верны',
                correct:true,
            }
        ]
    },
    {
        question:'К какому способу объявления функций относят стрелочные `() =>` ?',
        answers:[
            {
                id:'1',
                value:'Function Declaration',
                correct:false,
            },
            {
                id:'2',
                value:'Named Function Expression',
                correct:false,
            },
            {
                id:'3',
                value:'Это отдельный способ объявления',
                correct:true,
            },
            {
                id:'4',
                value:'Function Expression',
                correct:false,
            }
        ]
    },
] 
const restart = document.getElementById('restart')
const quiz = document.getElementById('quiz')
const questions = document.getElementById('questions')
const count = document.getElementById('count')
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
            btnNext.style.backgroundColor="#19AED6";
            clearInterval()
        },2000)
        return
    };

        //Проверка номера ответа пользователя
    const user_answer = parseInt(checkedRadio.value-1)
    //Если ответ верный - счет увеличен
        if (quizJs[questions.dataset.current].answers[user_answer].correct) {
            score++
            console.log(score)
        };


    if (quizJs.length == nextQuestion) {
        console.log('Это последний вопрос')
        showResults()
    } else {
        renderQuestions(nextQuestion)
    }
}

quiz.addEventListener('click', (event)=> {
    //Нажатие по кнопкам
    if (event.target.classList.contains('btnNext')) {
        checkAnswer()
    }
    if (event.target.classList.contains('restart')) {
        history.go()
    }
});

renderQuestions(0)

function showResults() {
    console.log('showResults start')
    const resultsBlock= `
                <h2 class="title">%title%</h2>
                <h3 class="summary">%message%</h3>
                <p class="result">%result%</p>
                <button class='restart' id='restart'>Начать заново</button>
                <div class='imgs'> <img src="img/solution.png" title='Подумал'> <img src="img/innovation.png" title='Придумал'> <img src="img/success.png" title='Сделал'>
                 </div>
    `;
    
    //Результат
    let result = `${score} из ${quizJs.length}`;

    let message,title;
    //Варианты результатов в зависимости от очков
    if(score==quizJs.length) {
        title='Congratulations!'
        message='Ты ответил верно на все вопросы, так держать!'
    } else if (score >= quizJs.length/2) {
        title='Неплохой результат';
        message='Ты ответил верно более чем на половину вопросов, неплохо!'
    } else {
        title='Всё плохо:(';
        message='Стоит повторить тему этой викторины, ты ответил менее чем на половину вопросов:('
    }

    const final = resultsBlock
                                .replace('%title%', title)
                                .replace('%message%', message)
                                .replace('%result%', result);
    

    quiz.innerHTML=final;
}
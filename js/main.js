//  Каждый вопрос в блоке является объектом, имеющим:
//1.Вопрос 2.Массив ответов 3.Номер правильного ответа
let score = 0;
let currentQuiz
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
                value:'Это способ определения функции',
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
const quizChem = [
    {
    question:'Выберите элемент-неметалл',
    answers:[
        {
            id:'1',
            value:'Au',
            correct:false,
        },
        {
            id:'2',
            value:'Fe',
            correct:false,
        },
        {
            id:'3',
            value:'U',
            correct:false,
        },
        {
            id:'4',
            value:'B',
            correct:true,
        }
    ]
},
{
    question:'Максимальная степень окисления марганца(Mn)',
    answers:[
        {
            id:'1',
            value:'+2',
            correct:false,
        },
        {
            id:'2',
            value:'+3',
            correct:false,
        },
        {
            id:'3',
            value:'+1',
            correct:false,
        },
        {
            id:'4',
            value:'+7',
            correct:true,
        }
    ]
},
{
    question:'Кто открыл элемент Иридий',
    answers:[
        {
            id:'1',
            value:'С.Теннант',
            correct:true,
        },
        {
            id:'2',
            value:'К.Линней',
            correct:false,
        },
        {
            id:'3',
            value:'М.Склодовская-Кюри',
            correct:false,
        },
        {
            id:'4',
            value:'Д.Менделеев',
            correct:false,
        }
    ]
},
{
    question:'Выберите кислоту',
    answers:[
        {
            id:'1',
            value:'KOH',
            correct:false,
        },
        {
            id:'2',
            value:'H2O',
            correct:false,
        },
        {
            id:'3',
            value:'H3PO4',
            correct:true,
        },
        {
            id:'4',
            value:'KMnO4',
            correct:false,
        }
    ]
},
{
    question:'Что вызывает алкогольное похмелье?',
    answers:[
        {
            id:'1',
            value:'Распад алкоголя проходит быстрее, чем окисление ацетальдегида',
            correct:false,
        },
        {
            id:'2',
            value:'Распад алкоголя проходит медленнее, чем окисление ацетальдегида',
            correct:true,
        },
        {
            id:'3',
            value:'Спирт впитывается в стенки коры больших полушарий',
            correct:false,
        },
        {
            id:'4',
            value:'Растворимость этанола в воде и жирах печени происходит медленно',
            correct:false,
        }
    ]
},
{
    question:'Почему гелий искажает голос?',
    answers:[
        {
            id:'1',
            value:'Из-за примесей криптона',
            correct:false,
        },
        {
            id:'2',
            value:'Из-за низкой плотности и вязкости газа',
            correct:true,
        },
        {
            id:'3',
            value:'Из-за высокой плотности и вязкости газа',
            correct:false,
        },
        {
            id:'4',
            value:'Нет правильных ответов',
            correct:false,
        }
    ]
},
{
    question:'Укажите элемент изотопы которого получили собственные имена',
    answers:[
        {
            id:'1',
            value:'H',
            correct:true,
        },
        {
            id:'2',
            value:'U',
            correct:false,
        },
        {
            id:'3',
            value:'C',
            correct:false,
        },
        {
            id:'4',
            value:'P',
            correct:false,
        }
    ]
},
]
const quizMath = [ {
    question:'Продолжите ряд чисел: 1,2,3,5,8,13...',
    answers:[
        {
            id:'1',
            value:'21',
            correct:true,
        },
        {
            id:'2',
            value:'18',
            correct:false,
        },
        {
            id:'3',
            value:'20',
            correct:false,
        },
        {
            id:'4',
            value:'26',
            correct:false,
        }
    ]
},
{
    question:' 2/3 числа равняется 3/5 числа. Что это за число? ',
    answers:[
        {
            id:'1',
            value:'217',
            correct:false,
        },
        {
            id:'2',
            value:'1021',
            correct:false,
        },
        {
            id:'3',
            value:'111',
            correct:false,
        },
        {
            id:'4',
            value:'0',
            correct:true,
        }
    ]
},
{
    question:` Лупа имеет 4-кратное увеличение. Каким будет угол в 
    25 °,рассматриваемый через эту лупу?`,
    answers:[
        {
            id:'1',
            value:'100',
            correct:false,
        },
        {
            id:'2',
            value:'6.25',
            correct:false,
        },
        {
            id:'3',
            value:'25',
            correct:true,
        },
        {
            id:'4',
            value:'50',
            correct:false,
        }
    ]
},
{
     question:'Как изменится объем прямоугольного ящика, если его длину увеличили на 50 %, а высоту уменьшили в 1,5 раза?',
    answers:[
        {
            id:'1',
            value:'Увеличится на 50%',
            correct:false,
        },
        {
            id:'2',
            value:'Не изменится',
            correct:true,
        },
        {
            id:'3',
            value:'Уменьшится на 50%',
            correct:false,
        },
        {
            id:'4',
            value:'Увеличится на 15%',
            correct:false,
        }
    ]
},
{
    question:`Решите уравнение 5/(x – 1) – 3/(x + 1) = 15/(x^2 – 1)`,
   answers:[
       {
           id:'1',
           value:'3,5',
           correct:true,
       },
       {
           id:'2',
           value:'5',
           correct:false,
       },
       {
           id:'3',
           value:'7',
           correct:false,
       },
       {
           id:'4',
           value:'Нет верного ответа',
           correct:false,
       }
   ]
},
{
    question:`Шоколадка стоит 115 рублей и еще половину её стоимости, сколько стоит шоколадка?`,
   answers:[
       {
           id:'1',
           value:'172,5',
           correct:false,
       },
       {
           id:'2',
           value:'150',
           correct:false,
       },
       {
           id:'3',
           value:'230',
           correct:true,
       },
       {
           id:'4',
           value:'115',
           correct:false,
       }
   ]
},
]

const math = document.getElementById('math')
const select = document.getElementById('select')
const list = document.getElementById('list')
const js = document.getElementById('js')
const chem = document.getElementById('chem')
const restart = document.getElementById('restart')
const quiz = document.getElementById('quiz')
const questions = document.getElementById('questions')
const count = document.getElementById('count')
const btnNext = document.getElementById('btnNext')
const btnRestart = document.getElementById('restart')

const renderQuestions = function(index) {
    renderCount(index+1);

    questions.dataset.current = index
    const renderAnswers = () =>currentQuiz[index].answers.
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
                <div class="quiz-question">${currentQuiz[index].question}</div>
                <ul class="quiz-answers">${renderAnswers()}
                    
                </ul>
            </div>
    `;
};

const renderCount = function(current) {
    count.innerHTML = `${current}/${currentQuiz.length}`
};


function checkAnswer() {
    const nextQuestion = parseInt(parseInt(questions.dataset.current) + 1)
    //Выбранная кнопка
    const checkedRadio  = questions.querySelector('input[type="radio"]:checked')
    if (!checkedRadio) {
        btnNext.style.backgroundColor="#E63D2D" //Если ответ не выбран, кнопка окрашивается в красный на 2 секунды
        setTimeout(function() {
            btnNext.style.backgroundColor="#19AED6";
            clearTimeout()
        },500)
        return
    };

        //Проверка номера ответа пользователя
    const user_answer = parseInt(checkedRadio.value-1)
    //Если ответ верный - счет увеличен
        if (currentQuiz[questions.dataset.current].answers[user_answer].correct) {
            score++
            console.log(score)
        };


    if (currentQuiz.length == nextQuestion) {
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


function showResults() {
    console.log('showResults start')
    const resultsBlock= `
                <div results-container>
                <h2 class="title">%title%</h2>
                <h3 class="summary">%message%</h3>
                <p class="result">%result%</p>
                <div class='imgs'> <img src="img/solution.png" title='Подумал'> <img src="img/innovation.png" title='Придумал'> <img src="img/success.png" title='Сделал'>
                <button class='restart' id='restart'>Начать заново</button>
                 </div>
                 </div>
    `;
    
    //Результат
    let result = `${score} из ${currentQuiz.length}`;

    let message,title;
    //Варианты результатов в зависимости от очков
    if(score==currentQuiz.length) {
        title='Congratulations!'
        message='Ты ответил верно на все вопросы, так держать!'
    } else if (score >= currentQuiz.length/2) {
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

function buttonsTurn() {
    btnNext.style.display='block';
}

list.addEventListener('click', (event)=> {
    //Выбор викторины
    if (event.target.classList.contains('jsBtn')) {
        currentQuiz=quizJs;
        event.stopPropagation;
    }else if (event.target.classList.contains('chemBtn')) {
        currentQuiz=quizChem;
        event.stopPropagation;
    }else if (event.target.classList.contains('mathBtn')) {
        currentQuiz=quizMath;
        event.stopPropagation;
    }else return

    console.log(currentQuiz)
    select.style.display='none'
    renderQuestions(0)
    buttonsTurn()
});
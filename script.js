const questionData = [
    {
        Question:'What is the original name of Halloween?',
        a:'Day of the Dead',
        b:'Samhain',
        c:'All Hallows Eve',
        d:'Guy Fawkes Night',
        Correct:'c',
    },
    {
        Question:'Which country is believed to be the birthplace of Halloween?',
        a:'Germany',
        b:'Ireland',
        c:'United States',
        d:'Mexico',
        Correct:'b',
    },
    {
        Question:'What vegetable was originally used to make Jack-o-lanterns?',
        a:'Turnip',
        b:'Potato',
        c:'Carrot',
        d:'Pumpkin',
        Correct:'a',
    },
    {
        Question:'What do people traditionally say when they go trick-or-treating?',
        a:'Boo!',
        b:'Happy Halloween!',
        c:'Give me candy!',
        d:'Trick or treat!',
        Correct:'d',
    },
    {
        Question:'Which famous magician died on Halloween?',
        a:'David Copperfield',
        b:'Criss Angel',
        c:'Harry Houdini',
        d:'David Blaine',
        Correct:'d',
    },
  
]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_answer");
const b_text = document.getElementById("b_answer");
const c_text = document.getElementById("c_answer");
const d_text = document.getElementById("d_answer");
const submitBtn = document.getElementById("button_submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = questionData[currentQuiz];
    questionEl.innerText = currentQuizData.Question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function rightanswers(){
   alert('right answers: \n 1) All Hallows Eve \n 2) Ireland \n 3) Turnips \n 4) Trick or treat! \n 5) David Blaine  ')
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === questionData[currentQuiz].Correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < questionData.length) {
            loadQuiz();
        } else {
            const percent = (score/questionData.length)*100;
           if(percent===20){
            quiz.innerHTML = `
            <h2>You answered  ${percent}% questions correctly .</h2>   
            <h2 id="saying">I know you can do more </h2>          
            <button class="ReloadBtn" onclick="location.reload()">Reload</button>
             <button class="answersBtn" onclick="rightanswers()">show answers</button>
        `;
           }else if(percent===40){
            quiz.innerHTML = `
            <h2>You answered  ${percent}% questions correctly .</h2>   
            <h2 id="saying">Excellent dont give up </h2>          
            <button class="ReloadBtn" onclick="location.reload()">Reload</button>
             <button class="answersBtn" onclick="rightanswers()">show answers</button>
        `;
           }else if(percent === 60){
            quiz.innerHTML = `
            <h2>You answered  ${percent}% questions correctly .</h2>   
            <h2 id="saying">Woowyou such a smart guy </h2>          
            <button class="ReloadBtn" onclick="location.reload()">Reload</button>
             <button class="answersBtn" onclick="rightanswers()">show answers</button>
        `;
           }else if(percent === 80){
            quiz.innerHTML = `
            <h2>You answered  ${percent}% questions correctly .</h2>   
            <h2 id="saying">I never doubt of you GENUIS </h2>          
            <button class="ReloadBtn" onclick="location.reload()">Reload</button>
             <button class="answersBtn" onclick="rightanswers()">show answers</button>
        `;
           }else if(percent === 100){
            quiz.innerHTML = `
            <h2>You answered  ${percent}% questions correctly .</h2>   
            <h2 id="saying">Nothing to say , Are you alien?</h2>          
            <button class="ReloadBtn" onclick="location.reload()">Reload</button>
             <button class="answersBtn" onclick="rightanswers()">show answers</button>
        `;
           }else{
            quiz.innerHTML = `
            <h2>You answered  ${percent}% questions correctly .</h2>   
            <h2 id="saying">its not bad</h2>          
            <button class="ReloadBtn" onclick="location.reload()">Reload</button>
             <button class="answersBtn" onclick="rightanswers()">show answers</button>
        `;
           }
        }
    }
});


const QuizzDb=[
    {
        question:"Q1: what is the full form of HTMl?",
        a:"HyperText Markup Language",
        b:"Hey text markup language",
        c:"Hello to my land",
        d:"None of this",
        ans:"ans1"
    },
    {
        question:"Q2: what is the full form of CSS?",
        a:"Cascading Style Sheet",
        b:"Cascading Style Sheep",
        c:"Caes Cascading Style",
        d:"None of this",
        ans:"ans1"
    },
    {
        question:"Q3: what is the full form of JS?",
        a:"Java Script",
        b:"Java Sheet",
        c:"Java Search ",
        d:"None of this",
        ans:"ans1"
    },
    {
        question:"Q4: what is the full form of HTTP?",
        a:"Hyper Text Transfer Protocol",
        b:"Hyper Text Text Protocol",
        c:"Hyper Test Protocol",
        d:"None of this",
        ans:"ans1"
    },
    {
        question:"Q5: what is the full form of BOM?",
        a:"Browser object model",
        b:"Board Object Model",
        c:"Boat opera music",
        d:"None of this",
        ans:"ans1"
    },
    {
        question:"Q6: what is incerament operator?",
        a:"++",
        b:"--",
        c:"both",
        d:"+=",
        ans:"ans1"
    },
    {
        question:"Q7: what is the syntax of ternary operator?",
        a:"(condition)?'true':'false",
        b:"true",
        c:"false",
        d:"all of the above",
        ans:"ans1"
    },
    {
        question:"Q8: what is the full form of IP?",
        a:"Internet Protocol",
        b:"Internet Port",
        c:"Both",
        d:"Internet paragraph",
        ans:"ans1"
    },
    {
        question:"Q9: what is the full form of TP?",
        a:" Transfer Protocol",
        b:" Text Protocol",
        c:" Test Protocol",
        d:" None of this",
        ans:"ans1"
    },
    {
        question:"Q10: what is the full form of Email?",
        a:"Electronic Mail",
        b:"Electron Mass",
        c:"Electronic Media",
        d:"None of this",
        ans:"ans1"
    },
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');
let questionCount=0;
let score=0;

const loadQuestion =() =>{
   const questionList=QuizzDb[questionCount];
   question.innerText=questionList.question;
   option1.innerText=questionList.a;
   option2.innerText=questionList.b;
   option3.innerText=questionList.c;
   option4.innerText=questionList.d;

}
loadQuestion();

const getCheckAnswer=() =>{
    let answer;
    answers.forEach((curAnsEle)=>{
        if(curAnsEle.checked){
            answer=curAnsEle.id;
        }
       
    });
    return answer;
};

const deselectAll=() =>{
    answers.forEach((curAnsEle)=>curAnsEle.checked=false);
}

submit.addEventListener('click', ()=>{
    const checkedAnswer=getCheckAnswer();
    deselectAll();
    console.log(checkedAnswer);
    if(checkedAnswer ===QuizzDb[questionCount].ans){
       ++ score;
    }
    
    questionCount++;
    
    if(questionCount < QuizzDb.length){
          loadQuestion();  
    }
    
       else{ showScore.innerHTML=`
        <h3>your score ${score}/${QuizzDb.length}</h3>
        <button class="btn" onclick="location.reload()">play again</button>
        `;
        showScore.classList.remove('scoreArea');
          }
});
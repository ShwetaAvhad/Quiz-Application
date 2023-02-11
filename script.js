const questions=[
    {
        'que':'Which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JS',
        'd':'REACT',
        'correct':'a'
    },
    {
        'que':'Javascript is an _______ language?',
        'a':'Object-Oriented',
        'b':'Object-Based',
        'c':'Procedural',
        'd':'None of the above',
        'correct':'a'
    },
    {
        'que':'HTML language is a set of markup ___',
        'a':'Attributes',
        'b':'Tags',
        'c':'Sets',
        'd':'Groups',
        'correct':'b'
    },
    {
        'que':'Which is the largest heading tag?',
        'a':'H5',
        'b':'H2',
        'c':'H1',
        'd':'H6',
        'correct':'c'
    },
    {
        'que':'A list which is provided with numeric digit is called an',
        'a':'Ordered List',
        'b':'Unordered List',
        'c':'Deonition List',
        'd':'None of the above',
        'correct':'a'
    },
    {
        'que':'Javascript is a ______________',
        'a':'server side scripting language.',
        'b':'client side scripting language.',
        'c':'Either (A) or (B)',
        'd':'Neither (A) nor (B)',
        'correct':'b'
    },
    {
        'que':'Which element in HTML dones sections of a web page?',
        'a':'table',
        'b':'div',
        'c':'frame',
        'd':'None of the above',
        'correct':'b'
    },
    {
        'que':' Which of the following type of HTML tag is used to define an internal style sheet?',
        'a':'<script>',
        'b':'<link>',
        'c':'<class>',
        'd':'<style>',
        'correct':'d'
    },
    {
        'que':'Which of the following function defines a linear gradient as a CSS image?',
        'a':'gradient()',
        'b':'linear-gradient()',
        'c':'grayscale()',
        'd':'image()',
        'correct':'b'
    },
    {
        'que':'Which of the following CSS property sets the font size of text?',
        'a':'font-size',
        'b':'text-size',
        'c':'text',
        'd':'size',
        'correct':'a'
    }
]
let index=0;
let total=questions.length;
let right=0,wrong=0;
const optioninput=document.querySelectorAll(".options")
const queBox=document.getElementById("queBox")
var prebtn = document.getElementById("btn1")
var qno=document.getElementById("qno")

let totaltime=60;
let min=0;
let sec=0;
let counter=0;

let timer=setInterval(function(){
    counter++;
    min=Math.floor((totaltime-counter)/60);
    sec=totaltime-min*60-counter;
    console.log(min);
    console.log(sec);
    document.getElementById('time').innerHTML=min +":"+ sec;
    if(counter==totaltime){
        alert("Time's up!!");
        return endQuiz()
        clearInterval(timer);
    }
},1000);

const loadquestion=()=>{

    if(index==total){
        return endQuiz()
    }
    reset(); 
    const data=questions[index]
    console.log(data)
    queBox.innerText=`${index+1}) ${data.que}`;
    document.getElementById('qno').innerHTML=`
        (${index+1} of ${total})`
 
    optioninput[0].nextElementSibling.innerText=data.a;
    optioninput[1].nextElementSibling.innerText=data.b;
    optioninput[2].nextElementSibling.innerText=data.c;
    optioninput[3].nextElementSibling.innerText=data.d;
}

const submitquiz=()=>{
    const data=questions[index]
    const ans=getAnswer()
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    console.log(right);
    //console.log(index);
    if(index>=1){
        prebtn.disabled=false;
    }
    else
    {
        prebtn.disabled=true;
    }
    loadquestion();
    return;
}

const previous=()=>{
    index--;
    right--;
    //console.log(index);
    loadquestion();
    console.log(right);
    return;
}

const getAnswer=()=>{
    let answer;
    optioninput.forEach(
        (input)=>{
            if(input.checked){
               answer= input.value; 
            }
        }
    )
    return answer;
}

const reset=()=>{
    optioninput.forEach(
        (input)=>{
            input.checked=false
        }
    )
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <i class="fa-solid fa-party-horn"></i>
    <i class="fa-sharp fa-solid fa-gift"></i>
    <h3>Thank You !!</h3>
    <h3>You've completed the Quiz</h3>
    <h2 class="ans">${right} out of ${total} are correct </h2>
    <a href="index.html" class="replay">Play Again</a>
    <a href="start.html" class="quite">Quite Quiz</a>
    </div>`
}

loadquestion();
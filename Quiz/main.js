
const question = [
    {
        'que': 'What is the color of sky?',
        'a': 'Black',
        'b': 'Yellow',
        'c': 'Blue',
        'd': 'Cyan',
        'correct': 'c'
    },
    {
        'que': 'Which is the capital of India?',
        'a': 'Karnataka',
        'b': 'Delhi',
        'c': 'Mumbai',
        'd': 'Rajasthan',
        'correct': 'b'
    },
    {
        'que': 'Where are the 7 wonders of India situaated?',
        'a': 'Jaipur',
        'b': 'Bikaner',
        'c': 'Kota',
        'd': 'Udaipur',
        'correct': 'c'
    }
]

let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;
const queBox = document.getElementById('quesBox')
const optInputs = document.querySelectorAll('.options')

const loadQues = () => {
    const data = question[index]
    //console.log(data)
    queBox.innerText = ` ${index+1}) ${data.que}`;
    optInputs[0].nextElementSibling.innerText = data.a;
    optInputs[1].nextElementSibling.innerText = data.b;
    optInputs[2].nextElementSibling.innerText = data.c;
    optInputs[3].nextElementSibling.innerText = data.d;
}


const submitQuiz = () => {
    const data = question[index]
    const ans = getAnswer()
    console.log(ans);
    if(ans === data.correct){
        right++;
        console.log("Yes! you did it.");
        index++;
        loadQues();
    }
    else{
        wrong++;
        console.log("Oops...", data.correct);
    }
    return;
}

const getAnswer = () => {
    optInputs.forEach(
        (input) => {
            if(input.checked){
                return input.value;
            }
        }
    )
}
loadQues();
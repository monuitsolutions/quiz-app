const questions = [
    {
        'que': 'Which of the folowing is a markup language?',
        'a': 'HTML',
        'b': 'css',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'What year was Javascript launched?',
        'a': '1966',
        'b': '1995',
        'c': '1994',
        'd': 'none of the avobe',
        'correct': 'b'
    },
    {
        'que': 'What does css stands for?',
        'a': 'Hypertext Markup Language',
        'b': 'Cascating style Sheet',
        'c': 'Jason Object Notaion',
        'd': 'Helicopter Terminals Motorboats Lamborginis',
        'correct': 'b'
    }
];
let index = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');

const loadQuestion = () => {
    const data = questions[index];
    quesBox.innerText = ` ${index + 1} ${'.'} ${data.que}`;
    // console.log(data.a);
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
// inital call
loadQuestion();
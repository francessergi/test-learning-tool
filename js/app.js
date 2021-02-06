var bdd = [
    ["Buenos días / Buenas noches", "Annyong"],
    ["Entiendo / No entiendo", "Ihae / nan ihaega an dwaeyo"],
    ["Hasta luego", "Annyonghi kyeseyo"],
    ["Bienvenido", "Hwan-yeong"],
    ["Gracias (muchas)", "Gamsahamnida"],
    ["Perdona / Disculpa", "Sillyehamnida"],
    ["No gracias", "Gwaenchanhseubnida"],
    ["Si / No", "Ne / Aniyo"]
];

bbdRnd = [].concat(bdd);
shuffle(bbdRnd);



//questions - lContainer - rContainer
function carregaTest() {
    bdd.forEach(element => {
        var question = document.createElement('div');
        question.textContent = element[0];
        question.classList.add('question');
        questions.appendChild(question);

    });
    bbdRnd.forEach(element => {
        var answer = document.createElement('div');
        answer.textContent = element[1];
        answer.classList.add('answer');
        answer.addEventListener('click', function() {
            canviaLloc(this);
        });
        rContainer.appendChild(answer);
    });
}

function canviaLloc(param) {
    var llocActual = param.parentElement.id;
    if (llocActual == "rooster") {
        lContainer.appendChild(param);
    } else {
        rContainer.appendChild(param);
    }
}

function reset() {
    var eQuestion = document.getElementsByClassName('question');
    var eAnswer = document.getElementsByClassName('answer');
    while (eAnswer.length > 0) {
        eQuestion[0].remove();
        eAnswer[0].remove();
    }
    carregaTest();
}

function evalue() {
    var eAnswer = document.getElementsByClassName('answer');
    if (eAnswer.length != bdd.length) {
        console.log("Falten preguntes per respondre");
        return false;
    }
    for (let index = 0; index < eAnswer.length; index++) {
        var answer = eAnswer[index].textContent;
        if (answer == bdd[index][1]) {
            eAnswer[index].style.background = "#1AD741";
        } else {
            eAnswer[index].style.background = "#E30300";
        }
    }
}

/* ######################### UTILS ######################### */

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
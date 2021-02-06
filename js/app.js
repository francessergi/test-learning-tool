var target = [];

var basicas = [
    ["Buenos días", "Annyong"],
    ["Lo entiendo", "Ihae haess-eoyo"],
    ["Hasta luego", "Annyonghi kyeseyo"],
    ["Bienvenido", "Hwan-yeong-amnida"],
    ["Gracias", "Gamsahamnida"],
    ["Perdona / Disculpa", "Sillyehamnida"],
    ["No gracias", "Gwaenchan-ayo"],
    ["Si", "Ne"],
    ["No", "Aniyo"]
];

var negocios = [
    ["Cuánto es?", "Eolmana?"],
    ["Es barato", "Geugeos-eun maeu jeolyeom"],
    ["Es demasiado caro !", "Geugeos-eun neomu bissa"],
    ["Me encanta", "Naneun salang"],
    ["Lo detesto", "Silh-eo"],
    ["Dinero", "Don"]
];

var transportes = [
    ["Avión", "Bihaengki"],
    ["Barco", "Boteu"],
    ["Tren", "Kicha"],
    ["Taxi", "Taeksi"],
    ["Bus / Autobús", "Beoseu"],
    ["Me gustaría alquilar", "Naneun imdaehago sip-eoyo..."],
    ["Moto", "Otobai"],
    ["Coche", "Seungyongcha"],
    ["Bici / Bicicleta", "Jajeongeo"]
];

var direcciones = [
    ["Banco", "Eunhaeng"],
    ["Estación", "Kicha yeok"],
    ["Centro Cuidad", "Dosim"],
    ["Hotel", "Hoteil"],
    ["Hospital", "Byeongwon"],
    ["Derecha", "Orun-jog"],
    ["Izquierda", "Wen-jog"],
    ["Norte/Sur/Este/Oeste", "Buk/nam/dong/seo"]
];

var cifras = [
    ["uno", "ana"],
    ["dos", "dul"],
    ["tres", "set"],
    ["cuatro", "net"],
    ["cinco", "tasot"],
    ["seis", "yosot"],
    ["siete", "iglop"],
    ["ocho", "yodolp"],
    ["ahop", "net"],
    ["cuatro", "yol"]
];

var horario = [
    ["Qué hora es?", "Geugeos-eun myeochsi ibnikka ?"],
    ["Cuándo?", "Eonje ?"],
    ["Ayer", "Eoje"],
    ["Hoy (mañana/tarde/noche)", "Oneul (achim/daenaj/jeonyeog)"],
    ["Mañana", "Nae-il"],
    ["Lunes, martes, miércoles, jueves, viernes, sábado, domingo", "Wol-yoil, hwayoil, suyoil, mog-yoil, geum-yoil, toyoil, il-yoil"]
];

var comida = [
    ["Tengo hambre/ tengo sed", "Baegopa / naneun mog maleun ibnida"],
    ["Estaba delicioso! / Estaba riquísimo", "Masisseosseumnida"],
    ["Qué me recomiendas?", "Mwol chucheon haeyo"],
    ["Soy vegetariano", "Jeon chaeshikjuyija"],
    ["Está demasiado caliente", "Neomu tteugeobda"],
    ["Soy alérgico(a)", "Naneun alleleugi ibnida"],
    ["Marisco", "Haesanmul"],
    ["Cacahuete", "Ttangkong"],
    ["Gluten", "Geullutin"],
    ["Agua", "Mul"],
    ["Té/café", "Hongcha / Keopi"],
    ["Cerveza/vino", "Maekju / podoju"]
];

var salud = [
    ["Dónde esta el hospital?", "Eodi byeong-won ibnida"],
    ["Me duele aquí", "Yeogi sangcheo"],
    ["Dónde estan los baños?", "Hwajangsil eun eodie issseubnikka?"],
    ["Socorro ! / Ayuda !", "Dowajuseyo!"],
    ["Policia", "Gyeongchal"],
    ["Peligro", "Wiheom"]
];

function escullTest(param) {
    var x = param.value;
    if (questions.childElementCount > 1) {
        eraseAll();
    }
    switch (x) {
        case "Expresiones basicas":
            target = basicas;
            break;
        case "Negocios":
            target = negocios;
            break;
        case "Transportes":
            target = transportes;
            break;
        case "Direcciones":
            target = direcciones;
            break;
        case "Cifras":
            target = cifras;
            break;
        case "Horario":
            target = horario;
            break;
        case "Comida":
            target = comida;
            break;
        case "Salud":
            target = salud;
            break;
        default:
            break;
    }
    targetRandom = [].concat(target);
    shuffle(targetRandom);
    carregaTest();
}



function select() {
    var coleccion = ["Expresiones basicas", "Negocios", "Transportes", "Direcciones", "Cifras", "Horario", "Comida", "Salud"];
    var tests = document.getElementById('tests');
    for (let index = 0; index < coleccion.length; index++) {
        var opcio = document.createElement('option');
        opcio.value = coleccion[index];
        opcio.textContent = coleccion[index];
        tests.appendChild(opcio);
    }
}


//questions - lContainer - rContainer
function carregaTest() {
    target.forEach(element => {
        var question = document.createElement('div');
        question.textContent = element[0];
        question.classList.add('question');
        questions.appendChild(question);
    });
    targetRandom.forEach(element => {
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

function eraseAll() {
    var eQuestion = document.getElementsByClassName('question');
    var eAnswer = document.getElementsByClassName('answer');
    while (eAnswer.length > 0) {
        eQuestion[0].remove();
        eAnswer[0].remove();
    }
    //carregaTest();
}

function resetAll() {
    eraseAll()
    carregaTest();
}



function evalue() {
    var eAnswer = document.getElementsByClassName('answer');
    if (lContainer.childElementCount - 1 != target.length) {
        console.log("Falten preguntes per respondre");
        return false;
    }
    for (let index = 0; index < eAnswer.length; index++) {
        var answer = eAnswer[index].textContent;
        if (answer == target[index][1]) {
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
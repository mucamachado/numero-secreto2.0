let numsAlreadySorted = [];
let maxNum = 50;
let secretNum = randomNumGen();
let tGuesses = 1;


function showText (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
    showText('h1', 'Jogo do número secreto');
    showText('p', 'Escolha um número entre 1 e 100');


function checkGuess() {
    let guess = document.querySelector('input').value;
    guessWord = tGuesses > 1 ? 'tentativas' : 'tentativa';
    let guessMsg = `Você acertou o número secreto com ${tGuesses} ${guessWord}.`;

    if (guess == secretNum) {
        showText('p', guessMsg);
        showText('h1', 'Acertou!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (guess > secretNum) {
        showText('p', `O número secreto é menor que ${guess}`);
    } else {
        showText('p', `O número secreto é maior que ${guess}`);
    }
    tGuesses++;
    clearInput()
}

function randomNumGen () {
    let numChose =  parseInt(Math.random()*maxNum+1);
    let elementsQnt = numsAlreadySorted.length;
    if (elementsQnt == 4) {
        numsAlreadySorted = [];
    }
    if (numsAlreadySorted.includes(numChose)) {
        return randomNumGen();
    } else {
        numsAlreadySorted.push(numChose);
        console.log(numsAlreadySorted);
        return numChose;
    }
}

function clearInput() {
        guess = document.querySelector('input')
        guess.value = '';
}

function initalMsg() {
    showText('h1', 'Jogo do número secreto');
    showText('p', 'Escolha um número entre 1 e 10');
}

function restart() {
    secretNum = randomNumGen();
    clearInput()
    tGuesses = 1;
    initalMsg();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}





 


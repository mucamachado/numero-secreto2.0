function greeting() {
    console.log('Olá mundo!')
}

function greetingName(nameInp) {
    console.log(`Olá, ${nameInp}`);
}
greetingName('Muca')

function doubleNum (num) {
    let numDouble = (num*2);
    return console.log(numDouble)
}
doubleNum(10.5);

function aritMedia (num1, num2, num3) {
    let media = (num1 + num2 + num3) / 3;
    return console.log(media);
}
aritMedia(1, 2, 3);

function biggestNum (num4, num5) {
    let numsCompt = (num4 > num5 ? 202 : 404);
    return console.log(numsCompt);
}
biggestNum (2, 1);

function numSq(numBase) {
    let sq = numBase*numBase;
    return console.log(sq);
}
numSq(21);


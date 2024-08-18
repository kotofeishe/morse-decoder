const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let n = expr.length/10;
    let arrayResult = [];
    let finishResult = '';
    let k = 0;
    for (let i = 0; i < n; i++) {
        arrayResult = [...arrayResult, expr.slice(k, k+10)]
        k = k + 10;
    }
    let arrayWithoutZero = '';
    let arrayMorse = '';
    arrayResult.forEach(value => {
        if (value === '**********') {
            finishResult = finishResult + ' ';
        }
        else {arrayWithoutZero = (value.slice(value.indexOf('1')));
        for (let i = 0; i < arrayWithoutZero.length; i = i + 2) {
            if(arrayWithoutZero.slice(i, i+2) === '10') {
                arrayMorse = arrayMorse + '.';
            }
            else {
                arrayMorse = arrayMorse + '-';
            }
        }
        finishResult = finishResult + MORSE_TABLE[arrayMorse];
        arrayMorse = '';
}})
    return finishResult;
}

module.exports = {
    decode
}

console.log (decode("0000001111**********0000000010"));
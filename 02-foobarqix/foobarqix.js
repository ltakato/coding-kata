function divisionDetect(number) {
    let word = '';

    if (number % 3 === 0) word = word + 'Foo';
    if (number % 5 === 0) word = word + 'Bar';
    if (number % 7 === 0) word = word + 'Qix';

    return word;
}

function digitDetect(number) {
    const splittedNumber = number.toString().split('');

    return splittedNumber.map(char => {
        if (char === '3') return 'Foo';
        else if (char === '5') return 'Bar';
        else if (char === '7') return 'Qix';
        else return '';
    }).join('');
};

function foobarqix(number) {
    const result = divisionDetect(number) + digitDetect(number);

    return result ? result : number;
}

module.exports = {
    divisionDetect,
    digitDetect,
    foobarqix
};
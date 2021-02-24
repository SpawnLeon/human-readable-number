const firstOrderNumbersMap = {
    0: '', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
    6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
};
const tenNumbersMap = {
    0: 'ten', 1: 'eleven', 2: 'twelve', 3: 'thirteen', 4: 'fourteen', 5: 'fifteen',
    6: 'sixteen', 7: 'seventeen', 8: 'eighteen', 9: 'nineteen',
};

const secondOrderNumbersMap = {
    2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty',
    6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety',
};

const bigNumbersMap = {
    3: 'hundred',
};

module.exports = function toReadable(number) {
    if (number === 0) {
        return 'zero';
    }

    const num = number.toString().split('').reverse();
    const length = num.length;
    let result = '';

    for (let i = length; i > 0; i -= 1) {
        switch (i) {
            case 1:
                if (num[i - 1] !== '0') {
                    result += firstOrderNumbersMap[num[i - 1]];
                }
                break;
            case 2:
                if (num[i - 1] === '0') {
                    break;
                } else if (num[i - 1] === '1') {
                    result += tenNumbersMap[num[i - 2]] + ' ';
                    i -= 1;
                    break;
                } else {
                    result += secondOrderNumbersMap[num[i - 1]] + ' ';
                }
                break;
            case 3:
                if (num[i - 1] === '0') {
                    break;
                }
                result += firstOrderNumbersMap[num[i - 1]] + ' ' + bigNumbersMap[3] + ' ';
                if (num[i - 2] === '0' && num[i - 3] === '0') {
                    i -= 2;
                    break;
                }
                break;

        }
    }
    return result.trim();
};


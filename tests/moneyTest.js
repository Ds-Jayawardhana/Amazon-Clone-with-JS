import {formatCurrency} from '../Scripts/utils/money.js';



console.log('Test suite:FormatCurrency');

console.log('convert cents into dollars');

if (formatCurrency(2095)==='20.95'){
    console.log('passed');
} else {
    console.log('failed');
}

console.log('works with 0')

if(formatCurrency(0)=='0.00'){ss
    console.log('passed');
} else {
    console.log('failed');
}

console.log('rounds upto nearest cent')

if(formatCurrency(2000.5)==='20.01'){
    console.log('passed');
}else{
    console.log('failed')
}
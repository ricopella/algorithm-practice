'use strict';

/*

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

*/

function fearNotLetter(str) {
    let answerArray = [];

    [...str].forEach((x, i) => {
        answerArray.push(str.charCodeAt(i));
    });

    for (let i = 0; i < answerArray.length - 1; i++) {
        if ((answerArray[i] + 1) !== answerArray[i + 1]) {
            console.log("this one " + String.fromCharCode(answerArray[i] + 1));
            return String.fromCharCode(answerArray[i] + 1);
        }
    }
    console.log(undefined);
    return undefined;
}

fearNotLetter("abce") // should return "d".
fearNotLetter("abcdefghjklmno") // should return "i".
fearNotLetter("bcd") // should return undefined.
fearNotLetter("yz") // should return undefined.
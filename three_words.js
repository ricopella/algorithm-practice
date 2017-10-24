"use strict";

/*

You are given a string with words and numbers separated by whitespaces (one space).

The words contains only letters. You should check if the string contains three words in succession.

For example, the string "start 5 one two three 7 end" contains three words in succession.

*/

function threeWords(data) {

    let word = 0;
    const full = data.split(" ");

    for (let i = 0; i <= full.length; i++) {

        if (word >= 3) {
            console.log(true);
            return true;
        } else if (parseInt(full[i])) {
            word = 0;
        } else {
            word++;
        }
    }
    console.log(false);
    return false;
}

threeWords("Hello World hello");
"use-strict";

/*

You are given a chunk of text. Gather all capital letters in one word in the order that they appear in the text.
For example: text = "How are you? Eh, ok. Low or Lower? Ohhh.", if we collect all of the capital letters, we get the message "HELLO".

*/

function findMessage(data) {

    // split each work into array
    let newArr = data
        .replace(/[^a-zA-Z]/g, '')
        .split("");

    let answerArr = [];

    if (data === "") {
        return data = "";
    } else {

        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] === newArr[i].toUpperCase()) {
                answerArr.push(newArr[i]);
            }

        }
        answerArr = answerArr.length >= 1
            ? answerArr.join("")
            : "";

        // loop through to find capital letters & add to new array
        console.log(newArr);
        return answerArr;

    }
}

findMessage("HELLO WORLD");
findMessage("How are you? Eh, ok. Low or Lower? Ohhh.");
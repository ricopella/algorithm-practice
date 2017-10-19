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

    if (data === "") {
        return "";
    } else {

        let answerArr = newArr.filter((x) => x === x.toUpperCase())

        return answerArr = answerArr.length >= 1
            ? answerArr.join("")
            : "";
    }
}

findMessage("HELLO WORLD");
findMessage("How are you? Eh, ok. Low or Lower? Ohhh.");
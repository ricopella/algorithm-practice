"use-strict";

/*

You are given a chunk of text. Gather all capital letters in one word in the order that they appear in the text.
For example: text = "How are you? Eh, ok. Low or Lower? Ohhh.", if we collect all of the capital letters, we get the message "HELLO".

*/

function findMessage(data) {

    // split each work into array
    return data.replace(/[^A-Z]/g, '')

}

findMessage("HELLO WORLD");
findMessage("How are you? Eh, ok. Low or Lower? Ohhh.");
/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

let translatePigLatin = function(str) {

    let newStr = str.split('');

    if (newStr[0] === "a" || newStr[0] === "e" || newStr[0] === "o" || newStr[0] === "u" || newStr[0] === "i" || newStr[0] === "y") {
        newStr.push("w", "a", "y")
        newStr = newStr.join("");
        console.log(newStr);
        return newStr
    } else {
        for (let i = 0; i < newStr.length; i++) {
            if (newStr[i] === "a" || newStr[i] === "e" || newStr[i] === "o" || newStr[i] === "u" || newStr[i] === "i" || newStr[0] === "y") {
                let indi = newStr.indexOf(newStr[i]);
                let removed = newStr.splice(0, indi);
                newStr = newStr.join("");
                newStr += removed.join("");
                newStr += "ay";
                console.log(newStr);
                return newStr;
            }
        }
    }
}

translatePigLatin("consonant");
translatePigLatin("california"); // should return "aliforniacay".
translatePigLatin("paragraphs"); // should return "aragraphspay".
translatePigLatin("glove"); // should return "oveglay".
translatePigLatin("algorithm"); // should return "algorithmway".
translatePigLatin("eight"); // should return "eightway".
translatePigLatin("pgiot");

module.exports = translatePigLatin;
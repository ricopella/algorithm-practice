/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/


function confirmEnding(str, target) {
    var lastIt = str.length;
    var secondInLen = target.length;
    console.log("2nd arg length: " + secondInLen);
    console.log("length: " + lastIt);
    var last = str.substr(-secondInLen, lastIt - 1);
    console.log(last);
    // return str;
    if (last === target) {
        return true;
    } else {
        return false;
    }
}

confirmEnding("Bastian", "n"); // true
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); // false
confirmEnding("He has to give me a new name", "name"); // true
confirmEnding("Open sesame", "same") // true
/* Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is not a positive number. */

function repeatStringNumTimes(str, num) {
    var newstr = str;
    if (num <= 0) {
        return ""
    } else {
        for (var i = 0; i < num - 1; i++) {
            str += newstr
            console.log(i + ": " + str);
        }
        return str
    }
}

console.log(repeatStringNumTimes("abc", 3));
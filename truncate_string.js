/*

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

*/


function truncateString(str, num) {
    // console.log(str.length);
    if (str.length === num && str.length < num) {
        console.log("here");
        return str;
    } else if (str.length > num && num > 3) {
        console.log("here2");
        var newstr = str.slice(0, num - 3);
        console.log(newstr + "...");
        return newstr + "...";
    } else if (num <= 3) {
        console.log("here3");
        console.log(str);
        var newstr1 = str.slice(0, num);
        console.log(newstr1);
        return newstr1 + "...";
    } else {
        console.log("here4");
        return str;
    }
}

// truncateString("A-tisket a-tasket A green and yellow basket", 11); //A-tisket...
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); // should return "A-tisket a-tasket A green and yellow basket". 
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); // should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-", 1); // should return "A...". 
truncateString("Absolutely Longer", 2); // should return "Ab...".
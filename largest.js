function largestOfFour(data) {
    // console.log(data.length);
    var largest = [];
    var data2 = [];
    for (var i = 0; i <= 3; i++) {
        data2.push(data[i].sort((a, b) => a - b));
    }
    console.log(data2);
    for (var j = 0; j <= 3; j++) {
        largest.push(data2[j][data2.length - 1]);
    }

    // // You can do this!
    console.log(largest);

    return largest;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);

largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);

largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
]);
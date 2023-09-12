let arr = [
    5,
    1,
    2,
    3,
    4,
    1
]

let val = 5;

function findNumber(arr, val) {
    let answer = "NO";
    for (let i = 0; i < arr.length; i++) {

        console.log(parseInt(arr[i]), parseInt(val))
        if (parseInt(arr[i]) !== parseInt(val)) {
            console.log("NO")
            return answer = "NO"
        } else if (parseInt(arr[i]) === parseInt(val)) {
            console.log("YES")
            return answer = "YES"
        }
    }
}

findNumber(arr, val)
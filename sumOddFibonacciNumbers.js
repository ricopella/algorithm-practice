/**
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
 * 
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 * 
 * The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci
 *  sequence  * are 1, 1, 2, 3, 5 and 8.
 * 
 * For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
 * 
 */
function sumFibs(num) {

    const fibSeq = []
    let count = 0

    if (num === 1) {
        return 2
    }

    // create fibonacci sequence >= num
    while (num > count) {
        if (count === 0) {
            fibSeq.push(1, 1)
            count = 2
        } else {
            const newVal = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]
            fibSeq.push(newVal)
            count = newVal
        }
    }

    // if number is even, we need to pop off the last item from the seq
    if (num % 2 === 0) {
        fibSeq.splice(fibSeq.length - 1, 1)
    }

    const removeEvens = (item) => item % 2 !== 0
    const totalSequence = (acc, curr) => acc + curr

    // remove even numbers from sequence
    // total sequence
    return fibSeq.filter(removeEvens).reduce(totalSequence, 0);
}

sumFibs(1) // 2
sumFibs(1000) // 1785
sumFibs(4000000) // 4613732
sumFibs(4) // 5
sumFibs(75024) // 60696
sumFibs(75025) // 135721
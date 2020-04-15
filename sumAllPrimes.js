/**
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes
 * 
 * A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not * prime since it is divisible by 1, 2 and 4.
 * 
 * Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
 */
function sumPrimes(num) {
    // create array of prime numbers that are less than or equal to num
    let currVal = 1
    const primesInRange = []

    if (num === 1) {
        return 1
    }

    if (num === 2) {
        return 3
    }

    while (num >= currVal) {
        if (isPrime(currVal)) {
            primesInRange.push(currVal)
        }
        currVal += 1
    }
    // sum the primes
    return primesInRange.reduce((acc, curr) => curr + acc, 0);
}

function isPrime(num) {
    // must be greater than 1 and can't be even
    if (num <= 1) {
        return false
    }

    if (num === 2) {
        return true
    }

    // other than 2, all even numbers are not prime
    if (num % 2 !== 1) {
        return false
    }

    // must ONLY be divisible by 1 and itself, cant be divisible by another number
    for (let x = 2; x < num; x++) {
        if (num % x === 0) {
            return false;
        }
    }
    return true;
}

sumPrimes(10) // 17
sumPrimes(977) // 73156
function factorial(currentValue) {
    if (currentValue < 2) return 1
    return currentValue * factorial(currentValue - 1)
}


console.log(factorial(5))
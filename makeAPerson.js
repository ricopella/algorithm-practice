/**
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person
 * Fill in the object constructor with the following methods below:
 * 
 * getFirstName()
 * getLastName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(firstAndLast)
 * Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only 
 * available  * means of interacting with the object.
 */
var Person = function(firstAndLast) {
    const nameArr = firstAndLast.split(' ')
    let firstName = nameArr[0] || undefined
    let lastName = nameArr[1] || undefined

    // Complete the method below and implement the others similarly
    this.getFullName = function() {
        return `${firstName} ${lastName}`;
    };

    this.getLastName = function() {
        return lastName
    }

    this.getFirstName = function() {
        return firstName
    }

    this.setFirstName = function(name) {
        if (name) {
            firstName = name
        }
    }

    this.setLastName = function(name) {
        if (name) {
            lastName = name
        }
    }

    this.setFullName = function(name) {
        if (name) {
            const newArr = name.split(' ')
            if (newArr[0]) {
                firstName = newArr[0]
            }
            if (newArr[1]) {
                lastName = newArr[1]
            }
        }
    }


    return `${firstName} ${lastName}`;
};

var bob = new Person('Bob Ross');
Object.keys(bob).length // 6.
bob instanceof Person // true.
bob.firstName // undefined.
bob.lastName // undefined.
bob.getFirstName() // "Bob".
bob.getLastName() // "Ross".
bob.getFullName() // "Bob Ross".
bob.getFullName() // "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName() // "Haskell Curry" after bob.setLastName("Curry").
bob.getFullName() // "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName() // "Haskell" after bob.setFullName("Haskell Curry").
bob.getLastName() // "Curry" after bob.setFullName("Haskell Curry").
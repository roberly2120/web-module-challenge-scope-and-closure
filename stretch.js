var addSix = createBase(6)

// addSix(10); returns 16
// addSix(21); returns 27

function createBase(base) {
    return function(start) {
       start + base
    }
}
console.log(addSix(10));
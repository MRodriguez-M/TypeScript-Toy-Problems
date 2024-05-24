// Invert all key/value pairs in a given object.
const invertValues = (obj: object): object => {
    let invertObj: object = {};

    for(const val in obj) {
        invertObj[val] = obj[val];
    }

    return invertObj;
}
console.log(invertValues({1: 'a', 2: 'b', 3: 'c'}))


// Count all occurrences of a value in an array.
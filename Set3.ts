// Invert all key/value pairs in a given object.
const invertValues = (obj: object): object => {
    let invertObj: object = {};

    for(const val in obj) {
        invertObj[val] = obj[val];
    }

    return invertObj;
}
console.log(invertValues({1: 'a', 2: 'b', 3: 'c'}))


// Count all occurrences of a specified value in an array.
const allOccurrences = (arr: (string | number)[], val: (string | number)): number => {
    let count: number = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            count++;
        }
    }

    return count;
}
console.log(allOccurrences([1, 1, 2, 1, 2, 3], 1))
console.log(allOccurrences([1, 'no', 'no', 'yes', 2, 3], 'no'))
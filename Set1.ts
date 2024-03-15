// Copy an array a specified number of times. If there is no second argument, copy array twice.
const copyArray = (arr: number[], num?: number): number[] => {
    let tempArr: number[] = [];
    let multipliedArr: number[] = [];

    if(typeof num === 'undefined') {
        for(let i = 1; i <= 2; i++) {
            multipliedArr = tempArr.concat(arr);
            tempArr = multipliedArr;
        }
    }
    else if(num !== 0) {
        for(let i = 1; i <= num; i++) {
            multipliedArr = tempArr.concat(arr);
            tempArr = multipliedArr;
        }
    }

    return multipliedArr;
}


// Get every nth element in array. Default nth value is 1.
const nthElement = (arr: number[], num?: number): number[] => {
    let nthArr: number[] = [];

    if(typeof num === 'undefined' || num === 1) {
        nthArr = arr;
    }
    else if(num !== 0) {
        for(let i = num-1; i < arr.length; i += num) {
            nthArr.push(arr[i]);
        }
    }

    console.log(nthArr);
    return nthArr;
}
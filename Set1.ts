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
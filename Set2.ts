// Calculate the days left until New Year. Date is accepted in Date() object and string format 'DD.MM.YYYY'.
const daysToNewYear = (date: Date | string): number => {
    let daysLeft: number = 0;
    const currentDate: Date = new Date();
    const newYear: Date = new Date(currentDate.getFullYear()+1, 0, 1);

    if(typeof date === 'string') {
        let dateArr: string[] = date.split('.');
        let validDate: string = dateArr[1].concat('-', dateArr[0], '-', dateArr[2]);
        date = validDate;
    }

    const inputDate: Date = new Date(date);
    let timeDifference: number = newYear.getTime() - inputDate.getTime();
    daysLeft = timeDifference / (1000 * 3600 * 24);

    return daysLeft;
}


// Change the position of the first and last characters in the given string.
const lastToFirst = (str: string): string => {
    let flipStr: string = '';

    if(str.length <= 1) {
        flipStr = str;
    }
    else if(str.length === 2) {
        flipStr = str.charAt(1).concat(str.charAt(0));
    }
    else {
        let middleStr: string = str.substring(1, str.length-1);
        flipStr = str.charAt(str.length-1).concat(middleStr, str.charAt(0));
    }

    return flipStr;
}
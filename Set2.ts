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

    console.log(daysLeft)
    return daysLeft;
}
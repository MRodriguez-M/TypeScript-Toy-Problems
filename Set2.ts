// Calculate the days left until New Year. Date is accepted in Date() object and string format 'DD.MM.YYYY'.
const daysToNewYear = (date: Date | string): number => {
    let daysLeft: number = 0;
    const currentDate: Date = new Date();
    const inputDate: Date = new Date(date);
    let newYear: Date = new Date(currentDate.getFullYear()+1, 0, 1);
    
    let timeDifference: number = newYear.getTime() - inputDate.getTime();
    daysLeft = timeDifference / (1000 * 3600 * 24);

    console.log(currentDate)
    return daysLeft;
}

daysToNewYear(new Date(2024, 2, 21));
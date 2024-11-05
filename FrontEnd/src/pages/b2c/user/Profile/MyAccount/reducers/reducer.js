import {SET_DAY} from "../constants/constants";

export const initState = {
    day: 0,
    days: Array.from({ length: 31 }, (_, i) => i + 1)
}

const reducer = (state, action) => {
    let newState;
    let day;
    switch (action.type) {
        case SET_DAY:
            newState = state;
            const {month, year} = action.payLoad;
            const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
            if(month === 2) {
                day = isLeapYear(year) ? 29 : 28;
            } else if([4, 6, 9, 11].includes(month)) {
                day = 30;
            } else{
                day = 31
            }
            newState.days = Array.from({ length: day }, (_, i) => i + 1);
            break;
        default:
            throw new Error('Wrong action');
    }
    // console.log(newState);
    return newState;
}

export default reducer;
import {SET_DAY} from "../constants/constants";

export const setDay = (month, year) => {
    return {
        type: SET_DAY,
        payLoad: {
            month, year
        },
    }
}
import {GET_STATUS_DETAIL, UPDATE_STATUS_DETAIL} from '../constansts/constansts';

export const getStatusDetail = payLoad => {
    return {
        type: GET_STATUS_DETAIL,
        payLoad
    }
}

export const updateStatusDetailData = payLoad => {
    return {
        type: UPDATE_STATUS_DETAIL,
        payLoad
    }
}
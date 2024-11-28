import {SET_PRODUCT, GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT} from '../constansts/constansts';

export const initState = {
    product: {},
    productData: [],
}

const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case GET_PRODUCTS:
            newState = {
                ...state,
                productData: [...action.payLoad]
            }
            break;
        default:
            throw new Error(`Unknown action type ${action.type}`);
    }

    return newState;
}

export default reducer;
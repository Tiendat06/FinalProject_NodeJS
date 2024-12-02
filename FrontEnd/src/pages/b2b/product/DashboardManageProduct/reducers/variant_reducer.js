import {
    GET_PRODUCTS_VARIANT,
    SET_PRODUCTS_VARIANT,
    ON_CHANGE_VARIANT_DATA,
    UPDATE_VARIANT_DATA, ADD_VARIANT_DATA, DELETE_VARIANT_DATA
} from '../constansts/constansts';

export const initVariantState = {
    productVariant: {},
    productVariantData: [],
}

const variant_reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case GET_PRODUCTS_VARIANT:
            newState = {
                ...state,
                productVariantData: [...action.payLoad]
            }
            break;
        case SET_PRODUCTS_VARIANT:
            newState = {
                ...state,
                productVariant: {...action.payLoad}
            }
            break;
        case ON_CHANGE_VARIANT_DATA:
            newState = {
                ...state,
                productVariant: {...state.productVariant, ...action.payLoad}
            }
            break;
        case UPDATE_VARIANT_DATA:
            let newUpdatedData = [...state.productVariantData];
            newState = {
                ...state,
                productVariantData: newUpdatedData.map(item =>
                    item._id === action.payLoad._id
                        ? {...item, ...action.payLoad} : item
                )
            }
            break;
        case ADD_VARIANT_DATA:
            newState = {
                ...state,
                productVariantData: [...state.productVariantData, action.payload]
            }
            break;
        case DELETE_VARIANT_DATA:
            let newDeletedData = [...state.productVariantData];
            newDeletedData = newDeletedData.filter(item => item._id !== action.payLoad._id);
            newState = {
                ...state,
                productVariantData: newDeletedData
            }
            break;
        default:
            throw new Error(`Unknown action type ${action.type}`);
    }
    console.log(newState);
    return newState;
}

export default variant_reducer;
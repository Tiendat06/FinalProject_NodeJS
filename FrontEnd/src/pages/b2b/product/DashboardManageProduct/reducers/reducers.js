import {SET_PRODUCT, GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, ON_CHANGE_DATA} from '../constansts/constansts';

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
        case ON_CHANGE_DATA:
            newState = {
                ...state,
                product: {...state.product, ...action.payLoad}
            }
            break;
        case SET_PRODUCT:
            newState = {
                ...state,
                product: {...action.payLoad}
            }
            break;
        case UPDATE_PRODUCT:
            const newProductUpdate = [...state.productData];

            newState = {
                ...state,
                productData: newProductUpdate.map(item =>
                    item._id === action.payLoad._id
                        ? {...item, ...action.payLoad} : item
                )
            };
            break;
        case ADD_PRODUCT:
            newState = {
                ...state,
                productData: [...state.productData, action.payLoad],
            }
            break;
        case DELETE_PRODUCT:
            let newDeletedItems = [...state.productData];
            let deletedData = newDeletedItems.filter(item => item._id !== action.payLoad._id);
            newState = {
                ...state,
                productData: deletedData,
            }
            break;
        default:
            throw new Error(`Unknown action type ${action.type}`);
    }
    console.log(newState);
    return newState;
}

export default reducer;
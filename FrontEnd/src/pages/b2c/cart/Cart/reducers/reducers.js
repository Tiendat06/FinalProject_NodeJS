import {GET_CART, DELETE_CART, UPDATE_CART, SET_QUANTITY, SET_CART, SET_CART_LIST} from '../constansts/constansts';

export const initState = {
    cart: {},
    cartList: []
}

function reducers(state, action) {
    let newState;
    // console.log(action.type);
    switch (action.type) {
        case GET_CART:
            newState = {
                ...state,
                cartList: [...action.payLoad]
            }
            break;
        case SET_QUANTITY:
            let newCart = [...state.cartList];
            newCart = newCart.map(item =>
                item['_id'] === action.payLoad._id
                ? { ...item, quantity: Math.max(1, action.payLoad.quantity) }
                : item);
            newState = {
                ...state,
                cartList: newCart
            }
            break;
        case SET_CART:
            newState = {
                ...state,
                cart: {...action.payLoad}
            }
            break;
        case DELETE_CART:
            let newDeletedCart = [...state.cartList];
            newDeletedCart = newDeletedCart.filter(item => item._id !== action.payLoad._id);

            newState = {
                ...state,
                cartList: newDeletedCart
            }
            break;
        case SET_CART_LIST:
            newState = {
                ...state,
                cartList: []
            }
            break;
        default:
            throw new Error('Action is not supported!');
    }
    return newState;
}

export default reducers;
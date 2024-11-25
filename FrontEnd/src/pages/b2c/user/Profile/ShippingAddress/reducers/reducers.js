import {ADD_ADDRESS, GET_ADDRESS, SET_ADDRESS, UPDATE_ADDRESS, DELETE_ADDRESS, ON_CHANGE_DATA} from '../constants/constants'

export const initialState = {
    address: {
        // is_default: false
    },
    addresses: []
}

const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case ON_CHANGE_DATA:
            const newAddress = {...state.address, ...action.payLoad}
            newState = {
                ...state,
                address: newAddress
            }
            break;
        case SET_ADDRESS:
            newState = {
                ...state,
                address: {...action.payLoad}
            }

            break;
        case GET_ADDRESS:
            newState = {
                ...state,
                addresses: [...action.payLoad]
            }
            break;
        case ADD_ADDRESS:
            const newAddressAdd = [...state.addresses];
            let addNewAddress = newAddressAdd;

            if (action.payLoad.is_default) {
                addNewAddress = newAddressAdd.map(item => ({
                    ...item,
                    is_default: false
                }));
            }
            newState = {
                ...state,
                addresses: [...addNewAddress, action.payLoad]
            };
            break;
        case UPDATE_ADDRESS:
            const newAddressUpdate = [...state.addresses];
            let updateNewAddress = newAddressUpdate;

            if (action.payLoad.is_default) {
                updateNewAddress = newAddressUpdate.map(item => ({
                    ...item,
                    is_default: false
                }));
            }
            newState = {
                ...state,
                addresses: updateNewAddress.map(item =>
                    item._id === action.payLoad._id
                    ? {...item, ...action.payLoad} : item
                )
            };
            break;
        case DELETE_ADDRESS:
            if (action.payLoad.is_default) {
                newState = {
                    ...state
                }
            } else{
                let newAddressDelete = [...state.addresses];
                newAddressDelete = newAddressDelete.filter(item => item._id !== action.payLoad._id);
                newState = {
                    ...state,
                    addresses: newAddressDelete
                }
            }
            // console.log(newState);
            break;
        default:
            throw new Error('Invalid action type');
    }

    return newState;
}

export default reducer;
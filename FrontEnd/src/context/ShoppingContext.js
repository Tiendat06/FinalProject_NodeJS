import {createContext, useContext, useState} from 'react';

const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
    const [userData, setUserData] = useState({});
    const [accountData, setAccountData] = useState({});

    return (
        <ShoppingContext.Provider value={{ userData, setUserData, accountData, setAccountData }}>
            {children}
        </ShoppingContext.Provider>
    )
}

export const useShoppingContext = () => useContext(ShoppingContext);
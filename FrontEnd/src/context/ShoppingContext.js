import {createContext, useContext, useEffect, useLayoutEffect, useState} from 'react';

const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || {});
    const [accountData, setAccountData] = useState(JSON.parse(localStorage.getItem('userData')) || {});

    useLayoutEffect(() => {
        if(JSON.parse(localStorage.getItem('userData'))){
            setUserData(JSON.parse(localStorage.getItem('userData')));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);

    return (
        <ShoppingContext.Provider value={{ userData, setUserData, accountData, setAccountData }}>
            {children}
        </ShoppingContext.Provider>
    )
}

export const useShoppingContext = () => useContext(ShoppingContext);
import {createContext, useContext, useEffect, useLayoutEffect, useState} from 'react';

const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || {});
    const [accountData, setAccountData] = useState(JSON.parse(localStorage.getItem('userData')) || {});

    useLayoutEffect(() => {
        const api_url = process.env.REACT_APP_API_URL;
            fetch(`${api_url}/log/get-user-data`, {
                method: 'GET',
                credentials: "include"
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status) setUserData(data.data);
                })
                .catch(err => console.log(err));
    }, [])

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
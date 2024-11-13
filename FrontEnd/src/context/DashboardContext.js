import {createContext, useContext, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const currentPath = useLocation().pathname;
    const [currentLocation, setCurrentLocation] = useState(currentPath);

    const [dashBoardSubLink, setDashBoardSubLink] = useState(localStorage.getItem('dashboardSubItems') || null);
    useEffect(() => {
        setCurrentLocation(currentPath);
    }, [currentPath]);

    useEffect(() => {
        localStorage.setItem('dashboardSubItems', dashBoardSubLink);
        // setDashBoardSubLink(dashBoardSubLink);
    }, [dashBoardSubLink]);
    return (
        <DashboardContext.Provider value={{ currentLocation, dashBoardSubLink, setDashBoardSubLink }}>
            {children}
        </DashboardContext.Provider>
    );
}

export const useDashboardContext = () => useContext(DashboardContext);
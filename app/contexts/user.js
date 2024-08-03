"use client";
import { createContext, useContext, useEffect, useState } from 'react';
import { fetchProfile } from '../helpers/backend';
import { useRouter } from 'next/navigation';
import { message } from 'antd';

const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [userIn, setUserIn] = useState({});
    console.log("🚀 ~ UserContextProvider ~ userIn:", userIn)
    const [user, setLoggedInUser] = useState({});
    const [userLoading, setUserLoading] = useState(true); // Added userLoading state
    let router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchProfile().then((data) => {
                if (data.error === true) {
                    localStorage.removeItem('token');
                    setLoggedInUser({});
                } else {
                    setLoggedInUser(data?.data?.user);
                }
                setUserLoading(false); // Set userLoading to false after fetching user data
            });
        } else {
            setUserLoading(false); // Set userLoading to false if there is no token
        }
    }, [userIn]);

    const logOut = () => {
        localStorage.removeItem('token');
        setLoggedInUser(null);
        message.success('You have successfully logged out!!');
        router.push('/login');
    };

    return (
        <UserContext.Provider value={{ user, logOut, setLoggedInUser, userIn, setUserIn, userLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
export default UserContext;

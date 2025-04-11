import { UserProps } from "./types/user";
import Search from "../components/Search";

import { useState } from "react";

import Error from "../components/Error";

import  User from "../components/User";


import classes from './Home.module.css';

const Home = () => {
    const [users, setUsers] = useState <UserProps | null>(null);
    const [error, setError] = useState(false);
    const loadUsers = async (userName: string ) => {
        setError(false);
        setUsers(null);
        

        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();

        if (res.status === 404 ){
        setError(true);
        return;
            
        }

        
        const {  name, avatar_url, bio } = data;

        const userData: UserProps = {
            
            name,            
            avatar_url,
            bio,
        };

        setUsers(userData);
    }

    return (
        <div className={classes.container} >
        <Search loadUsers={loadUsers} />
        {users && (
            <div>
               <User {...users} />
               
            </div>
        )}
        {error && <Error />}
        
        </div>
    );
};

export default Home;
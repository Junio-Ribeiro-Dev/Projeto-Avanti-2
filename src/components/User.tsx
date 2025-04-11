import { UserProps } from "../pages/types/user";

import classes from './User.module.css';



const User = ({name, avatar_url, bio}: UserProps) => {
    
    return (
        
        
        <div className={classes.user}>
            <img src={avatar_url} alt={name} />
            <div className={classes.dados}>
            <h2>{name}</h2>
            <p>{bio}</p>    
            </div>  
        </div>
        
    );
};

export default User;
type SearchProps = {
    loadUsers: (userName: string) => Promise<void>;
}
import { useState } from "react";
import { BsSearch } from "react-icons/bs";


import classes from './Search.module.css'
import logo from '../img/pf-git.png'
const Search = ({loadUsers}: SearchProps) => {

    const [userName, setUserName] = useState('');

    return (
        <div className={classes.search}>
            <img className={classes.logo} src={logo} alt="logo" />
            <div className={classes.search_container}> 
                <input type="text" placeholder="Digite um usuário do GitHub" onChange={(e) => setUserName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && loadUsers(userName)}
                />
                <button onClick={() => loadUsers(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    );
}

export default Search
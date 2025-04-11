

import classes from './Error.module.css'
const Error = () => {
    return (
        <div className={classes.error}>
        <p>Nenhum perfil foi encontrado com esse nome de usuário. <br />Tente Novamente </p>
        </div>
    )
}
export default Error
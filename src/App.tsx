import { Outlet } from "react-router-dom"

import classes from './App.module.css'

import ellipse1 from './img/Ellipse 1.svg'
import ellipse2 from './img/Ellipse 2.svg'

import camada from './img/Camada_1.svg'
function App() {


  return (
    <div className={classes.app}>
      <img className={classes.e1}  src={ellipse1} alt="elipse" />
      <img className={classes.e2}  src={ellipse2} alt="elipse2" />
      <img className={classes.camada}  src={camada} alt="camada" />
    <Outlet />
    </div>
  )
}

export default App

import './Ufscar.css'
import '../Logos.css'

import logoufscar from '../../img/ufscar.png'
import Footer from '../Footer/Footer'

export default function Ufscar() {
    return (
        <>
        <div className="ufscar">
            <img className="logo-ufscar" src={logoufscar}/>
            <Footer/>
        </div>
        </>
    )
}
import './Usp.css'
import '../Logos.css'

import logousp from '../../img/usp.png'
import Footer from '../Footer/Footer'

export default function Usp() {
    return (
        <>
        <div className="usp">
        <img className="logo-usp" src={logousp}/>
            <Footer/>
        </div>
        </>
    )
}
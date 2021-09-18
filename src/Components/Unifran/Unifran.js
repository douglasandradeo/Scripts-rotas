import './Unifran.css'
import '../Logos.css'

import logounifran from '../../img/unifran.png'
import Footer from '../Footer/Footer'

export default function Unifran() {
    return (
        <>
        <div className="unifran">
            <img className="logo-unifran" src={logounifran}/>
            <Footer/>
        </div>
        </>
    )
}
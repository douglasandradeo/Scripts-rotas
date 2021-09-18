import './Fafibe.css'
import '../Logos.css'

import logofafibe from '../../img/fafibe.png'
import Footer from '../Footer/Footer'


export default function Fafibe() {
    return (
        <>
        <div className="fafibe">
        <img className="logo-fafibe" src={logofafibe}/>
            <Footer/>
        </div>
        </>
    )
}
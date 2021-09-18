import './Fatec.css'
import '../Logos.css'

import { Link } from 'react-router-dom'

import logofatec from '../../img/fatec.png'
import Footer from '../Footer/Footer'

export default function Fatec() {
    return (
        <>
        <div className="fatec">
            <img className="logo-fatec" src={logofatec}/>

            <Footer/>
        </div>
        </>
    )
}
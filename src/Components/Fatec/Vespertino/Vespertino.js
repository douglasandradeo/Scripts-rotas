import '../../Logos.css'
import '../Matutino/Matutino.css'

import { Link } from 'react-router-dom'

import logofatec from '../../../img/fatec.png'

export default function Vespertino() {
    return (
        <>
        <div className="fatec1">
            <img className="logo-fatec" src={logofatec}/>

            <h1>Vespertino</h1>
        </div>
        
        <div className="footersubitem">
            <h2><Link to="/fatec">Voltar ao menu anterior</Link></h2>
            <h3><Link to="/">Voltar para página principal</Link></h3>
        </div>
        
        </>
    )
}
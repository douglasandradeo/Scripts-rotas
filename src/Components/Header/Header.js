import { Link } from 'react-router-dom'
import './Header.css'


export default function Header() {
    return (
        <>
        
        <nav className="menu">
            <ul>
                <li><Link to="/">Home</Link></li>

                <li><Link to="/fafibe">Fafibe</Link></li>

                <li><Link to="/fatec">Fatec</Link>
                    <nav className="submenu-1">
                        <ul>
                            <li><Link to="/fatec/matutino">Matutino</Link></li>
                            <li><Link to="/fatec/vespertino">Vespertino</Link></li>

                            <li className="noturno"><Link to="/fatec/noturno">Noturno</Link>
                                <nav className="submenu-2">
                                    <ul>
                                        <li>GE</li>
                                        <li>GPI</li>
                                        <li>RH</li>
                                        <li className="ads">ADS
                                            <nav className="submenu-3">
                                                <ul>
                                                    <li>Lógica</li>
                                                    <li>Cálculo</li>
                                                    <li>Sistema Operacional</li>
                                                    <li>Arquitetura</li>
                                                    <li>Programação Web</li>
                                                </ul>
                                            </nav>
                                        </li>
                                    </ul>
                                </nav>
                            </li>

                            <li><Link to="/fatec/novotec">Novotec</Link></li>
                            <li><Link to="/fatec/especializacao">Especialização</Link></li>
                        </ul>
                    </nav>
                </li>

                <li><Link to="/ufscar">Ufscar</Link></li>

                <li><Link to="/unifran">Unifran</Link></li>

                <li><Link to="/usp">USP</Link></li>
            </ul>
        </nav>
        
        </>
    )
}
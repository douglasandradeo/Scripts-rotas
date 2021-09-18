import './Home.css'

import smile from '../../img/smile.png'
export default function Home() {
    return (
        <>

        <div className="home">
            <img className="smile" src={smile}/>

            <h1>Seja bem-vindo!</h1>
            <h3>Utilize o menu superior para navegar na página :)</h3>
        </div>
        </>
    )
}

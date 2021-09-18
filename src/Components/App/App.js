import './App.css';

import Header from "../Header/Header"

import Home from '../Home/Home'
import Fafibe from '../Fafibe/Fafibe'
import Fatec from '../Fatec/Fatec'
  import Matutino from '../Fatec/Matutino/Matutino'
  import Vespertino from '../Fatec/Vespertino/Vespertino'
  import Noturno from '../Fatec/Noturno/Noturno'
  import Novotec from '../Fatec/Novotec/Novotec'
  import Especializacao from '../Fatec/Especializacao/Especializacao'
import Ufscar from '../Ufscar/Ufscar'
import Unifran from '../Unifran/Unifran'
import Usp from '../Usp/Usp'

import { Route, Switch } from 'react-router'

function App() {
  return (
    <div className="App">

      <Header/>

      <main>
          <Switch>
            <Route exact path="/" render= { (props) => <Home />}></Route>
            <Route exact path="/fafibe" render= { (props) => <Fafibe />}></Route>
            <Route exact path="/fatec" render= { (props) => <Fatec />}></Route>
              <Route exact path="/fatec/matutino" render= { (props) => <Matutino />}></Route>
              <Route exact path="/fatec/vespertino" render= { (props) => <Vespertino />}></Route>
              <Route exact path="/fatec/noturno" render= { (props) => <Noturno />}></Route>
              <Route exact path="/fatec/novotec" render= { (props) => <Novotec />}></Route>
              <Route exact path="/fatec/especializacao" render= { (props) => <Especializacao />}></Route>
            <Route exact path="/Ufscar" render= { (props) => <Ufscar />}></Route>
            <Route exact path="/Unifran" render= { (props) => <Unifran />}></Route>
            <Route exact path="/Usp" render= { (props) => <Usp />}></Route>
          </Switch>
        </main>
      
    </div>
  );
}

export default App;

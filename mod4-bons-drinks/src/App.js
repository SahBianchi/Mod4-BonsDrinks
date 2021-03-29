import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Componentes/header/Header.jsx';
import Drinks from './Componentes/drinks/Drinks';
import SobreNos from './Componentes/sobre/SobreNos';
import Home from './Componentes/home/Home';
import NossoTime from './Componentes/nossoTime/NossoTime';
import Contato from './Componentes/contato/Contato';
import Footer from './Componentes/footer/Footer.jsx';


function App() {
  return (
    <div className="app">
      <Router>
       <header className="headerApp">
        <Header/>
       </header>

      <main className="mainApp">
      <Switch>
      <Route path="/drinks">
          <Drinks/>
        </Route>

      <Route path="/sobreNos">
         <SobreNos/>
        </Route>

        <Route exact path="/">
         <Home/>
        </Route>

        <Route path="/nossoTime">
         <NossoTime/>
        </Route>

        <Route path="/contato">
          <Contato/>
        </Route>
      </Switch>
      </main>


       <footer className="footerApp">
         <Footer/>

       </footer>
      </Router>
      
      
     
    </div>
  );
}

export default App;

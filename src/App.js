import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

 //Páginas
import Inicio from './view/login';
import usuarioNovo from './view/NovoUsuario/index';
import senha from './view/recuperarSenha/index';

function App(){
  return(
      <Router>
   
        <Route exact path='/' component={Inicio} />
        <Route exact path='/novo-usuario' component={usuarioNovo} />
        <Route exact path='/recuperar-senha' component={senha} />
    
      </Router>
  )
}

export default App;


import { Component } from 'react';
import './App.css';
import FormCadastro from './components/FormularioCadastro';

import ListadeNotas  from './components/ListadeNotas/ListadeNotas';


class App extends Component {
 render(){
  return (
    <section className="conteudo">
    <FormCadastro />
    <ListadeNotas />
    </section>
);
 }
}

export default App;

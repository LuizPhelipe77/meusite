import React, {Component} from "react";
import './estilo.css'

class App extends Component{

    constructor(props){
        super(props);
        this.state= {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = ['O "não" está garantido, mas ainda dá pra correr atrás da humilhação.', 'Se está difícil hoje, lembre-se: sempre dá pra piorar.', 'Insista, persista, desista. Aceite o ciclo natural da vida.', 'Sempre há luz no fim do túnel, mas é o trem vindo na sua direção.', 'Se a vida te der limões, faça uma cara feia e aceite que vai ser azedo mesmo.',  'O importante é competir... E perder com estilo.', 'Nada como acordar motivado para vencer! Nunca aconteceu comigo, mas deve ser ótimo. Bom dia!', 'Ultimamente tenho trabalhado de forma culposa: quando não há intenção de trabalhar.' , 'Por motivos alheios à minha vontade, estou indo trabalhar.', 'O tempo muda tudo, menos a minha capacidade de ser trouxa', 'Manda quem pode. Obedece quem tem boletos pra pagar.', 'Na minha situação atual, se eu for cortar uma cebola, é ela que chora.']
    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + '" ';
        this.setState(state)
    }

    render(){
        return(
            <div className="container">
                <img src={require('./imagem/biscoito.png')}  className="img"/>
                <Botao nome="abrir biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        )
    }
}


export default App;
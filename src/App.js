import React, {Component} from 'react';
import './Card.css';
import './App.css';
import Card from './Card';

class App extends Component {

    constructor() {
        super();
        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        fetch("/characters").then((resp) => {
            return resp.json();
        }).then((characters) => {
            console.log(characters);
            this.setState(() => {
                return {characters: characters};
            })
        }).catch(console.error)
    }

    render() {
        return (

            <React.Fragment>
                <page size="A4">
                {
                    this.state.characters.map((character) => (

                        <Card character={character}/>

                    ))

                }
                </page>
            </React.Fragment>

        );
    }
}

export default App;

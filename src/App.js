import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
    state = {
        characters: [
            {
                name: 'Mathias',
                job: 'IT',
            },
            {
                name: 'kasper',
                job: 'Something',
            }, 
            {
                name: 'Benjamin',
                job: 'Nothing',
            }
        ],
    }

    removeCharacter = index => {
        const { characters } = this.state 
        console.log("hej")
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        });
    }

    render() {
        const { characters } = this.state
      
        return (
          <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
          </div>
        )
      }
}





export default App
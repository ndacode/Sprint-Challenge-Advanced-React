import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerCard from './components/PlayerCard';


class App extends React.Component {

    constructor (){
      super();
      this.state={
        player: [],
      }
    }
    
    componentDidMount() {
      axios
        .get('http://localhost:5000/api/players')
        .then(res => {
          console.log(res.data)
          this.setState({
            player: res.data
          });
        })
        .catch(err => {
          console.log('The data was not returned', err.response);
        })
    }

    render() {
      return(
      <>
        <div>
        {this.state.player.map(player =>  <PlayerCard
          key={player.id}
          rank={`${player.id + 1}`}
          name={player.name}
          country={player.country}
          />
      )}
      </div>
    </>
      )
    }
  }



export default App;

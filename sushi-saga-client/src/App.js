import React, { Component } from 'react';

import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

class App extends Component {

  state = {
    eatenSushis: [],
    wallet: 100,
    moneySpent: 0
  }

  amIBroke = sushi => {
    if (sushi.price > this.state.wallet){
      return true
    } else {
      this.setState({
        eatenSushis: [...this.state.eatenSushis, sushi],
        wallet: (this.state.wallet - sushi.price),
        moneySpent: (this.state.moneySpent + sushi.price)
      })
      return false
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer amIBroke={this.amIBroke} eatenSushis={this.state.eatenSushis} />
        <Table eatenSushis={this.state.eatenSushis} wallet={this.state.wallet} />
      </div>
    );
  }
}

export default App;

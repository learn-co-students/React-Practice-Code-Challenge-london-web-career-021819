import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    index: 0,
    money: 100,
    eatenSushi: []
  }

  componentDidMount = () => {
    this.getAllSushi()
  }

  getAllSushi = () => {
    return fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({
        allSushi: data
      }))

  }

  moreSushi = () => {
    if (this.state.index === 96) {
      this.setState({
        index: 0
      })
    } else {
      this.setState({
        index: this.state.index + 4
      })
    }

  }

  eatSushi = (sushi) => {
    if (this.state.money > sushi.price) {
      this.setState({
        money: this.state.money - sushi.price,
        eatenSushi: [...this.state.eatenSushi, sushi]
      })
    }
    else { alert("Not enough cash!") }
  }

  render() {

    const { index, money, eatenSushi } = this.state

    let nextFour = this.state.allSushi.slice(index, index + 4)

    return (
      <div className="app">
        <SushiContainer fourSushi={nextFour} moreSushi={this.moreSushi} eatSushi={this.eatSushi} eatenSushi={eatenSushi}/>
        <Table money={money} eatenSushi={eatenSushi} />
      </div>
    );
  }
}

export default App;
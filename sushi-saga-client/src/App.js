import React, { Component } from 'react'
import SushiContainer from './containers/SushiContainer'
import Table from './containers/Table'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    lastIndexShown: 0,
    money: 100,
    eatenSushi: []
  }

  componentDidMount () {
    fetch(API)
      .then(res => res.json())
      .then(sushi => this.setState({sushi}))
  }

  eatSushi = sushi => {
    this.setState({
      money: this.state.money - sushi.price,
      eatenSushi: [...this.state.eatenSushi, sushi]
    });
  }

  nextSushi = () => {
    if (this.state.lastIndexShown + 4 > this.state.sushi.length - 4) {
      this.setState({
        lastIndexShown: 0
      })
    } else {
      this.setState({
        lastIndexShown: this.state.lastIndexShown + 4
      });
    }
  }

  render() {

    const displayedSushi = this.state.sushi.slice(this.state.lastIndexShown, this.state.lastIndexShown + 4)

    return (
      <div className="app">
        <SushiContainer sushi={displayedSushi} nextSushi={this.nextSushi} eatSushi={this.eatSushi} money={this.state.money} eatenSushi={this.state.eatenSushi}/>
        <Table money={this.state.money} eatenSushi={this.state.eatenSushi}/>
      </div>
    )
  }
}

export default App

import React, {Component} from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    iteration: 1,
    money: 100,
    plates: []
  }

  render() {
    return (<div className="app">
      <form onSubmit={this.addCash}>
        <input type="number" min="0" name="cash"></input>
        <button>Add Money</button>
      </form>
      {this.state.sushi.length !== 0 && <SushiContainer sushi={this.fourSushi()} next={this.nextIteration} changeMoney={this.changeMoney} plates={this.state.plates}/>}
      <Table money={this.state.money} plates={this.state.plates} />
    </div>);
  }

  componentDidMount = () => {
    fetch(API).then(res => res.json()).then(sushi => this.setState({sushi}))
  }

  fourSushi = () => {
    let four = []
    for (let x = 4; x > 0; x--) {
      four.push(this.state.sushi[(this.state.iteration * 4) - x])
    }
    return four
  }

  nextIteration = () => {
    this.state.iteration < 25 && this.setState({
      iteration: this.state.iteration + 1
    })
    this.state.iteration === 25 && this.setState({
      iteration: 1
    })
  }

  changeMoney = (price, id) => {
    if (this.state.money - price >= 0) {
      this.setState({
        money: this.state.money - price,
        plates: [...this.state.plates, id]
      })
    }
  }

  addCash = (e) => {
    e.preventDefault()
    this.setState({
      money: this.state.money + parseInt(e.target.cash.value, 10)
    })
  }
}

export default App;

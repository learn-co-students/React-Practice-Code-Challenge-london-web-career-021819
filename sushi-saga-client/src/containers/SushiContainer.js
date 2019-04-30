import React, { Component, Fragment } from 'react'

import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const URL= 'http://localhost:3000/sushis'

export default class SushiContainer extends Component{

  state = {
    sushis: [],
    sushiPosition: 0
  }

componentDidMount(){
    fetch(URL)
      .then(resp => resp.json())
      .then(sushis => this.setState({sushis}))
  }

  filterSushi = () => {
    let sushiPosition = this.state.sushiPosition
    let nextPosition = sushiPosition + 4
    return this.state.sushis.slice(sushiPosition, nextPosition )
  }

  onButtonClick = () => {
    if (this.state.sushiPosition < 95) {
      let nextPosition = this.state.sushiPosition + 4
      this.setState({sushiPosition: nextPosition})
    } else {
      this.setState({sushiPosition: 0})
    }
  }


  render (){
    return (
      <Fragment>
        <div className="belt">
          {
            this.filterSushi().map(sushi => <Sushi sushi={sushi} key={sushi.id} amIBroke={this.props.amIBroke} eatenSushis={this.props.eatenSushis}/>)
          }
          <MoreButton onButtonClick={this.onButtonClick} />
        </div>
      </Fragment>
    )
  }
}

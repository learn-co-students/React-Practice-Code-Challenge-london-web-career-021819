import React, { Component, Fragment } from 'react'

export default class Sushi extends Component {

  state = {
    eaten: false
  }

  handleClick = () => {
    if (!this.props.amIBroke(this.props.sushi)){
      this.setState({eaten: true})
    }
  }

  render(){
    const {sushi} = this.props
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.handleClick}>
          {
            (this.props.eatenSushis.includes(sushi)) ?
              null
            :
              <img src={sushi.img_url} width="100%" alt='oops'/>
          }
        </div>
        <h4 className="sushi-details">
          {sushi.name} - ${sushi.price}
        </h4>
      </div>
    )
  }
}

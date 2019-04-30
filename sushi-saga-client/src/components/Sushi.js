import React, { Component } from 'react'

class Sushi extends Component {

    state = {
      eaten: this.props.eatenSushi.includes(this.props.sushi)
    }

    handleClick = () => {
      if (!this.state.eaten && this.props.sushi.price <= this.props.money) {
        this.setState({
          eaten: true
        })
        this.props.eatSushi(this.props.sushi)
      }
    }

    render () {

      const {sushi} = this.props

      return (
      <div className="sushi">
        <div className="plate"
             onClick={this.handleClick}>
          {
            this.state.eaten ?
              null
            :
              <img src={sushi.img_url} width="100%" alt='' />
          }
        </div>
        <h4 className="sushi-details">
          {sushi.name} - ${sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi

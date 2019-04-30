import React, { Component, Fragment } from 'react'

export default class Table extends Component {

  renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" key={x.id} style={{ top: -7 * index }}/>
    })
  }

  render(){
    const {eatenSushis} = this.props
    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${this.props.wallet} remaining!
        </h1>
        <div className="table">
          <div className="stack">
            {
              this.renderPlates(eatenSushis)
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

import React, {Component} from 'react';

class Sushi extends Component {

  render() {
    const {img_url, name, price, id} = this.props.sushi
    return (<div className="sushi">
      <div className="plate" onClick={() => {
          this.props.changeMoney(price, id)
        }}>
        {
          this.props.plates.includes(id)
            ? null
            : <img alt="sushi pic" src={img_url} width="100%"/>
        }
      </div>
      <h4 className="sushi-details">
        {name}
        - ${price}
      </h4>
    </div>)
  }
}

export default Sushi;

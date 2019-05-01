import React, {Fragment} from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
  <Fragment>
    <div className="belt">
      {props.sushi.map(sush => <Sushi sushi={sush} key={sush.id} changeMoney={props.changeMoney} plates={props.plates}/>)}
      <MoreButton next={props.next} />
    </div>
  </Fragment>
)
}

export default SushiContainer

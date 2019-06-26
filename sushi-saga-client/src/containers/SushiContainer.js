import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
  
 
  return (
    <Fragment>
      <div className="belt">
       {props.fourSushi.map(oneSushi => <Sushi sushi={oneSushi} key={oneSushi.id} eatSushi={props.eatSushi} />)}


        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer


  


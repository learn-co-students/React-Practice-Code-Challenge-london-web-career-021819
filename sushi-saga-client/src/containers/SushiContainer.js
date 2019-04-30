import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushi, eatSushi, nextSushi, money, eatenSushi}) => {
  return (
    <Fragment>
      <div className="belt">
        {
          sushi.map(s => <Sushi key={s.id} sushi={s} eatSushi={eatSushi} money={money} eatenSushi={eatenSushi}/>)
        }
        <MoreButton nextSushi={nextSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer

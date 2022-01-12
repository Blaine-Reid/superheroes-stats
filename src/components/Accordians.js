import React, { useState } from 'react'

// React Components
import HeroStats from './HeroDetail.Stats'
import HeroAppearance from './HeroDetails.Appearance'
import HeroBio from './HeroDetails.Biography'
import HeroMisc from './HeroDetails.Misc'

const Accordians = ({ title, hero }) => {
  const [isActive, setIsActive] = useState(false);


  const component = title === 'Hero Stats' ?
    <HeroStats hero={hero} />
    : title === 'Appearance' ?
      <HeroAppearance hero={hero} />
      : title === 'Biography' ?
        <HeroBio hero={hero} />
        : <HeroMisc hero={hero} />


  return (
    <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => setIsActive(!isActive)}
        >
          <div><span>  {isActive ? '-' : '+'}  </span>{title}</div>
        </div>
        {isActive && component}
      </div>
      {/* <div className="accordion-content">Test Content</div> */}
    </div>

  )
}
export default Accordians
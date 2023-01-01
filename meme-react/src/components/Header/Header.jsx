import React from 'react'
import SERENA from '../../assets/Serena.jpg'
import BRIAN from '../../assets/Brian.jpg'
import './header.css'

const Header = () => {
  return (
    <div id='#' className='parent'>
        <div className='left-side'>
            <h1>MEME-Team</h1>
            <small>Developed by Serena & Brian</small>
        </div>

        <div className='container right-side'>
            <div className='flip-card'>
                <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                        <img src={SERENA} alt="bibby"/>
                    </div>
                    <div className='flip-card-back'>
                        <h3>Serena</h3>
                    </div>
                </div>
            </div>

            <div className='flip-card'>
                <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                        <img src={BRIAN} alt="bubby" />
                    </div>
                    <div className='flip-card-back'>
                        <h3>Brian</h3>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Header
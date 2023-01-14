import React from 'react'
import './formation.css'
import { MdComputer } from 'react-icons/md'
import { BsInfoCircleFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { BiTimeFive } from 'react-icons/bi'
import data from '../../data/data.json'


const Formation = () => {
  const information = data
  const Me2 = information.images.me4
  return (
    <section id="formation">

      <h5>Mon parcours académique</h5>
      <h2>Mes Formations</h2>
      <div className="container formation_container">
        <div className="me2">
          <img src={Me2} alt="me" className="me2-image"/>
        </div>
        <div className="formations">
          {
            data.formation.map(formation => 
              <article className="formation">
            <span className="titref">{formation.titre}</span>
            <h5 className="wheref"><ImLocation className='wheref-icon' />{formation.ref}
            {formation.ref && " | " } 
             {formation.instute}</h5>
            <small className="whenf"><BiTimeFive className='whenf-icon' />{formation.date}</small>
          </article>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Formation

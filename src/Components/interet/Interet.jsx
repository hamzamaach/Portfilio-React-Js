import React, { useRef, useState } from 'react'
import './interet.css'
import { MdSwipe } from 'react-icons/md'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import 'swiper/css';
import data from '../../data/data.json'

const Interet = () => {
  const interet = data.interet
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <section id="interet">
      <h5>Explorant mes centres d'intérêt pour découvrir mes passions</h5>
      <h2>Centre d'Intérêt</h2>
      <Swiper
        className="container mySwiper container_interet"
        pagination={pagination}
        modules={[Pagination]}
      >
        {interet.map((item, index) =>
          <SwiperSlide className="interet" key={index}>
            <div className="container3">
              <div className="card1">
                <div className="card1-header">
                  <img src={item.image} alt="rover" />
                </div>
                <div className="card1-body">
                  <div className="titre1">
                    <h4 className="interet_nom">
                      {item.titre}
                    </h4>
                  </div>
                  <div className="body">
                    <p className="interet_detail">
                      {item.body}{item.ref &&
                        <a href='https://www.instagram.com/pie_stagiaires/'>
                          @pie_stagiaires
                        </a>}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        <div className="swipe-icon"><span><span className='swipe-span'> Glisser</span> <MdSwipe/></span></div>
      </Swiper>
    </section>
  )
}

export default Interet
import React from 'react';
import './Presentacion.scss';
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';
import DivAbsoluto from '../DivAbsoluto';

export default function Presentacion(props) {

  const breakpointMobile = window.innerWidth < 720;

  function useAnimationText(delay) {
    return useSpring({
      config: config.stiff,
      to: {
        opacity: 1, 
        transform: 'translateY(0)'
      },
      from: {
        opacity: breakpointMobile ? 1 : 0, 
        transform: breakpointMobile ? 'translateY(0)' : 'translateY(-80px)'
      },
      delay: delay
    })
  }

  return (
    <DivAbsoluto>
      <div className="contenedor">
        <div className="presentacion ">
          <animated.h1 style={useAnimationText(500)} className="presentacion__titulo">DISCOVER NEW <br /> WAYS OF ENJOY <br /> YOUR FOOD</animated.h1>
          <animated.p style={useAnimationText(1000)} className="presentacion__texto">More than 300k of recipes are waiting to be discovered</animated.p>
          <Link to="/recipes" className="presentacion__btn">Start now</Link>
        </div>
      </div>
    </DivAbsoluto>
  )
}
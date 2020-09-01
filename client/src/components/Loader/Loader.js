import React from 'react';
import './Loader.scss';
import { Spring } from 'react-spring/renderprops';

export default function Loader({ className }) { 
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity:  1}}
    >
    {props => <div style={props} className={`loader ${className}`}></div>}
    </Spring>
  );
}
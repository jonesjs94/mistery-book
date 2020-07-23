import React from 'react';
import './Logo.scss';

export default function Logo(props) {
  let { estadoNavbar } = props;
  let classLogo = estadoNavbar ? 'logo' : 'logo logo--scroll';
  
  return (
    <h1 className={classLogo}>Mystery Book</h1>
  )
}
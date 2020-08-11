import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';

export default function Logo(props) {
  let { estadoNavbar } = props;
  let classLogo = estadoNavbar ? 'logo' : 'logo logo--scroll';
  
  return (
      <h1 className={classLogo}>
        <Link to="/">Mistery Book</Link>
      </h1>
  )
}
import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/scale.css';

export default function BotonFavorito(props) {
  const { className, tippyClassName, isInFavorites, handleStateFav } = props;
  
  function handleClick() {
    handleStateFav();
    
    let btnInstance = document.getElementById("fav-btn")._tippy;
    setTimeout(() => { 
      btnInstance.hide();
      btnInstance.disable();
    }, 3000);
  }

  return (
    <Tippy 
      content={<div className={tippyClassName}>Saved!</div>}
      arrow={true}
      trigger="click"
      theme="light"
      placement="right"
      animation="scale"
      zIndex="1"
    >
      <button id="fav-btn" className={className} onClick={handleClick} >
        {isInFavorites ? '' : 'Add to Favorites'}
        {/* fas -> filled icon / far -> empty icon */}
        <i className={isInFavorites ? 'fas fa-heart' : 'far fa-heart'}></i>
      </button>
    </Tippy>
  )

}

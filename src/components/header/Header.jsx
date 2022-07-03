import React from 'react';

import './style.scss'

import backIcon from '../../images/icons/back.svg'
import moreIcon from '../../images/icons/more.svg'

import { useNavigate } from 'react-router-dom'




function MoreImage(props) {
   if (props.more)
      return (
         <div className='moreDiv tap'>
            <img src={ moreIcon } alt="More Options" />
         </div>
      )
   return <div className="moreDiv blank"></div>
}

function BackImage(props) {
   const nev = useNavigate()
   if (props.back)
      return (
         <div className='backDiv tap' onClick={ ()=>{nev(-1)} }>
            <img src={ backIcon } alt="More Options" />
         </div>
      )
   return <div className="backDiv blank"></div>
}

export default function Header({ back, text, more }) {
   return (
      <header className='headerComp' >
         <BackImage back={ back } />
         <p>{ text || "Header Title" }</p>
         <MoreImage more={ more } />
      </header>
   )
}
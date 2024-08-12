import React from 'react'
import "./Card.css"
import Icon from '../Icon/Icon'


function Card({ player, index, onPlay, gameEnd }) {
    let icon = <Icon/>
    if (player === 'X'){
        icon = <Icon name ="cross" />
    }
    else if (player === 'O') {
        icon = <Icon name ="circle" />
    }
  return (
    <div className = 'card-w'onClick={() => !gameEnd && onPlay(index)}>
        {icon}
    </div>
  )
}
export default Card;
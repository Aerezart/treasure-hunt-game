import React from 'react'
import classes from './GameFinished.module.css'

const GameFinished = ({restartHandler}) => {
  return (
    <div className={`${classes.modal} pixel_corners_smaller`}>
        <div className={`${classes.modal_content} pixel_corners_smaller`}>
            <h1>Congradulations!</h1>
            <h1>You've found it</h1>
            <div className={classes.treasure}>
            <img src='images/treasure.png' alt="" />
            </div>
            <button id='restart' onClick={restartHandler} className={`${classes.restart} pixel_corners_smaller `}>Restart the Game</button>
        </div>
    </div>
  )
}

export default GameFinished
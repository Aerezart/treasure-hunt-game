import React, { useState } from 'react'
import classes from './ControlsNav.module.css'
import './Dice.css'
import { useSelector } from 'react-redux'
import { gameActions } from '../store/gameSlice'
import { useDispatch } from 'react-redux'
import { gameContent } from '../store/gameContent'
import GameInterface from './GameInterface'

const ControlsNav = () => {

    const dispatch = useDispatch()
    const currentPinPosition = useSelector(state=>state.game.currentPinPosition)   

   
    const [dice, setDice] = useState(null)
    const [finishedDiceAnimation, setFinishedDiceAnimation] = useState(false)
    const [turnInProcess, setTurnInProcess] = useState(false)
    let currentCell = gameContent.find((obj) => obj.id === currentPinPosition);


    const rollDice =  () => {
    setTurnInProcess(true)
    setFinishedDiceAnimation(false)

    var diceOne   = Math.floor((Math.random() * 6) + 1)
    dispatch(gameActions.setGameStarted(true))
   

    var rotation = diceOne + 2;
    if(diceOne==6 || diceOne==5 ){
        rotation = diceOne-2
    }

    setDice(rotation)

    setTimeout(()=>{
        setDice(diceOne)
    }, 300)

    setTimeout(  ()=>{
        setFinishedDiceAnimation(true)
        

        

        const newPinPosition = currentPinPosition + diceOne
        currentCell = gameContent.find((obj) => obj.id === newPinPosition);

        if(currentCell.type !== 'trap' || currentCell.type !== 'puzzle'){
            setTurnInProcess(false)
        }

        dispatch(gameActions.changePosition(newPinPosition))
        dispatch(gameActions.setDiceVal(diceOne))

        
        
        
    }, 1400)
   
    }



    



  return (
    <div className={classes.controlsNav}>
        <div className={`${classes.controlsNavInner} pixel_corners`}>

         <div className="rollDiceContainer" >
            <div className={`diceContainer ${finishedDiceAnimation ? 'finishedAnimation' : ''}`}>
                <div id='dice1' className={`dice dice-one ${dice && 'show-' + dice}`}>
                    <div id="dice-one-side-one" className='side one '>
                    <div className="dot one-1"></div>
                    </div>
                    <div id="dice-one-side-two" className='side two'>
                    <div className="dot two-1"></div>
                    <div className="dot two-2"></div>
                    </div>
                    <div id="dice-one-side-three" className='side three'>
                    <div className="dot three-1"></div>
                    <div className="dot three-2"></div>
                    <div className="dot three-3"></div>
                    </div>
                    <div id="dice-one-side-four" className='side four'>
                    <div className="dot four-1"></div>
                    <div className="dot four-2"></div>
                    <div className="dot four-3"></div>
                    <div className="dot four-4"></div>
                    </div>
                    <div id="dice-one-side-five" className='side five'>
                    <div className="dot five-1"></div>
                    <div className="dot five-2"></div>
                    <div className="dot five-3"></div>
                    <div className="dot five-4"></div>
                    <div className="dot five-5"></div>
                    </div>
                    <div id="dice-one-side-six" className='side six'>
                    <div className="dot six-1"></div>
                    <div className="dot six-2"></div>
                    <div className="dot six-3"></div>
                    <div className="dot six-4"></div>
                    <div className="dot six-5"></div>
                    <div className="dot six-6"></div>
                    </div>
                </div>
            </div>
        
            <button id='roll' onClick={rollDice} disabled={turnInProcess} className="pixel_corners_smaller">Roll dice!</button>
        </div> 



        <GameInterface currentCell={currentCell} currentPinPosition={currentPinPosition} setTurnInProcess={setTurnInProcess}/>





        </div>
    </div>
  )
}

export default ControlsNav
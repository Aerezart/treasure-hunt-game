import React from 'react'
import classes from './GameInterface.module.css'
import { useDispatch } from 'react-redux'
import { gameActions } from '../store/gameSlice'

const GameInterface = ({
    currentCell, 
    currentPinPosition, 
    setTurnInProcess, 
    itemUsed,
    setClickedCorrectOption,
    clickedWrongOption,
    setClickedWrongOption,
    clickedCorrectOption,
    passedPuzzles,
    inventoryFull}) => {

    const dispatch = useDispatch()
    let description = currentCell.description
    let actionDescription = null
    let action = null
    let question = null
    let options = null 


    const moveBack = () =>{
        if( currentCell.type == 'puzzle' && !passedPuzzles.includes(currentCell.id)){
            dispatch(gameActions.rememberPassedPuzzle(currentCell.id))
        }
        dispatch(gameActions.changePosition(currentPinPosition - currentCell.ifFalseGoBackBy))
        setClickedCorrectOption(null)
        setClickedWrongOption(null)
        dispatch(gameActions.setTurnInProcess(false))
    }

    if(
    currentCell.type == 'trap' || 
    currentCell.type == 'puzzle' ||
    currentCell.type == 'trap_defendable' ||
    currentCell.type == 'move_forward'){
        actionDescription = currentCell.actionDescription
    }
  
    if(currentCell.type == 'item' && inventoryFull){
        actionDescription = 'But you dont have free space in your inventory'
    }
    
    if(currentCell.type == 'trap' ||
    currentCell.type == 'move_forward' ||
    (currentCell.type == 'trap_defendable' && !itemUsed)){
        action = () => {
            currentCell.action(dispatch, currentPinPosition)
            dispatch(gameActions.setTurnInProcess(false))
        }
       
    }
    if(currentCell.type == 'shortcut'){
        currentCell.action(dispatch)
    }
    if(currentCell.type == 'puzzle'){
        question = currentCell.question
        options = currentCell.options
    }
    if(currentCell.type == 'trap_defendable' && itemUsed){
        description = 'You\'ve successfully defended yourself!'
        actionDescription = 'Let\'s continue'
    }


  

    const answerGivenHandler = (isCorrect, clickedOption)=>{
        if(isCorrect){
            setClickedCorrectOption(clickedOption)
            dispatch(gameActions.setTurnInProcess(false))
        }else{
            const correctAnswer = options.find(item=> item.isCorrect==true)
            setClickedCorrectOption(correctAnswer)
            setClickedWrongOption(clickedOption)
        }
    }

    

  return (
    <>
        <div className={`${classes.gameInterfaceDesc} pixel_corners_smaller`}>
            {passedPuzzles.includes(currentCell.id) && question && options ?  
            <h2 style={{textAlign: 'center'}}>You've already passed this puzzle</h2>
            :
            <>
                <h2 className={classes.description}>{description}</h2>
                {actionDescription && !clickedWrongOption && 
                <h3 className={classes.actionDescription}>{actionDescription}</h3>}

                {clickedWrongOption && 
                <h3 className={classes.actionDescription}>Wrong answer, move {currentCell.ifFalseGoBackBy} cells back</h3>}
                
                {(action && !clickedWrongOption && currentCell.type !== 'move_forward') ? 
                <button className={`${classes.move_back} pixel_corners_smaller`} onClick={action}>Move back</button>
                :
                (action  && currentCell.type == 'move_forward') ?
                <button className={`${classes.move_back} pixel_corners_smaller`} onClick={action}>Move forward</button>
                :
                ''
                }
                {clickedWrongOption && <button className={`${classes.move_back} pixel_corners_smaller`} onClick={moveBack}>Move back</button>}
            </>
            }
        </div>
    
        <div className={`${classes.gameInterface} pixel_corners_smaller`}>
            {!passedPuzzles.includes(currentCell.id) && question && options &&
            <div className={classes.quiz_cont}>
                <h3>{question}</h3>
                <div className={classes.answerOptions}>
                    {options.map((option)=>{
                        return <button 
                        className={`${clickedWrongOption == option ? classes.clickedWrongOption : ""} ${clickedCorrectOption == option ? classes.clickedCorrectOption : ""} pixel_corners_smaller`}
                        onClick={()=>{answerGivenHandler(option.isCorrect, option)}} 
                        key={option.optionText}
                        disabled={clickedWrongOption || clickedCorrectOption}
                        >{option.optionText}</button>
                    })}
                </div>
            </div>
            }
        </div>
    </>
  )
}

export default GameInterface
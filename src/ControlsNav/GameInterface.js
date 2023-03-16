import React, { useState } from 'react'
import classes from './GameInterface.module.css'
import { useDispatch } from 'react-redux'

const GameInterface = ({currentCell, currentPinPosition, setTurnInProcess}) => {

    const dispatch = useDispatch()
    let description = currentCell.description
    let actionDescription = null
    let action = null
    let question = null
    let options = null

    if(currentCell.type == 'trap' || currentCell.type == 'puzzle'){
        actionDescription = currentCell.actionDescription
    }
    if(currentCell.type == 'trap'){
        action = () => {
            currentCell.action(dispatch, currentPinPosition)
            setTurnInProcess(false)
        }
    }
    if(currentCell.type == 'puzzle'){
        question = currentCell.question
        options = currentCell.options
    }


    const [clickedWrongOption, setClickedWrongOption] = useState(null)
    const [clickedCorrectOption, setClickedCorrectOption] = useState(null)

    const answerGivenHandler = (isCorrect, clickedOption)=>{
        if(isCorrect){
            setClickedCorrectOption(clickedOption)
        }else{
            setClickedWrongOption(clickedOption)
        }
        console.log(clickedWrongOption) 
        setTurnInProcess(false)
    }
   

  return (
    <div className={`${classes.gameInterface} pixel_corners_smaller`}>
        <h2 className={classes.description}>{description}</h2>
        {actionDescription && <h3 className={classes.actionDescription}>{actionDescription}</h3>}
        {action && <button className={`${classes.move_back} pixel_corners_smaller`} onClick={action}>Move back</button>}

        <div className={classes.puzzles}>
            {question && options &&
            <>
                <h3>{question}</h3>
                <div className={classes.answerOptions}>
                    {options.map((option)=>{
                        return <button 
                        className={`${clickedWrongOption == option ? classes.clickedWrongOption : ""} ${clickedCorrectOption == option ? classes.clickedCorrectOption : ""}`}
                        onClick={()=>{answerGivenHandler(option.isCorrect, option)}} 
                        key={option.optionText}>{option.optionText}</button>
                    })}
                </div>
            </>
            }
        </div>
    </div>
  )
}

export default GameInterface
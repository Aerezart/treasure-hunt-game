import React from 'react'
import classes from './Inventory.module.css'
import { allGameItems } from '../store/gameInventory'
import { useDispatch } from 'react-redux'
import { gameActions } from '../store/gameSlice'

const Inventory = ({
  currentCell, 
  setItemUsed, 
  itemUsed,
  playerInventory}) => {
  const dispatch = useDispatch()

  
  const getItemImage = (index) =>{
    return allGameItems.find((item)=>{ 
    return item.id == playerInventory[index] }).image
  }

  const itemUseHandler = (index)=>{
    if(currentCell.type == 'trap_defendable' && !itemUsed){
      setItemUsed(true)
      dispatch(gameActions.setTurnInProcess(false))
      dispatch(gameActions.removeItemFromInventory(index))
    }
  }

  return (
    <div className={classes.inventory_cont} >
      
      <div className={classes.inventory} >
          <div className='pixel_corners_smaller'>
            {playerInventory[0] ?
            <div className={currentCell.type == 'trap_defendable' && !itemUsed ? classes.hightlight : '' }
            onClick={()=>{itemUseHandler(0)}}>
              <img src={getItemImage(0)} />
            </div>
            :
            <div>
            </div>
            }
          </div>
          <div className='pixel_corners_smaller'>
          {playerInventory[1] ?
            <div className={currentCell.type == 'trap_defendable' && !itemUsed ? classes.hightlight : '' }
            onClick={()=>{itemUseHandler(1)}}>
              <img src={getItemImage(1)} />
            </div>
            :
            <div>
            </div>
          }
          </div>
          <div className='pixel_corners_smaller'>
          {playerInventory[2] ?
            <div className={currentCell.type == 'trap_defendable' && !itemUsed ? classes.hightlight : '' }
            onClick={()=>{itemUseHandler(2)}}>
              <img src={getItemImage(2)} />
            </div>
            :
            <div>
            </div>
          }
          </div>
      </div>
    </div>
  )
}

export default Inventory
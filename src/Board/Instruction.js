import React from 'react'
import classes from './Instruction.module.css'
import { TfiHandDrag } from 'react-icons/tfi';

const Instruction = () => {
  return (
    <div className={`${classes.instruction} pixel_corners`}>
        <div>
            <TfiHandDrag/>
            <h2>Use your mouse to move across the map</h2>
        </div>
    </div>
  )
}

export default Instruction
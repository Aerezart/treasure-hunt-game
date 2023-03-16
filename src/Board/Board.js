import React, { useEffect, useState, useLayoutEffect , useCallback, useRef} from 'react'
import classes from './Board.module.css'
import { useSelector } from 'react-redux'


const Board = () => {

    const currentPinCoordinates = useSelector(state=>state.game.currentPinCoordinates)   
    const currentPinPosition = useSelector(state=>state.game.currentPinPosition)   
    const isGameStarted = useSelector(state=>state.game.isGameStarted)   
    const diceValue = useSelector(state=>state.game.currentDiceVal)   

    const pin = (pos) => {
    
      if(
      (isGameStarted && currentPinPosition == pos) ||
      (pos == 1 && currentPinPosition == pos)
      ){
          return classes.drawPin 
      }else if(isGameStarted && 
        currentPinPosition !== pos &&
        currentPinPosition - diceValue == pos
      ){
        return classes.removePin 
      }
      
    }
    





    const containerRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(null);
    const startYRef = useRef(null);
    const scrollLeftRef = useRef(null);
    const scrollTopRef = useRef(null);
  
    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      startXRef.current = e.pageX - containerRef.current.offsetLeft;
      startYRef.current = e.pageY - containerRef.current.offsetTop;
      scrollLeftRef.current = containerRef.current.scrollLeft;
      scrollTopRef.current = containerRef.current.scrollTop;
    };
  
    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const x = e.pageX - containerRef.current.offsetLeft;
      const y = e.pageY - containerRef.current.offsetTop;
      const walkX = (x - startXRef.current) * 1; // adjust scrolling speed here
      const walkY = (y - startYRef.current) * 1; // adjust scrolling speed here
      containerRef.current.scrollLeft = scrollLeftRef.current - walkX;
      containerRef.current.scrollTop = scrollTopRef.current - walkY;
    };
  
    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };
  
    const handleMouseLeave = () => {
      isDraggingRef.current = false;
    };

   

  return ( 
    <div className={`${classes.board}`}>

        <div className={`${classes.grid} pixel_corners`} ref={containerRef}  
         onMouseDown={handleMouseDown}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
         onMouseLeave={handleMouseLeave}>

            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>

            <div className={classes.empty}></div>
            <div className={pin(1)}><p>1</p></div>    
            <div className={pin(2)}><p>2</p></div>    
            <div className={pin(3)}><p>3</p></div>    
            <div className={pin(4)}><p>4</p></div>    
            <div className={pin(5)}><p>5</p></div>  
            <div className={pin(6)}><p>6</p></div>    
            <div className={pin(7)}><p>7</p></div>  
            <div className={classes.empty}></div>

            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>    
            <div className={classes.empty}></div>    
            <div className={classes.empty}></div>  
            <div className={pin(8)}><p>8</p></div>    
            <div className={classes.empty}></div>    
            
            <div className={classes.empty}></div>    
            <div className={pin(15)}><p>15</p></div>  
            <div className={pin(14)}><p>14</p></div>    
            <div className={pin(13)}><p>13</p></div>    
            <div className={pin(12)}><p>12</p></div>    
            <div className={pin(11)}><p>11</p></div>    
            <div className={pin(10)}><p>10</p></div>  
            <div className={pin(9)}><p>9</p></div>  
            <div className={classes.empty}></div>   

            <div className={classes.empty}></div>    
            <div className={pin(16)}><p>16</p></div>   
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>    
            <div className={classes.empty}></div>    
            <div className={classes.empty}></div> 
             
            <div className={classes.empty}></div>    
            <div className={pin(17)}><p>17</p></div>    
            <div className={pin(18)}><p>18</p></div>  
            <div className={pin(19)}><p>19</p></div>    
            <div className={pin(20)}><p>20</p></div>    
            <div className={pin(21)}><p>21</p></div>    
            <div className={pin(22)}><p>22</p></div>    
            <div className={pin(23)}><p>23</p></div>  
            <div className={classes.empty}></div> 

            <div className={classes.empty}></div>    
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>    
            <div className={classes.empty}></div> 
            <div className={pin(24)}><p>24</p></div>    
            <div className={classes.empty}></div> 

            <div className={classes.empty}></div>       
            <div className={pin(31)}><p>31</p></div>    
            <div className={pin(30)}><p>30</p></div>    
            <div className={pin(29)}><p>29</p></div>    
            <div className={pin(28)}><p>28</p></div>  
            <div className={pin(27)}><p>27</p></div>    
            <div className={pin(26)}><p>26</p></div>    
            <div className={pin(25)}><p>25</p></div>
            <div className={classes.empty}></div>       

            <div className={classes.empty}></div>   
            <div className={pin(32)}><p>32</p></div>    
            <div className={classes.empty}></div>    
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>    
            <div className={classes.empty}></div>  
           
            <div className={classes.empty}></div>       
            <div className={pin(33)}><p>33</p></div>    
            <div className={pin(34)}><p>34</p></div>    
            <div className={pin(35)}><p>35</p></div>    
            <div className={pin(36)}><p>36</p></div>    
            <div className={pin(37)}><p>37</p></div>  
            <div className={pin(38)}><p>38</p></div>    
            <div className={pin(39)}><p>39</p></div>    
            <div className={classes.empty}></div>  
             
            
            <div className={classes.empty}></div>    
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>    
            <div className={classes.empty}></div>       
            <div className={pin(40)}><p>40</p></div>  
            <div className={classes.empty}></div>  

            <div className={classes.empty}></div>  
            <div className={pin(48)}><p>48</p></div>    
            <div className={pin(47)}><p>47</p></div>    
            <div className={pin(46)}><p>46</p></div>    
            <div className={pin(45)}><p>45</p></div>  
            <div className={pin(44)}><p>44</p></div>    
            <div className={pin(43)}><p>43</p></div>    
            <div className={pin(42)}><p>42</p></div>   
            <div className={classes.empty}></div>  

            <div className={classes.empty}></div>  
            <div className={pin(49)}><p>49</p></div>   
            <div className={classes.empty}></div>    
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>    
            <div className={classes.empty}></div> 
               
            <div className={classes.empty}></div>       
            <div className={pin(50)}><p>50</p></div>    
            <div className={pin(51)}><p>51</p></div>    
            <div className={pin(52)}><p>52</p></div>    
            <div className={pin(53)}><p>53</p></div>    
            <div className={pin(54)}><p>54</p></div>  
            <div className={pin(55)}><p>55</p></div>    
            <div className={pin(56)}><p>56</p></div>   
            <div className={classes.empty}></div>       

            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
            <div className={classes.empty}></div>
        </div>
      </div>
  )
}

export default Board
import React, { useEffect, useState } from "react";
import classes from "./ControlsNav.module.css";
import "./Dice.css";
import { useSelector } from "react-redux";
import { gameActions } from "../store/gameSlice";
import { useDispatch } from "react-redux";
import { gameContent } from "../store/gameContent";
import GameInterface from "./GameInterface";
import Inventory from "./Inventory";

const ControlsNav = () => {
  const dispatch = useDispatch();
  const [inventoryFull, setInventoryFull] = useState(false);
  const [dice, setDice] = useState(null);
  const [finishedDiceAnimation, setFinishedDiceAnimation] = useState(false);
  const [itemUsed, setItemUsed] = useState(false);
  const [clickedWrongOption, setClickedWrongOption] = useState(null);
  const [clickedCorrectOption, setClickedCorrectOption] = useState(null);
  const playerInventory = useSelector((state) => state.game.inventory);
  const currentPinPosition = useSelector((state) => state.game.currentPinPosition);
  const isGameFinished = useSelector((state) => state.game.isGameFinished);
  const turnInProcess = useSelector((state) => state.game.isTurnInProcess);
  const passedPuzzles = useSelector((state) => state.game.passedPuzzles);
  let currentCell = gameContent.find((obj) => obj.id == currentPinPosition);



  useEffect(() => {
    if (
      (currentCell.type == "puzzle" && !clickedCorrectOption && !passedPuzzles.includes(currentCell.id)) ||
      (currentCell.type == "trap_defendable" && !itemUsed) ||
      currentCell.type == "trap" ||
      currentCell.type == "shortcut" ||
      currentCell.type == "move_forward"
    ) {
      dispatch(gameActions.setTurnInProcess(true));
    }
  }, [turnInProcess, clickedCorrectOption]);




  const rollDice = () => {
    dispatch(gameActions.setTurnInProcess(true));
    setFinishedDiceAnimation(false);

    var diceOne = Math.floor(Math.random() * 6) + 1;
    dispatch(gameActions.setGameStarted(true));

    var rotation = diceOne + 2;
    if (diceOne == 6 || diceOne == 5) {
      rotation = diceOne - 2;
    }

    setDice(rotation);
    setTimeout(() => {
      setDice(diceOne);
    }, 200);

    setTimeout(() => {
      setFinishedDiceAnimation(true);
      setItemUsed(false);
      setClickedWrongOption(null);
      setClickedCorrectOption(null);

      if (currentCell.type == "puzzle" && !passedPuzzles.includes(currentCell.id)){
        dispatch(gameActions.rememberPassedPuzzle(currentCell.id));
      }

      let newPinPosition;
      if(parseInt(currentPinPosition) + diceOne >= 44) {
        newPinPosition = 44;
        dispatch(gameActions.setGameFinished(true));
      }else{
        newPinPosition = parseInt(currentPinPosition) + diceOne;
      }
      currentCell = gameContent.find((obj) => obj.id == newPinPosition);

      if (
        (currentCell.type !== "trap" &&
        currentCell.type !== "puzzle" &&
        currentCell.type !== "shortcut" &&
        currentCell.type !== "trap_defendable" &&
        currentCell.type !== "move_forward") ||
        passedPuzzles.includes(newPinPosition)
      ){
        dispatch(gameActions.setTurnInProcess(false));
      }
      if (currentCell.type == "item" && playerInventory.length < 3) {
        currentCell.action(dispatch);
      } else if (currentCell.type == "item" && playerInventory.length == 3) {
        setInventoryFull(true);
      }

      dispatch(gameActions.changePosition(newPinPosition));
    }, 1300);
  };

  

  return (
    <div
      className={`${classes.controlsNav} ${
        isGameFinished ? classes.hideControlsNav : classes.showControlsNav}`}>
      <div className={`${classes.controlsNavInner} pixel_corners`}>
        <div className="rollDiceContainer">

          <Inventory
            itemUsed={itemUsed}
            playerInventory={playerInventory}
            setItemUsed={setItemUsed}
            currentCell={currentCell}
          />

          <div className={`diceContainer ${finishedDiceAnimation ? "finishedAnimation" : ""}`}>
            <div
              id="dice1"
              className={`dice dice-one ${dice && "show-" + dice}`}>

              <div id="dice-one-side-one" className="side one ">
                <div className="dot one-1"></div>
              </div>
              <div id="dice-one-side-two" className="side two">
                <div className="dot two-1"></div>
                <div className="dot two-2"></div>
              </div>
              <div id="dice-one-side-three" className="side three">
                <div className="dot three-1"></div>
                <div className="dot three-2"></div>
                <div className="dot three-3"></div>
              </div>
              <div id="dice-one-side-four" className="side four">
                <div className="dot four-1"></div>
                <div className="dot four-2"></div>
                <div className="dot four-3"></div>
                <div className="dot four-4"></div>
              </div>
              <div id="dice-one-side-five" className="side five">
                <div className="dot five-1"></div>
                <div className="dot five-2"></div>
                <div className="dot five-3"></div>
                <div className="dot five-4"></div>
                <div className="dot five-5"></div>
              </div>
              <div id="dice-one-side-six" className="side six">
                <div className="dot six-1"></div>
                <div className="dot six-2"></div>
                <div className="dot six-3"></div>
                <div className="dot six-4"></div>
                <div className="dot six-5"></div>
                <div className="dot six-6"></div>
              </div>
            </div>
          </div>
          <button
            id="roll"
            onClick={rollDice}
            disabled={turnInProcess || isGameFinished}
            className="pixel_corners_smaller">Roll dice!</button>
        </div>

        <GameInterface
          passedPuzzles={passedPuzzles}
          isGameFinished={isGameFinished}
          inventoryFull={inventoryFull}
          playerInventory={playerInventory}
          itemUsed={itemUsed}
          currentCell={currentCell}
          currentPinPosition={currentPinPosition}
          turnInProcess={turnInProcess}
          clickedWrongOption={clickedWrongOption}
          clickedCorrectOption={clickedCorrectOption}
          setClickedWrongOption={setClickedWrongOption}
          setClickedCorrectOption={setClickedCorrectOption}
        />
      </div>
    </div>
  );
};

export default ControlsNav;

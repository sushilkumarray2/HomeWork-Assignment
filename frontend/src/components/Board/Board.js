import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";

const Board = ({setLoginUser} ) => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };
  

  const checkDraw=()=>{
    for(let i =0;i<9;i++)
    {
      if(state[i]==null)
      {
        return false;
      }
    }
    return true;
  }
  const isWinner = checkWinner();
  const isDraw = isWinner==false?checkDraw():false

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    
    <div className="board-container">
    <h1 style={{color:"orange"}}>Tic Tac Toe Game</h1>
    <div><button className = "logout" onClick={()=>setLoginUser({})}>Log Out</button></div>
        <div>
           <div className="containt1">
           {
            (isWinner||isDraw)?<div>
            {
              isWinner?<div style={{color:"black"}}>{isWinner} won the game</div>:<div style={{color:"red"}}>No one has won the game</div>
            }
            </div>:<div>Player {isXTurn ? "X" : "O"} please move</div>
           }
            
            
            </div>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </div>
    
      <div className="containt1"><button className="btn" onClick={handleReset}>Play Again</button></div>
      
    </div>
  
  );
};

export default Board;

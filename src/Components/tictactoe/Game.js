import React, { useState } from 'react';
import { calculateWinner } from '../../helpers';
import Board from './Board';
import "./GameStyle.css";

function Game(){
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    const [countDraw, setCountDraw] = useState(0);
    const handleClick = (index) => {
        
        const boardCopy = [...board];
        if(winner || boardCopy[index]) {
            // console.log(winner)
            // console.log(boardCopy[index]);
            return;
        }
        setCountDraw(prev => prev + 1);
      
        // console.log(boardCopy[index]);
        boardCopy[index] = xIsNext? 'X' : "O";
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }
    const handleResetGame = () => {
        setBoard(Array(9).fill(null));
        setCountDraw(0);

    }
    return (
        <div>
           <Board cells={board} onClick={handleClick}></Board>
           {!winner && (countDraw !== 9 ? console.log(countDraw) : <div className="game-draw">DRAW</div>)}
           {winner && <div className="game-winner">
               winner is {winner}
           </div>}
           <button className="game-reset" onClick={handleResetGame}>Reset Game</button>
        </div>
    );
};

export default Game;
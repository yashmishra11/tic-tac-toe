import React, { useState } from 'react'
import Card from '../Card/Card'
import "./Grid.css";
import isWinner from '../Helper/IsWinner';

function Grid( { numberOfcards }) {
    let  [board, setBoard] = useState(Array(numberOfcards).fill(""));
    let  [turn, setTurn] = useState(true);
    let  [winner, setWinner] = useState(null);

    function play(index) {
      if (turn === true){
        board[index] = 'X'
      }else {
        board[index] = 'O'
      }
      let win = isWinner(board, turn ? 'X' : 'O');
        if (win)
          setWinner(win)
        setBoard([...board]);
        setTurn(!turn);
    }

    function reset() {
      setBoard(Array(numberOfcards).fill(""));
      setTurn(true);
      setWinner(null);
    }

  return (
    <div className='grid'>
      {
        winner && (
          <>
        <h1>Winner is: {winner}</h1>
        </>
        )
      }
      <h1 className ='head'>Tic Tac Toe </h1>
      <button onClick={reset}>Reset Game</button>
      <div className = 'grid-w'>
      {
            board.map((item, index)=>(
                <Card gameEnd = {winner ? true : false} key = {index} player={item} onPlay={play} index={index} />
            ) )
        }
      </div>
      
    </div>
  )
}

export default Grid

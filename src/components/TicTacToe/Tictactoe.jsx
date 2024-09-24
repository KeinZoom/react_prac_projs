import { useEffect, useState } from "react";
import "./styles.css";

function Square({ handleClick, content }) {
  return (
    <button className="square" onClick={handleClick}>
      {content}
    </button>
  );
}

function Tictactoe() {
  const [squares, setSquares] = useState(Array(9));
  const [isXturn, setIsXtrun] = useState(true);
  const [isWin, setIsWin] = useState(null);

  function judgeWinner(cpySquare) {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];
      if (
        cpySquare[x] &&
        cpySquare[x] === cpySquare[y] &&
        cpySquare[x] === cpySquare[z]
      )
        return cpySquare[x];
    }

    return null;
  }

  function handleClick(contentIndex) {
    if (squares[contentIndex] !== "" || isWin) return;
    const cpySquare = [...squares];
    cpySquare[contentIndex] = isXturn ? "X" : "O";
    const result = judgeWinner(cpySquare);
    setIsWin(result);
    setSquares([...cpySquare]);
    setIsXtrun(!isXturn);
  }

  function restartClick() {
    const cpySquare = [...squares];
    for (let i = 0; i < cpySquare.length; i++) {
      cpySquare[i] = "";
    }
    setSquares([...cpySquare]);
    setIsXtrun(true);
    setIsWin(null);
  }

  useEffect(() => {
    const cpySquare = [...squares];
    for (let i = 0; i < cpySquare.length; i++) {
      cpySquare[i] = "";
    }
    setSquares([...cpySquare]);
  }, []);

  return (
    <div className="tictactoe__container">
      <div className="row">
        <Square handleClick={() => handleClick(0)} content={squares[0]} />
        <Square handleClick={() => handleClick(1)} content={squares[1]} />
        <Square handleClick={() => handleClick(2)} content={squares[2]} />
      </div>
      <div className="row">
        <Square handleClick={() => handleClick(3)} content={squares[3]} />
        <Square handleClick={() => handleClick(4)} content={squares[4]} />
        <Square handleClick={() => handleClick(5)} content={squares[5]} />
      </div>
      <div className="row">
        <Square handleClick={() => handleClick(6)} content={squares[6]} />
        <Square handleClick={() => handleClick(7)} content={squares[7]} />
        <Square handleClick={() => handleClick(8)} content={squares[8]} />
      </div>
      <div className="tictactor__info">
        {isWin === null ? (
          <p>Next player is {isXturn ? "X" : "O"}</p>
        ) : (
          <p>Winner is {isWin}, click to restart.</p>
        )}
      </div>
      <button onClick={restartClick}>restart</button>
    </div>
  );
}

export default Tictactoe;

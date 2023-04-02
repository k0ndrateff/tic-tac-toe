import React, {useState} from "react";
import Cell from "./Cell";

const Board:React.FC = () => {
    let [turn, setTurn] = useState('x');
    let [filled, setFilled] = useState(0);
    let [visibilityRestart, setVisibilityRestart] = useState('none');
    let [visibilityText, setVisibilityText] = useState('inline');
    let [cells, setCells] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);


    const updateCells = () => {
        setTurn(turn === 'x' ? '0' : 'x');
        setFilled(filled + 1);
        if (filled === 8) {
            setVisibilityRestart('block');
            setVisibilityText('none');
        }
    }

    const restartGame = () => {
        setVisibilityRestart('none');
        setVisibilityText('inline');
        setFilled(0);
        setCells([]);
        setTimeout(() => setCells([0, 1, 2, 3, 4, 5, 6, 7, 8]), 0);
    }

    return (
        <>
            <h1 style={{display: visibilityText}}>Ходят <span style={{color: 'orangered'}}>
                {turn === 'x' ? 'крестики' : 'нолики'}
            </span></h1>
            <button style={{display: visibilityRestart}} onClick={restartGame}>Переиграть</button>
            <div className={'board'}>
                {cells.map(() => (
                    <Cell currentTurn={turn} updateCells={updateCells} />
                ))}
            </div>
        </>
    );
};
export default Board;
import React, {useState} from "react";
import Cell from "./Cell";

const Board:React.FC = () => {
    let cellsInitialState = Array.from({length: 9}, () => {
        return {
            filling: '',
            isWinning: false,
        };
    });

    let [turn, setTurn] = useState('x');
    let [filled, setFilled] = useState(0);
    let [visibilityRestart, setVisibilityRestart] = useState('none');
    let [visibilityText, setVisibilityText] = useState('inline');
    let [cells, setCells] = useState(cellsInitialState);


    const changeCellFill = (cellIndex: number, filling: string) => {
        cells[cellIndex].filling = filling;
    };

    const checkWinState = () => {
        // Проверка горизонталей
        for (let i = 0; i < 7; i+=3) {
            if (cells[i].filling === cells[i + 1].filling &&
                cells[i + 1].filling === cells[i + 2].filling &&
                cells[i].filling !== ''
            ) {
                cells[i].isWinning = true;
                cells[i + 1].isWinning = true;
                cells[i + 2].isWinning = true;
                return true;
            }
        }
        // Проверка вертикалей
        for (let i = 0; i < 3; i++) {
            if (cells[i].filling === cells[i + 3].filling &&
                cells[i + 3].filling === cells[i + 6].filling &&
                cells[i].filling !== ''
            ) {
                cells[i].isWinning = true;
                cells[i + 3].isWinning = true;
                cells[i + 6].isWinning = true;
                return true;
            }
        }
        // Проверка диагоналей
        if (cells[0].filling === cells[4].filling &&
            cells[4].filling === cells[8].filling &&
            cells[0].filling !== ''
        ) {
            cells[0].isWinning = true;
            cells[4].isWinning = true;
            cells[8].isWinning = true;
            return true;
        }
        if (cells[2].filling === cells[4].filling &&
            cells[4].filling === cells[6].filling &&
            cells[2].filling !== ''
        ) {
            cells[2].isWinning = true;
            cells[4].isWinning = true;
            cells[6].isWinning = true;
            return true;
        }
    }

    const updateCells = () => {
        setTurn(turn === 'x' ? '0' : 'x');
        setFilled(filled + 1);
        if (checkWinState() || filled === 8) {
            setVisibilityRestart('block');
            setVisibilityText('none');
        }
    }

    const restartGame = () => {
        setVisibilityRestart('none');
        setVisibilityText('inline');
        setFilled(0);
        setCells([]);
        setTimeout(() => setCells(cellsInitialState), 0);
    }

    return (
        <>
            <h1 style={{display: visibilityText}}>Ходят <span style={{color: 'orangered'}}>
                {turn === 'x' ? 'крестики' : 'нолики'}
            </span></h1>
            <button style={{display: visibilityRestart}} onClick={restartGame}>Переиграть</button>
            <div className={'board'}>
                {cells.map((cell, index) => (
                    <Cell currentTurn={turn}
                          updateCells={updateCells}
                          isWinningCell={cell.isWinning}
                          cellIndex={index}
                          changeFill={changeCellFill}
                    />
                ))}
            </div>
        </>
    );
};
export default Board;
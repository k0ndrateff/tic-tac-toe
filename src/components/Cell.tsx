import React, {useState} from "react";

type CellProps = {
    currentTurn: string;
    updateCells: any;
    isWinningCell: boolean;
    cellIndex: number;
    changeFill: (index: number, val: string) => void;
};

const Cell:React.FC<CellProps> = ({ updateCells, currentTurn, isWinningCell, cellIndex, changeFill}) => {
    let [element, setElement] = useState('');
    const handleClick = () => {
        if (element === '') {
            setElement(currentTurn);
            updateCells();
            changeFill(cellIndex, currentTurn);
        }
    }

    return (
        <>
            {isWinningCell ? (
                <div className={'cell winning'} onClick={handleClick}>
                    <img src={element ? element + '.png' : ''} alt={element} />
                </div>
            ) : (
                <div className={'cell'} onClick={handleClick}>
                    <img src={element ? element + '.png' : ''} alt={element} />
                </div>
            )}
        </>
    );
};
export default Cell;
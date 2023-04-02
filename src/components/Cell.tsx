import React, {useState} from "react";

type CellProps = {
    currentTurn: string;
    updateCells: any;
};

const Cell:React.FC<CellProps> = ({ updateCells, currentTurn}) => {
    let [element, setElement] = useState('');
    const handleClick = () => {
        if (element === '') {
            setElement(currentTurn);
            updateCells();
        }
    }

    return (
        <div className={'cell'} onClick={handleClick}>
            <img src={element ? element + '.png' : ''} alt={element} />
        </div>
    );
};
export default Cell;
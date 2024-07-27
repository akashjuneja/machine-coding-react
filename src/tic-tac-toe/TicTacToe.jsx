import React from "react"
import './tictactoe.css'
const TicTacToe=()=>{
    const boardz=[
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ]

    const [board,setBoard]=React.useState(boardz)
    const [isXTurn,setIsXTurn]=React.useState(true)
    const [winner, setWinner] = React.useState(null);

    const handleBoard=(rowIndex,cellIndex)=>{
        if(board[rowIndex][cellIndex]!==null){
            return
        }
        setIsXTurn(!isXTurn)
        const val=isXTurn?'X':'0'
        const newBoard=[...board]
        newBoard[rowIndex][cellIndex]=val
        setBoard(newBoard)
        if (checkWinner(newBoard)) {
            setWinner(val);
            setTimeout(() => setBoard(boardz), 500);
        } else if (isBoardFull(newBoard)) {
            setTimeout(() => setBoard(boardz), 500);
        }
    }

    const isBoardFull = (currentBoard) => {
        return currentBoard.every(row => row.every(cell => cell !== null));
    }

    const checkWinner = (currentBoard) => {
        const winningCombinations = [
            // Rows
            [[0, 0], [0, 1], [0, 2]], // First row
            [[1, 0], [1, 1], [1, 2]], // Second row
            [[2, 0], [2, 1], [2, 2]], // Third row
            // Columns
            [[0, 0], [1, 0], [2, 0]], // First column
            [[0, 1], [1, 1], [2, 1]], // Second column
            [[0, 2], [1, 2], [2, 2]], // Third column
            // Diagonals
            [[0, 0], [1, 1], [2, 2]], // Top-left to bottom-right diagonal
            [[0, 2], [1, 1], [2, 0]]  // Top-right to bottom-left diagonal
        ];
    
        // Check if any winning combination is satisfied
        return winningCombinations.some(combination => {
            const [a, b, c] = combination; // Destructure to get the three cells
            return currentBoard[a[0]][a[1]] &&  // Check if the first cell is not null
                   currentBoard[a[0]][a[1]] === currentBoard[b[0]][b[1]] && // Check if the first cell is equal to the second cell
                   currentBoard[a[0]][a[1]] === currentBoard[c[0]][c[1]];   // Check if the first cell is equal to the third cell
        });
    }
    
    return (
        <div>
        {winner && <div className="winner">Winner: {winner}</div>}
        <div className="board">
            
            {
                board.map((row,rowIndex)=>{
                    return row.map((cell,cellIndex)=>{
                        return (
                            <div className="cell" onClick={()=>{
                                handleBoard(rowIndex,cellIndex)
                            }}>
                                {cell}
                            </div>
                        )
                    })
                })
            }
        </div>
        </div>
    )
}

export default TicTacToe
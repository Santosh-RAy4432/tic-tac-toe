


// const initialGameBoard =[
//     [null,null,null],
//     [null,null,null],
//     [null,null,null],
// ];


export default function Gameboard({onSelectSquare, board}){
// let gameBoard = initialGameBoard;
// for (const turn of turns){
//     const {square, player} = turn;
//     const {row, col} = square;
//     gameBoard[row][col]= player;
// }
//    const[gameBoard, setGameBoard] = useState(initialGameBoard);
//    function handleSelectSquare(rowIndex, colIndex){
//     setGameBoard((prevGameBoard) =>{
//         const updatedBoard =[...prevGameBoard.map(innerArray => [...innerArray])];
//         updatedBoard[rowIndex][colIndex]= activePlayerSymbol;
//         return updatedBoard;

//     }); 
//     onSelectSquare();
//    }
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={()=>onSelectSquare(rowIndex, colIndex)} 
                                disabled = {col !== null}>
                                    {col}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
                        }
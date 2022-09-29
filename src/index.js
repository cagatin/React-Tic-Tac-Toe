import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Square Component - Renders a single <button> (Controlled Component)
function Square(props) {
    return (
        <button
            className="square"
            onClick={() => this.props.onClick()}    //calls Board's handleClick(i) method when clicked
        >
            {this.props.value}
        </button>
    );
}

// Board Component - Renders 9 Squares
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();     //copy the squares array
        squares[i] = 'X';                               //set selected index to 'X'
        this.setState({ squares: squares });            //set the state on the board
    }

    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}     //pass the handleCLick method down to the Square prop;
        />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

// Game component - Renders Board with placeholder values
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div >
            </div >
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Square Component - Renders a single <button>
class Square extends React.Component {

    render() {
        return (
            /* When a square is clicked...
             * the onClick function provided by the PARENT Board component is called (this.handleClick(i))
            */
            <button
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

// Board Component - Renders 9 Squares
class Board extends React.Component {
    /* Who is the winner?
     * The best approach to determine a winner is to STORE the game's STATE in the PARENT Board component rather than the CHILD Square component.
     * The Board component can tell each Square what to display by passing a prop! (Similar to passing a prop form Board to Square via <Square value={i}/> )
     * 
     * To collect data from multiple children...
     * We need to DECLARE the SHARED STATE in their PARENT's component!
     * 
     * The PARENT component can pass the state back down to the CHILDREN by using PROPS!
     *
     * This keeps the CHILD components IN SYNC w/ each other and the parent comopennt.
     */
    constructor(props) {    // We add a constructor to the Board to initialize the state.
        super(props);
        this.state = {
            squares: Array(9).fill(null),       //Creates an array of length 9 containing null values.
        }
    }
    renderSquare(i) {
        /* Here, we call the Square Component to generate buttons
         * We set the value of the button to equal i using the {} syntax.
         * We are simply PASSING A PROP from a PARENT Board Component to the CHILD Square component.
         * this is how information flows in React App! --> From parent to children. 
         * 
         * We will instruct each individual Square of its current value ('X', 'O', null).
         */
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}     //add a function to update the state of the board when the square is clicked
        />;        //each Square will now recieve a 'value' prop that will either be 'X', 'O', or null.
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

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Square Component - Renders a single <button>
class Square extends React.Component {
    /* In order for a Square to 'Remember' that it was clicked and to add an X to it, we utilize a state.
     * React components can have a state by setting 'this.state' in their constructors.
     *  
     */
    constructor(props) {  // We create a constructor to initialize the state
        super(props);     // we call super(props) because Square is a sublcass of the Component class. 
        this.state = {
            value: null
        };
    }

    render() {
        return (
            /* Props --> propertys (parameter of a component)
             * since the Square component looks like so: <Square value={i}>,
             * we access the value via --> this.props.value!
             */
            <button className="square"
                /* Add an event listener to the button which SETS THE STATE (changes the value of the button) to X when clicked.
                 * 
                 * By calling 'this.setState' from an onClick handler in the Square component's render method...
                 * we tell react to re-render that Square whenever its <button> has been clicked.
                 * 
                 * After the update...
                 * The Square's this.state.value will be equal to 'X'!
                 */
                onClick={() => this.setState({ value: 'X' })}
            >
                {this.state.value}
            </button>
        );
    }
}

// Board Component - Renders 9 Squares
class Board extends React.Component {
    renderSquare(i) {
        // Here, we call the Square Component to generate buttons
        // We set the value of the button to equal i using the {} syntax.
        // We are simply PASSING A PROP from a PARENT Board Component to the CHILD Square component.
        // this is how information flows in React App! --> From parent to children. 
        return <Square value={i} />;
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

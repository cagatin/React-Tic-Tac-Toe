import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Square Component - Renders a single <button>
class Square extends React.Component {
    render() {
        return (
            // Props --> propertys (parameter of a component)
            // since the Square component looks like so: <Square value={i}>,
            // we access the value via --> this.props.value!
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}

// Board Component - Renders 9 Squares
class Board extends React.Component {
    renderSquare(i) {
        // Here, we call the Square Component to generate buttons
        // We set the value of the button to equal i using the {} syntax.
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
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

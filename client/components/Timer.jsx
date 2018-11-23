import React from "react";
import Game from "./Game";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: "new",
      remainingSeconds: this.props.initialSeconds,
      selectedIds: []
    };

    this.onPlayAgain = this.onPlayAgain.bind(this);
  }

  componentDidMount() {
    if (this.props.autoPlay) {
      this.startGame();
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  onPlayAgain() {
    this.setState(
      {
        gameStatus: "new",
        remainingSeconds: this.props.initialSeconds,
        selectedIds: []
      },
      () => {
        this.props.restartGame();
        this.startGame();
      }
    );
  }

  startGame = () => {
    if (this.intervalId) clearInterval(this.intervalId);
    this.setState({ gameStatus: "playing" }, () => {
      this.intervalId = setInterval(() => {
        this.setState(prevState => {
          const newRemainingSeconds = prevState.remainingSeconds - 1;
          if (newRemainingSeconds === 0) {
            console.log("start");
            clearInterval(this.intervalId);
            return { gameStatus: "lost", remainingSeconds: 0 };
          }
          return { remainingSeconds: newRemainingSeconds };
        });
      }, 1000);
    });
  };

  currentStepNumbers = [];

  render() {
    const { gameStatus, remainingSeconds } = this.state;
    const current = history[this.state.history];
    return (
      <div className="game">
        <div className="target">{gameStatus === "new" ? "?" : this.target}</div>
        <div className="challenge-steps">
          {this.currentStepNumbers.map((value, index) => (
            <Number
              key={index}
              id={index}
              value={gameStatus === "new" ? "?" : value}
              clickable={this.currentStepNumber(index)}
              onClick={this.history}
            />
          ))}
        </div>
        <div className="footer">
          {gameStatus === "new" ? (
            <button onClick={this.startGame}>Start</button>
          ) : (
            <div className="timer-value">{remainingSeconds}</div>
          )}
          {["won", "lost"].includes(gameStatus) && (
            <button onClick={this.props.onPlayAgain}>Play Again</button>
          )}
        </div>
      </div>
    );
  }
}

export default Timer;

import Guide from "./Guide";
import PlayZone from "./PlayZone";

function Game(): JSX.Element {
    
    return (
        <div className="wrapper">
            <p>Guess The Word</p>
            <div className="game-container">
                <PlayZone />
                <Guide />
            </div>
        </div>
    );
}

export default Game;

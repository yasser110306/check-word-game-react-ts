import Try from "./Try";

function PlayZone(): JSX.Element {
    return (
        <div className="play-zone">
            <div className="tries">
                <Try tryNum={1} />
                <Try tryNum={2} />
                <Try tryNum={3} />
                <Try tryNum={4} />
                <Try tryNum={5} />
            </div>
            <button>Check Word</button>
        </div>
    );
}

export default PlayZone;

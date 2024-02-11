import ColorGuide from "./ColorGuide";

function Guide(): JSX.Element {
    return (
        <div className="guide-container">
            <p>Key Colors</p>
            <div className="color-hint">
                <ColorGuide
                    guideText="Right And In Place"
                    guideBoxColor="#FAA70A"
                />
                <ColorGuide
                    guideText="Right But Not In Place"
                    guideBoxColor="#25B196"
                />
                <ColorGuide guideText="Wrong" guideBoxColor="#1B232F" />
            </div>
        </div>
    );
}

export default Guide;

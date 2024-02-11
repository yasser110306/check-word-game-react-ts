interface guideHintProps {
    guideText: string;
    guideBoxColor: string;
}

function ColorGuide({ guideText, guideBoxColor }: guideHintProps): JSX.Element {
    return (
        <div className="guide-hint-container">
            <span style={{ backgroundColor: guideBoxColor }}></span>
            <p>Letter Is {guideText}.</p>
        </div>
    );
}

export default ColorGuide;

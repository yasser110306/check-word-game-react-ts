import Try from "./Try";
import { CheckInputs, getRandomAnswer } from "../functions/GameLogic";
import { useEffect, useState } from "react";

// gets a random word.
const answer = getRandomAnswer();

function PlayZone(): JSX.Element {
    // updates the number of the try selected in the query.
    const [tryNumber, setTryNumber] = useState(1);

    // updates the active inputs adn pass it to th echeck function.
    const [answerFields, setAnswerFields] = useState<Element[] | null>(null);

    // updates the state only when the check btn is clicked.
    useEffect(() => {
        // updating exictance of the active input.
        const inputs = document.querySelectorAll(`.try[data-trynum="${tryNumber.toString()}"] input `);

        //updating the inputs in the state.
        setAnswerFields(Array.from(inputs));

        // adding active class so it can be easily accessed.
        inputs.forEach((input) => {
            input.classList.add("active");
            input.removeAttribute("readOnly");
        });

        // updating exictance of the unactive input.
        const notActiveInputs = document.querySelectorAll("input:not(.active)");
        // updating the unactive inputs attributes.
        notActiveInputs?.forEach((input) => {
            input.setAttribute("maxlength", "1");
            input.setAttribute("readOnly", "true");
        });
    }, [tryNumber]);
    return (
        <div className="play-zone">
            <div className="tries">
                <Try trynum="1" />
                <Try trynum="2" />
                <Try trynum="3" />
                <Try trynum="4" />
                <Try trynum="5" />
            </div>
            <button
                onClick={() => {
                    CheckInputs(answerFields, answer);
                    if (tryNumber !== 5) {
                        setTryNumber(tryNumber + 1);
                    }
                }}
            >
                Check Word
            </button>
        </div>
    );
}

export default PlayZone;

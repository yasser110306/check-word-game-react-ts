import Try from "./Try";
import { CheckInputs, getRandomAnswer } from "../functions/GameLogic";
import { useEffect, useState } from "react";

// gets a random word.
const answer = getRandomAnswer();

function PlayZone(): JSX.Element {
    // state if the user won or lost.
    const [gameResult, setGameResult] = useState<boolean>(false);

    // state the number of the current try for the selector.
    const [tryNumber, setTryNumber] = useState<number>(1);

    // state if the user ended his tries.
    const [curTry, setCurTry] = useState<number>(1);

    // updates the active inputs and pass it to the check function.
    const [inputs, setInputs] = useState<Element[] | null>(null);

    // updates the state only when the check btn is clicked.
    useEffect(() => {
        // updating exictance of the active input.
        const answerFields = document.querySelectorAll(
            `.try[data-trynum="${tryNumber.toString()}"] input `
        ) as NodeListOf<HTMLInputElement>;

        //updating the inputs in the state.
        setInputs(Array.from(answerFields));

        // focusing in the first input every try.
        answerFields[0].focus();

        // adding active class so it can be easily accessed.
        answerFields.forEach((input) => {
            input.setAttribute("maxlength", "1");
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

    // click event function.
    const handleCheck = () => {
        // cheecks if the user stil have tries.
        if (curTry < 5) {
            // storing the returned data from check inputs function.
            const userState = CheckInputs({ inputs, answer });

            // updating the states  of the current try and user game result.
            setGameResult(userState.userState);
            setCurTry(userState.curTry);
        }

        // go to next try.
        if (tryNumber < 5) {
            setTryNumber(tryNumber + 1);
        }
    };

    return (
        <div className="play-zone">
            <div className="tries">
                <Try trynum="1" />
                <Try trynum="2" />
                <Try trynum="3" />
                <Try trynum="4" />
                <Try trynum="5" />
            </div>
            <button onClick={handleCheck}>Check Word</button>
            {gameResult && <p className="state-alert">Congratulations! You won!</p>}
            {curTry === 5 && !gameResult && <p className="state-alert">Sorry, you lost!</p>}
        </div>
    );
}

export default PlayZone;

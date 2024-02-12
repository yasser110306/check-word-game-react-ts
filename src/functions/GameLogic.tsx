const answers: string[] = [
    "FRAME",
    "GRAZE",
    "WINDY",
    "PAINT",
    "GOURD",
    "SWING",
    "VAPES",
    "READY",
    "PEARS",
    "CHIEF",
    "TOUCH",
    "ROAST",
    "TEARS",
    "MEATS",
    "OUIJA",
    "PIZZA",
];

// type of data coming from the play zone component.
interface Data {
    inputs: Element[] | null;
    answer: string[];
}

function getRandomAnswer(): string[] {
    const answerIndex = Math.floor(Math.random() * answers.length);
    const answer: string = answers[answerIndex];
    const solution: string[] = answer.split("");
    return solution;
}

interface dataToGame {
    userState: boolean;
    curTry: number;
}

// declares the try the user is in.
let curTry: number = 0;

// checks the inputs and judge if they are right or wrong.
function CheckInputs({ inputs, answer }: Data): dataToGame {
    // makes the inputs un accessable after checking.
    inputs?.forEach((input) => {
        input.classList.remove("active");
    });

    // counter of number of in place letters.
    let score: number = 0;

    inputs?.forEach((input) => {
        // make sure that the inputs is not null.
        if (input instanceof HTMLInputElement) {
            const userInput: string = input.value.toUpperCase();

            // check if the letter user enterd exist on the answer.
            if (answer.includes(userInput)) {
                // check if the letter is in place.
                if (inputs.indexOf(input) === answer.indexOf(userInput)) {
                    input.classList.add("in-place");
                    score++;
                } else {
                    input.classList.add("not-in-place");
                }
            } else {
                input.classList.add("wrong");
            }
        }
    });

    // update the number of the current try in the state.
    curTry++;

    // check if the user won and return a boolean.
    const userState: boolean = handleLoseOrWin(score, answer);

    return { userState, curTry };
}

const handleLoseOrWin = (score: number, answer: string[]): boolean => {
    let state: boolean = false;
    // check if user has guessed all the letters.
    if (score === answer.length) {
        state = true;
    }

    return state;
};

// eslint-disable-next-line react-refresh/only-export-components
export { CheckInputs, getRandomAnswer };
export default { CheckInputs, getRandomAnswer };

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

function getRandomAnswer(): string[] {
    const answerIndex = Math.floor(Math.random() * answers.length);
    const answer: string = answers[answerIndex];
    const solution: string[] = answer.split("");
    return solution;
}
// still unfinished...
function CheckInputs(inputs: Element[] | null, answer: string[]): number {
    inputs?.forEach((input) => {
        input.classList.remove("active");
    });
}

// eslint-disable-next-line react-refresh/only-export-components
export { CheckInputs, getRandomAnswer };
export default { CheckInputs, getRandomAnswer };

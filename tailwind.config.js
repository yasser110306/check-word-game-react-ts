/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,tsx}"],
    theme: {
        extend: {
            colors: {
                btn: "#E25433",
                inPlace: "#FAA70A",
                notInPlace: "#25B196",
                primary: "#1B232F",
                secondry: "#E7E7E7",
            },
        },
    },
    plugins: [],
};

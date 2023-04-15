/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/*.{js,jsx}", "./src/UI/*.{js,jsx}", "./src/Characters/*.{js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                'tnr': ['"Times New Roman"'],
                'cursive': ['cursive', 'calibri', 'monospace', 'Georgia']
            },
            colors: {
                'instapurple': '#e1306c',
                'linkedinblue': '#1e4fd6',
                'githubgreen': '#086d15',
            },
            screens: {
                'xs': '400px',
            },
        },
    },
    plugins: [],
}
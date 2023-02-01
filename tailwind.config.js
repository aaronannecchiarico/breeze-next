const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    content: ['./src/**/*.js'],
    darkMode: 'class',
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: ["./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}" , "./src/**/*.{js,ts,jsx,tsx}"],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms'), require("@vechaiui/core")],
}

const sharedConfig = require("tailwind-config/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [sharedConfig],
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./stories/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
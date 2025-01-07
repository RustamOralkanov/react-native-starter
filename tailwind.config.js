/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                "primary-500": "#D6ED17",
                "gray-100": "#F5F5F5",
                "gray-400": "#8F8F8F",
                "gray-900": "#1D1D1D",
            },
            fontFamily: {
                "inter-thin": ["Inter-Thin", "sans-serif"],
                "inter-light": ["Inter-Light", "sans-serif"],
                "inter-bold": ["Inter-Bold", "sans-serif"],
                "inter-medium": ["Inter-Medium", "sans-serif"],
                "inter-regular": ["Inter-Regular", "sans-serif"],
                "inter-semibold": ["Inter-SemiBold", "sans-serif"],
            },
        },
    },
    plugins: [],
};

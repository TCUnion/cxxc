/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['Instrument Serif', 'serif'],
                body: ['Inter', 'sans-serif'],
                mono: ['DM Mono', 'monospace'],
            },
            colors: {
                bg: '#1A1A1D',
                'bg-alt': '#131315',
                accent: '#FF5C00',
                success: '#22C55E',
                text: '#FFFFFF',
                'text-muted': '#A1A1AA',
                'nav-bg': 'rgba(255, 255, 255, 0.08)',
                border: 'rgba(255, 255, 255, 0.15)',
            },
        },
    },
    plugins: [],
}

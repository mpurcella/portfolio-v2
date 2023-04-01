// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                roses: "url('/images/backgrounds/roses-background.png')",
            },
            fontFamily: {
                sans: ['Gotham-Narrow', ...defaultTheme.fontFamily.sans],
            },
            opacity: {
                15: '.18',
            },
            rotate: {
                22.5: '22.5deg',
            },
        },
        colors: {
            transparent: 'transparent',
            black: {
                100: '#1c1d1e',
                200: '#151617',
                300: '#101010',
                400: '#080808',
            },
            grey: {
                100: '#b5b3b3',
                200: '#696969',
            },
            white: '#f8f8f8',
        },
        fontSize: {
            14: ['.875rem'],
            16: ['1rem'],
            18: ['1.125rem'],
            20: ['1.25rem'],
            24: ['1.5rem'],
        },
        spacing: {
            0: '0rem',
            3: '0.188rem',
            8: '.5rem',
            12: '.75rem',
            20: '1.25rem',
            24: '1.5rem',
            28: '1.75rem',
            32: '2rem',
            40: '2.5rem',
            52: '3.25rem',
            60: '3.75rem',
            72: '4.5rem',
            96: '6rem',
            full: '100%',
            screen: '100vh',
        },
    },
    plugins: [
        ({ addComponents, addUtilities, addBase }) => {
            const navLinkBase =
                'uppercase font-medium text-grey-100 transition-colors duration-200 ease-linear hover:text-white';

            addComponents({
                '.navlink': {
                    '&-primary': {
                        [`@apply ${navLinkBase} text-20 md:text-16`]: {},
                    },
                    '&-secondary': {
                        [`@apply ${navLinkBase} border-y border-b-grey-100 border-t-transparent hover:border-b-white text-14`]:
                            {},
                    },
                },
            });
            addUtilities({
                '.navigation-list-transition': {
                    transition: 'right .2s ease-in-out',
                },
                '.hide-scrollbar': {
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                },
            });
            addBase({
                body: {
                    '@apply text-white antialiased leading-none hide-scrollbar': {},
                },
            });
        },
    ],
};

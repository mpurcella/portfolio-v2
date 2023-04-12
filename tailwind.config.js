// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                'mouse-scroll': 'scroll 2s linear infinite',
            },
            borderRadius: {
                xl: '1.5rem',
            },
            borderWidth: {
                1: '1px',
            },
            fontFamily: {
                'proxima-nova': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
                'source-sans-pro': ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                scroll: {
                    '0%': {
                        opacity: 0,
                        top: '0px',
                    },
                    '35%': {
                        opacity: 0,
                        top: '0px',
                    },
                    '50%': {
                        opacity: 1,
                    },
                    '65%': {
                        opacity: 0,
                        top: 'calc(100% - 4px)',
                    },
                    '100%': {
                        opacity: 0,
                        top: 'calc(100% - 4px)',
                    },
                },
            },
            maxWidth: {
                440: '27.5rem',
            },
            opacity: {
                15: '.15',
            },
        },
        colors: {
            transparent: 'transparent',
            black: {
                100: '#141414',
                200: '#101010',
            },
            grey: {
                100: '#e9e9e9',
                200: '#e3e3e3',
                300: '#b5b3b3',
            },
            purple: '#6e07f3',
            red: '#ff073a',
            white: '#f8f8f8',
        },
        fontSize: {
            14: ['0.875rem'],
            16: ['1rem'],
            18: ['1.125rem'],
            20: ['1.25rem'],
            24: ['1.5rem'],
            26: ['1.625rem'],
            28: ['1.75rem'],
            32: ['2rem'],
            36: ['2.25rem'],
            40: ['2.5rem'],
            60: ['3.75rem'],
        },
        spacing: {
            0: '0rem',
            3: '0.188rem',
            4: '0.25rem',
            6: '0.375rem',
            8: '.5rem',
            12: '.75rem',
            16: '1rem',
            20: '1.25rem',
            24: '1.5rem',
            28: '1.75rem',
            32: '2rem',
            40: '2.5rem',
            44: '2.75rem',
            48: '3rem',
            52: '3.25rem',
            60: '3.75rem',
            72: '4.5rem',
            80: '5rem',
            120: '7.5rem',
            full: '100%',
            screen: '100vh',
        },
    },
    plugins: [
        ({ addComponents, addUtilities, addBase }) => {
            const buttonBase =
                'text-16 md:text-18 inline-flex px-32 py-16 transition-colors duration-200 ease-linear border-2 rounded-full font-source-sans-pro uppercase font-semibold outline-none focus-visible:transition-none';

            const navigationLinkBase =
                'transition-colors duration-200 ease-linear outline-none focus-visible:outline-1  focus-visible:outline-purple focus-visible:transition-none';

            const socialLinkBase =
                'block transition-colors duration-200 ease-linear outline-none focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:transition-none';

            addComponents({
                '.button': {
                    '&-primary': {
                        [`@apply ${buttonBase} border-purple text-purple hover:text-white hover:bg-purple
                        focus-visible:bg-purple
                        focus-visible:text-white`]: {},
                    },
                    '&-submitting': {
                        [`@apply ${buttonBase} border-grey-200 text-black-100 bg-grey-200 items-center gap-12`]:
                            {},
                    },
                },
                '.button-link': {
                    '&-primary': {
                        [`@apply ${buttonBase} border-white text-white hover:bg-purple hover:border-purple focus-visible:text-white focus-visible:border-purple focus-visible:bg-purple`]:
                            {},
                    },
                    '&-secondary': {
                        [`@apply ${buttonBase} border-purple text-purple hover:text-white hover:bg-purple focus-visible:text-white focus-visible:bg-purple`]:
                            {},
                    },
                },
                '.loading-spinner': {
                    '@apply flex h-16 w-16 animate-spin rounded-full border-[3px] border-black-100 border-t-transparent text-black-100':
                        {},
                },
                '.navigation-link': {
                    '&-primary': {
                        [`@apply ${navigationLinkBase} text-grey-300 lowercase hover:text-white text-24 font-medium md:text-20 focus-visible:outline-offset-4 focus-visible:text-white`]:
                            {},
                    },
                    '&-secondary': {
                        [`@apply ${navigationLinkBase} text-purple font-bold hover:text-red focus-visible:outline-offset-0 focus-visible:text-red`]:
                            {},
                    },
                    '&-tertiary': {
                        [`@apply ${navigationLinkBase} text-purple font-black hover:text-red focus-visible:outline-offset-0 focus-visible:text-red`]:
                            {},
                    },
                },
                '.social-link': {
                    '&-primary': {
                        [`@apply ${socialLinkBase} text-24 text-grey-300 hover:text-white focus-visible:outline-purple focus-visible:text-white`]:
                            {},
                    },
                    '&-secondary': {
                        [`@apply ${socialLinkBase} text-26 hover:text-purple text-black-100 focus-visible:outline-black-100 focus-visible:text-purple`]:
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
                    '@apply font-proxima-nova antialiased leading-none hide-scrollbar bg-white': {},
                },
            });
        },
    ],
};

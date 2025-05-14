import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

export const content = ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'];
export const theme = {
    extend: {
        fontFamily: {
            serif: ['Merriweather', ..._fontFamily.serif],
        },
        colors: {
            primary: {
                DEFAULT: '#D6A23A', // Gold
                contrast: 'rgba(255,255,255,0.87)',
            },
            secondary: {
                DEFAULT: '#FF7972', // Peach
            },
            info: '#ffffff',
            divider: '#1C1C1D',
            text: {
                primary: 'rgb(245, 242, 235)',
                secondary: '#FF7972',
            },
            background: {
                DEFAULT: '#1C1C1D',
                paper: 'rgba(58,58,61,0.28)',
            },
        },
        backgroundImage: {
            'dark-gradient': 'linear-gradient(135deg, #1C1C1D 0%, #232324 85%, #2A2A2B 98%, #302F35 100%)',
        },
    },
};
export const plugins = [];
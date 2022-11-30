const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    purge: ['./**/*.html'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'belle-flower': '#6460AA',
                'deep-green': '#07575B',
                'deep-blue': '#293655',
                'light-gray': '#E4E2E1',
            },
            boxShadow: {
                't-lg': 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)',
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

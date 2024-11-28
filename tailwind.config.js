/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'main-theme-color': 'var(--main-theme-color)',
                main: '#252728',
                stroke: '#303233',
                title: '#E2E5E9',
                des: '#B0B3B8',
                'neutral-light': '#3A3B3C',
                'neutral-dark': '#3B3D3E',
                success: '#3FBB46',
                error: '#FF3B30',
                'blue-grey-dark': '#24313E',
                'blue-light': '#5AA7FF'
            }
        }
    },
    plugins: []
}

import vueform from '@vueform/vueform/tailwind'

export default {
  content: [
    './index.html',
    './public/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './vueform.config.js', // Đường dẫn đến vueform config
    './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [vueform],
}

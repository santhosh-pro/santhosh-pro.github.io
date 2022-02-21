module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
          colors: {
            primary: "#010101",
          },
    
          fontFamily: {
            jost: ["Jost", "sans-serif"],
            sen: ["Sen", "sans-serif"],
          },
    
          screens: {
            custom: "400px",
          },
        },
      },
    variants: {
      extend: {},
    },
    plugins: [],
};
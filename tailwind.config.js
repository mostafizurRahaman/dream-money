/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
   
      extend: {
         colors: {
            "primary": "#212428", 
            "secondary": "#FF014F", 
            "accent": "#FFFFFF", 
         
         }
      },
   },
   plugins: [],
};

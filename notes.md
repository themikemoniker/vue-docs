## Chapter 2
### creating a portfolio
create your project
`$ pnpm dlx nuxi@latest init <project-name>`
install dependencies
`$ pnpm i`
run dev server with Hot Module Replacement
`$pnpm dev`

recomended extensions
“Vue - Official
				Nuxtr
				Vue VSCode Snippets
				Non-Vue-related extensions”

Excerpt From
Nuxt 3 Projects (for Raymond Rhine)
Kareem Dabbeet , Mahmoud Baalbaki
This material may be protected by copyright.

install tailwindcss extension for vscode using ui

install tailwindcss module for project
`$ pnpm add -D @nuxtjs/tailwindcss tailwindcss@3 postcss autoprefixer`

next, init the tailwind to create the tailwind.config.js
`pnpm exec tailwindcss init -p`

next make some changes to the tailwind.config.js

```
export default {
    content: [],
    theme: {
      extend: {
        colors: {
          primary: '#42B883',
          secondary: '#35495E',
          neutral: '#F7F9FA'
        },
  
        // use Lato Font
        fontFamily: {
          sans: ['Lato', 'sans-serif']
        },
  
        container: {
          center: true,
          padding: {
            DEFAULT: '1.5rem',
            lg: '4rem',
            xl: '4rem',
            '2xl': '4rem'
          },
  
          screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1400px'
          }
        }
      }
    },
    plugins: []
  }
```




import { createGlobalStyle } from 'styled-components'

interface LoadFontProps {
	font: 'Regular' | 'Medium' | 'SemiBold' | 'Black' | 'Bold' | string
}

export function loadFont({ font }: LoadFontProps) {
	return `
    @font-face {
        src: url("/fonts/Poppins/Poppins-${font}.ttf");
        font-family: Poppins-${font};
    }

    font-family: Poppins-${font};    
`
}

export const GlobalStyle = createGlobalStyle`

 

    * {
        padding:0;
        margin:0;
        box-sizing: border-box;
        text-decoration: none;
        ${loadFont({ font: 'Regular' })}
    }

    html {
        font-size: 1.2rem;
    }

    //TODO: PERFECT DEFAULT STYLE FOR THE BLOG
`

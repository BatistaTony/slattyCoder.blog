import React from 'react'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global-style'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp

import React from 'react'
import { QuotedStyled } from './styles'

interface QuoteProps {
	text: string
}

const Quote = ({ text }: QuoteProps) => {
	return (
		<QuotedStyled>
			<h1>
				<span> {text}</span>
			</h1>
		</QuotedStyled>
	)
}

export default Quote

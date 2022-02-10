import React from 'react'
import { QuotedStyled } from './styles'

interface QuoteProps {
	text: string
}

const Quote = ({ text }: QuoteProps) => {
	return (
		<QuotedStyled>
			<p>{text}</p>
		</QuotedStyled>
	)
}

export default Quote

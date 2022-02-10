import styled from 'styled-components'
import { loadFont } from '../../styles/global-style'

export const QuotedStyled = styled.div`
	width: 100%;
	height: auto;
	${loadFont({
		font: 'Bold',
	})}
	color: white;
	font-size: 1.5rem;
	text-align: center;
	padding: 10px;
`

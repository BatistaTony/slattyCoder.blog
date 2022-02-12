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
	display: flex;
	justify-content: center;

	h1 {
		width: 60%;
		font-size: 1.3rem;
		${loadFont({
			font: 'Bold',
		})}
	}

	h1 > span {
		background: ${props => props.theme.colors.card};
		box-decoration-break: clone;
		display: inline;
		color: white;
		line-height: 2;
		box-shadow: ${props => `-10px 0px 0 7px ${props.theme.colors.card},
			10px 0px 0 7px ${props.theme.colors.card}, 0 0 0 7px ${props.theme.colors.card} `};
		box-decoration-break: clone;
	}
`

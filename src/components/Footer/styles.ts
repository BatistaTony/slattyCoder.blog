import styled from 'styled-components'
import { loadFont } from '../../styles/global-style'

export const FooterStyled = styled.footer`
	width: 100%;
	height: 100px;
	background: ${props => props.theme.colors.navbar};
	display: flex;
	align-items: center;
	justify-content: center;

	p {
		${loadFont({
			font: 'Regular',
		})}
		color:white;
		font-size: 1.1rem;
	}
`

import styled from 'styled-components'
import { loadFont } from '../../styles/global-style'

interface NavbarStyledProps {
	isFixed?: boolean
}

export const NavbarStyled = styled.div<NavbarStyledProps>`
	width: 100%;
	height: 100px;
	background: ${props => props.theme.colors.navbar};
	position: ${({ isFixed }) => (isFixed ? 'fixed' : 'relative')};
	left: 0;
	top: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding-left: 30px;
	padding-right: 30px;
`

export const Logo = styled.div`
	width: 100px;
	height: 30px;
	cursor: pointer;

	h1 {
		color: ${props => props.theme.colors.primaryText};
		font-size: 1.2rem;
		${loadFont({ font: 'Bold' })}
	}
`

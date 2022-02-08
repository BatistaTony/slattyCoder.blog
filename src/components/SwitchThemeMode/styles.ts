import styled from 'styled-components'

export const SwitchThemeModeStyled = styled.div`
	width: 60px;
	height: auto;
	background: ${props => props.theme.colors.card};
	position: relative;
	padding: 3px;
	border-radius: 20px;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	align-items: center;
`

interface SwitchCircleStyledProps {
	isDark?: boolean
}

export const SwitchCircleStyled = styled.div<SwitchCircleStyledProps>`
	width: 25px;
	height: 25px;
	background: ${props => props.theme.colors.button};

	border-radius: 20px;
	transition: 0.5s;
	transform: ${({ isDark }) =>
		isDark ? `translateX(26px)` : 'translateX(1px)'};
`

export const ShadowCircleStyled = styled.div<SwitchCircleStyledProps>`
	width: ${({ isDark }) => (isDark ? '75%' : '0')};
	height: 20px;
	position: absolute;
	left: 1px;
	background: red;
	border-radius: 20px;
	z-index: 1;
	transition: 0.5s;
	background: ${props => props.theme.colors.card};
`

import styled from 'styled-components'



export const SwitchThemeModeStyled = styled.div`
	width: 60px;
	height: auto;
	background: green;
	padding: 3px;
	border-radius: 20px;
    cursor: pointer;
`

interface SwitchCircleStyledProps {
    isDark?:boolean
}

export const SwitchCircleStyled = styled.div<SwitchCircleStyledProps>`
	width: 25px;
	height: 25px;
	background: white;
	border-radius: 20px;
	transition: 0.5s;
	transform: ${({ isDark }) =>
		isDark ? `translateX(25px)` : 'translateX(0px)'};
`
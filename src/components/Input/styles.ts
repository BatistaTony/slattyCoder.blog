import styled from 'styled-components'
import { loadFont } from '../../styles/global-style'

export const InputStyled = styled.input`
	width: 100%;
	height: 45px;
	background-color: rgb(0 0 0 / 25%);
	border: none;
	outline: none;
	border-radius: 5px;
	box-sizing: border-box;
	padding-left: 15px;
	padding-right: 15px;
	${loadFont({ font: 'Regular' })};
	color: ${props => props.theme.colors.primaryText};
	margin-top: 20px;
	font-size: 1.1rem;

	&::placeholder {
		color: gray;
	}
`

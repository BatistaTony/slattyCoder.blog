import styled from 'styled-components'
import { loadFont } from '../../styles/global-style'

export const ArticleContainerStyled = styled.div`
	width: 100%;
	height: auto;
	min-height: 100vh;
	box-sizing: border-box;
	padding-left: 10%;
	padding-right: 10%;
	padding-top: 5%;
	background-color: ${props => props.theme.colors.bg};
`

export const ArticleContentContainerStyled = styled.div`
	height: auto;
	width: 100%;
`

export const ArticleTitleStyled = styled.h1`
	color: ${props => props.theme.colors.primaryText};
	font-size: 2.5rem;
	${loadFont({ font: 'Bold' })}
	margin-bottom:20px;
`

export const ArticleCoverStyled = styled.img`
	width: 100%;
	height: 70vh;
	object-fit: cover;
	border-radius: 10px;
`

export const ArticleTextStyled = styled.div`
	width: 100%;
	height: auto;
	margin-top: 3%;
	padding-bottom: 5%;
	color: ${props => props.theme.colors.primaryText};

	p {
		font-size: 1.3rem;
		${loadFont({ font: 'Regular' })}
	}
`

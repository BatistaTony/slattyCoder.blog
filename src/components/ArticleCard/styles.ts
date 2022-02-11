import styled from 'styled-components'
import { loadFont } from '../../styles/global-style'

export const ArticleCardStyled = styled.div`
	width: auto;
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	background: rgb(28 27 36);
	border-radius: 10px;
	padding: 20px;
	cursor: pointer;
`

export const ArticleHeader = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	align-items: center;

	.dot-separator {
		width: 5px;
		height: 5px;
		border-radius: 100%;
		background: gray;
		margin-left: 10px;
		margin-right: 10px;
	}
`
//https://avatars.githubusercontent.com/u/59347824?v=4

interface AuthorAvatarProps {
	url: string
}

export const AuthorAvatar = styled.div<AuthorAvatarProps>`
	width: 25px;
	height: 25px;
	background: ${({ url }) => `url(${url})`};
	border-radius: 100%;
	margin-right: 10px;
	background-position: top center;
	background-size: cover;
`

export const AuthorName = styled.p`
	font-size: 0.8rem;
	${loadFont({ font: 'Regular' })}
	color: ${props => props.theme.colors.primaryText}
`

export const ArticleDate = styled.div`
	font-size: 0.8rem;
	${loadFont({ font: 'Regular' })}
	color: ${props => props.theme.colors.primaryText}
`

export const ArticleCardContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 150px;

	.article-content-txt {
		margin-right: 10px;
		margin-top: 10px;
		width: 100%;
	}
`

export const ArticleCardTitle = styled.div`
	font-size: 1.2rem;
	${loadFont({ font: 'Medium' })};
	color: ${props => props.theme.colors.primaryText};
	white-space: nowrap;
	width: 350px;
	overflow: hidden;
	text-overflow: ellipsis;
`

export const ArticleCardText = styled.div`
	font-size: 0.9rem;
	${loadFont({ font: 'Regular' })}
	margin-top:5px;
	color: ${props => props.theme.colors.primaryText};
`

interface ArticleCardCoverProps {
	url: string
}

export const ArticleCardCover = styled.div<ArticleCardCoverProps>`
	width: 150px;
	height: 150px;
	border-radius: 5px;
	background: ${({ url }) => `url(${url})`};
	background-position: top center;
	background-size: cover;
`

export const ArticleCardFooterContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 10px;
`

export const ArticleCardTech = styled.div`
	padding: 5px;
	background: rgb(115 114 124);
	color: white;
	font-size: 0.6rem;
	${loadFont({ font: 'Medium' })}
	border-radius:50px;
	padding-right: 10px;
	padding-left: 10px;
`

export const ArticleReadingTime = styled.div`
	color: rgb(115 114 124);
	font-size: 0.6rem;
	color: rgb(115 114 124);
	${loadFont({ font: 'Medium' })}
	margin-left: 15px;
`

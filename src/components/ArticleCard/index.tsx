import React from 'react'
import { transformDateToCustomString } from '../../helpers/article'
import { ArticleType } from '../../types/article'
import {
	ArticleCardContainer,
	ArticleCardCover,
	ArticleCardFooterContainer,
	ArticleCardStyled,
	ArticleCardTech,
	ArticleCardText,
	ArticleCardTitle,
	ArticleDate,
	ArticleHeader,
	AuthorAvatar,
	AuthorName,
	ArticleReadingTime,
} from './styles'

interface ArticleCardProps {
	article: ArticleType
}

const ArticleCard = ({ article }: ArticleCardProps) => {
	return (
		<ArticleCardStyled>
			<ArticleHeader>
				<AuthorAvatar url={article.author.cover} />
				<AuthorName>{article.author.name}</AuthorName>
				<div className='dot-separator' />
				<ArticleDate>
					{transformDateToCustomString(article.created_at)}
				</ArticleDate>
			</ArticleHeader>
			<ArticleCardContainer>
				<div className='article-content-txt'>
					<ArticleCardTitle>{article.title}</ArticleCardTitle>
					<ArticleCardText>{article.text}</ArticleCardText>
				</div>
				<ArticleCardCover url={article.cover} />
			</ArticleCardContainer>
			<ArticleCardFooterContainer>
				<ArticleCardTech>{article.tool}</ArticleCardTech>
				<ArticleReadingTime>{article.reading_time} min read</ArticleReadingTime>
			</ArticleCardFooterContainer>
		</ArticleCardStyled>
	)
}

export default ArticleCard

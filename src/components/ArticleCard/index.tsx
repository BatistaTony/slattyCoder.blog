import React from 'react'
import { ArticleType, AuthorType } from '../../types/article'
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
				<AuthorAvatar
					url={'https://avatars.githubusercontent.com/u/59347824?v=4'}
				/>
				<AuthorName>Batista Tone</AuthorName>
				<div className='dot-separator' />
				<ArticleDate>Nov 3, 2022</ArticleDate>
			</ArticleHeader>
			<ArticleCardContainer>
				<div className='article-content-txt'>
					<ArticleCardTitle>
						React Testing Library the best way and some others things
					</ArticleCardTitle>
					<ArticleCardText>
						You might thinked “Why react.js don’t have standard folder
						structure?”. To find answer, you need to understand the difference
						between framework & library. Please refer the below image:-
					</ArticleCardText>
				</div>
				<ArticleCardCover
					url={
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHksr-5GiAAAndYZfTFZIlzbIhuSd9G-nSQ&usqp=CAU'
					}
				/>
			</ArticleCardContainer>
			<ArticleCardFooterContainer>
				<ArticleCardTech>Reactjs</ArticleCardTech>
				<ArticleReadingTime>4 min read</ArticleReadingTime>
			</ArticleCardFooterContainer>
		</ArticleCardStyled>
	)
}

export default ArticleCard

import React from 'react'
import ArticleCard from '../../components/ArticleCard'
import Hero from '../../components/Hero'
import PageLayout from '../../layout'
import { ListArticles, PageContainerStyled } from './styles'

function PageHome() {
	return (
		<PageLayout>
			<Hero />
			<PageContainerStyled>
				<ListArticles>
					{[1, 2, 2, 42, 3, 43, 34, 5, 345, 34, 53, 4, 534, 5, 34].map(() => (
						<ArticleCard />
					))}
				</ListArticles>
			</PageContainerStyled>
		</PageLayout>
	)
}

export default PageHome

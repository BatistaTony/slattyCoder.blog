import React, { useState } from 'react'
import ArticleCard from '../../components/ArticleCard'
import Hero from '../../components/Hero'
import Pagination from '../../components/Pagination'
import PageLayout from '../../layout'
import { articles } from '../../services/articles'
import { ArticleType } from '../../types/article'
import { ListArticles, PageContainerStyled } from './styles'

function PageHome() {
	const [pageSize, setPageSize] = useState(10)
	const [totalItems, setTotalItems] = useState(25)
	const [currentPage, setCurrentPage] = useState(1)

	const onChangePage = page => {
		setCurrentPage(page)
	}

	return (
		<PageLayout>
			<Hero />
			<PageContainerStyled>
				<ListArticles>
					{articles.map(article => (
						<ArticleCard article={article} key={article.id} />
					))}
				</ListArticles>
				<Pagination
					currentPage={currentPage}
					onChangePage={onChangePage}
					pageSize={pageSize}
					totalItems={totalItems}
				/>
			</PageContainerStyled>
		</PageLayout>
	)
}

export default PageHome

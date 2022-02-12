import React, { useState } from 'react'
import ArticleCard from '../../components/ArticleCard'
import Hero from '../../components/Hero'
import Pagination from '../../components/Pagination'
import PageLayout from '../../layout'
import { ArticleType } from '../../types/article'
import { ListArticles, PageContainerStyled } from './styles'

function PageHome() {
	const [pageSize, setPageSize] = useState(10)
	const [totalItems, setTotalItems] = useState(25)
	const [currentPage, setCurrentPage] = useState(1)

	const article: ArticleType = {
		author: {
			cover: '',
			name: 'Batista Tone',
		},
		cover: '',
		created_at: new Date(),
		id: '357346thfjd',
		reading_time: 4,
		text: 'sdjsdf',
		title: '',
	}

	const onChangePage = page => {
		setCurrentPage(page)
	}

	return (
		<PageLayout>
			<Hero />
			<PageContainerStyled>
				<ListArticles>
					{[1, 2, 2, 42, 3, 43, 34, 5, 345, 34, 53, 4, 534, 5, 34].map(item => (
						<ArticleCard article={article} key={item} />
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

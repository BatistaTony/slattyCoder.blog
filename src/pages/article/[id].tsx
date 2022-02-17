import React, { useEffect } from 'react'
import {
	GetStaticPaths,
	GetStaticPathsResult,
	GetStaticProps,
	GetStaticPropsResult,
} from 'next'
import { articles, getArticles } from '../../services/articles'
import { ArticleType } from '../../types/article'
import PageLayout from '../../layout'
import Article from '../../pageComponents/Article'

const ArticlePage = ({ article }) => {
	return (
		<PageLayout>
			<Article />
		</PageLayout>
	)
}

export const getStaticPaths: GetStaticPaths =
	async (): Promise<GetStaticPathsResult> => {
		const params = articles.map(article => ({
			params: {
				id: article.id,
			},
		}))

		return {
			fallback: true,
			paths: [...params],
		}
	}

interface GetStaticPropsResultType {
	article: ArticleType
}

export const getStaticProps: GetStaticProps = async ({
	params,
}): Promise<GetStaticPropsResult<GetStaticPropsResultType>> => {
	const data = articles.find(article => article.id === params.id)

	console.log(await getArticles())

	data.created_at = `${data.created_at}`

	return {
		props: { article: data },
	}
}

export default ArticlePage

import React from 'react'
import {
	GetStaticPaths,
	GetStaticPathsResult,
	GetStaticProps,
	GetStaticPropsResult,
} from 'next'
import { articles } from '../../services/articles'
import { ArticleType } from '../../types/article'
import PageLayout from '../../layout'

const ArticlePage = ({ article }) => {
	console.log(article)
	return <PageLayout>The Article Page</PageLayout>
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

	data.created_at = `${data.created_at}`


	return {
		props: { article: data },
	}
}

export default ArticlePage

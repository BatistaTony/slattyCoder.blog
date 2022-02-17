//TODO GET ARTICLES FUNC

import { ArticleType } from '../types/article'
import { notionClient } from './notion'

export const articles: ArticleType[] = [
	{
		author: {
			cover: 'https://avatars.githubusercontent.com/u/59347824?v=4',
			name: 'Batista Tone',
		},
		cover:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHksr-5GiAAAndYZfTFZIlzbIhuSd9G-nSQ&usqp=CAU',
		created_at: new Date(),
		id: '357346thfjd',
		reading_time: 4,
		text: 'You might thinked “Why react.js dont have standard folder structure?”. To find answer, you need to understand the difference between framework & library. Please refer the below image:-',
		title: 'Reactjs under the hood',
		tool: 'Reactjs',
	},
]

export const getArticles = async dbId => {
	const resp = await notionClient.databases.query({
		database_id: process.env.NEXT_PUBLIC_API_NOTION_DB_ID,
	})

	console.log(resp)

	return resp.results
}

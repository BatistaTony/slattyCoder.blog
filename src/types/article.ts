export interface ArticleType {
	id: string
	title: string
	text: string
	created_at: string | Date
	reading_time: number
	cover: string
	author: AuthorType
	tool: string
}

export interface AuthorType {
	cover: string
	name: string
}

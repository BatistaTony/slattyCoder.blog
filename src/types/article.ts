export interface ArticleType {
	id: string
	title: string
	text: string
	created_at: Date
	reading_time: number
	cover: string
	author: AuthorType
}

export interface AuthorType {
	cover: string
	name: string
}

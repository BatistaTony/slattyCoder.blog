import { Client } from '@notionhq/client'

export const notionClient = new Client({
	auth: process.env.NEXT_PUBLIC_API_NOTION_API,
})

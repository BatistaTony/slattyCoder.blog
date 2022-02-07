import React from 'react'
import { Navbar } from '../components/Navbar'
import { PageLayoutStyled } from './styles'
import Head from 'next/head'

interface PageLayoutProps {
	title: string
	children: React.ReactNode
}

const PageLayout: React.FC = ({
	children,
	title = 'SlattyCoder.blog',
}: PageLayoutProps) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<PageLayoutStyled>
				<Navbar />
				{children}
			</PageLayoutStyled>
		</>
	)
}

export default PageLayout

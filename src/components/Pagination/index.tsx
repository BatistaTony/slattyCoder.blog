import { PaginationContainer, ButtonPagination } from './styles'
import { Pagination as AntDPagination } from 'antd'
import React from 'react'

interface PaginationProps {
	onChangePage: (page: number) => void
	pageSize: number
	currentPage: number
	totalItems: number
}

const Pagination = ({
	onChangePage,
	pageSize,
	currentPage,
	totalItems,
}: PaginationProps) => {
	function handleChange(page: number): void {
		onChangePage(page)
	}

	function itemRenderPagination(
		page: number,
		type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
		originalElement: React.ReactNode
	): React.ReactNode {
		if (type === 'prev') {
			return page > 0 && <ButtonPagination>Previuos</ButtonPagination>
		}
		if (type === 'next') {
			return <ButtonPagination>Next</ButtonPagination>
		}
		return originalElement
	}

	return (
		<PaginationContainer>
			<AntDPagination
				defaultCurrent={1}
				current={currentPage}
				total={totalItems}
				pageSize={pageSize}
				itemRender={itemRenderPagination}
				responsive={true}
				showLessItems={true}
				showSizeChanger={false}
				onChange={handleChange}
			/>
		</PaginationContainer>
	)
}

export default Pagination

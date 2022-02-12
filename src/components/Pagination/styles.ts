import styled from 'styled-components'

export const PaginationContainer = styled.div`
	width: 100%;
	height: auto;
	margin-top: 5%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	max-width: 1920px;

	.ant-pagination {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.ant-pagination-item {
		background: rgba(0, 0, 0, 0.3);
		border: 2px solid ${props => props.theme.colors.card};
		box-sizing: border-box;
		border-radius: 4px;
		display: flex;
		height: 40px;
		width: auto;
		padding-right: 10px;
		padding-left: 10px;
		align-items: center;
		text-align: center;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: .9rem;
		letter-spacing: 0.02em;
		margin-right: 10px;
		cursor: pointer;

		a {
			color: ${props => props.theme.colors.primaryText};
		}
	}

	.ant-pagination-item-active {
		background-color: ${props => props.theme.colors.card};

		a {
			color: ${props => props.theme.colors.primaryText} !important;
		}
	}
`

interface ButtonPaginationProps {
	isPrevious?: boolean
}

export const ButtonPagination = styled.button<ButtonPaginationProps>`
	background: ${props => props.theme.colors.card};
	box-sizing: border-box;
	border-radius: 4px;
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 0.9rem;
	line-height: 100%;
	border: none;
	outline: none;
	height: 40px;
	width: auto;
	padding-right: 15px;
	padding-left: 15px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.02em;
	color: ${props => props.theme.colors.primaryText} !important;
	margin-left: 20px;
	margin-right: 20px;
	cursor: pointer;
`

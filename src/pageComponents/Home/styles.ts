import styled from 'styled-components'

export const PageContainerStyled = styled.div`
	width: 100%;
	height: auto;
	background: black;
	padding: 5%;
	box-sizing: border-box;
`

export const ListArticles = styled.div`
	width: 100%;
	height: auto;
	padding-bottom: 5%;
	display: grid;
	grid-template-columns: repeat(2, 48.5%);
	grid-row-gap: 40px;
	justify-content: space-between;
`

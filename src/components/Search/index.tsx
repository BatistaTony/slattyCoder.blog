import React from 'react'
import Input from '../Input'
import Quote from '../Quote'
import { SearchStyled } from './styles'

const Search = () => {
	return (
		<SearchStyled>
			<Quote text='Never stop Learning !' />
			<Input placeholder='search something here' />
		</SearchStyled>
	)
}

export default Search

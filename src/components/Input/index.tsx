import React, { useRef } from 'react'
import { InputStyled } from './styles'

export interface InputProps extends React.HTMLProps<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ ...props }) => {
	const inputRef = useRef<HTMLInputElement>(null)
	return <InputStyled {...props} ref={inputRef} />
}

export default Input

import React from 'react'
import useToggle from '../../hooks/useToggle'
import SwitchThemeMode from '../SwitchThemeMode'
import { NavbarStyled, Logo } from './styles'

export const Navbar: React.FC = () => {
	const { toggle, isActive } = useToggle(false)

	const handleOnChangeThemeMode = () => {
		console.log('touched')
		toggle()
	}

	return (
		<NavbarStyled>
			<Logo>
				<h1>SlattyCoder.blog</h1>
			</Logo>
			<SwitchThemeMode isDark={isActive} onModeChange={handleOnChangeThemeMode} />
		</NavbarStyled>
	)
}
import React from 'react'
import useToggle from '../../hooks/useToggle'
import SwitchThemeMode from '../SwitchThemeMode'
import { NavbarStyled, Logo } from './styles'
import { useRouter } from 'next/router'

export const Navbar: React.FC = () => {
	const { toggle, isActive } = useToggle(false)

	const router = useRouter()

	const handleOnChangeThemeMode = () => {
		console.log('touched')
		toggle()
	}

	return (
		<NavbarStyled>
			<Logo onClick={() => router.push('/')}>
				<h1>SlattyCoder.blog</h1>
			</Logo>
			<SwitchThemeMode
				isDark={isActive}
				onModeChange={handleOnChangeThemeMode}
			/>
		</NavbarStyled>
	)
}

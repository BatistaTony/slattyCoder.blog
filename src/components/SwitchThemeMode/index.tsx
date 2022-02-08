import React from 'react'
import {
	SwitchThemeModeStyled,
	SwitchCircleStyled,
	ShadowCircleStyled,
} from './styles'

interface SwitchThemeModeProps {
	onModeChange: () => void
	isDark?: boolean
}

const SwitchThemeMode = ({ onModeChange, isDark }: SwitchThemeModeProps) => {
	return (
		<SwitchThemeModeStyled onClick={onModeChange}>
			<ShadowCircleStyled isDark={isDark} />
			<SwitchCircleStyled isDark={isDark} />
		</SwitchThemeModeStyled>
	)
}

export default SwitchThemeMode

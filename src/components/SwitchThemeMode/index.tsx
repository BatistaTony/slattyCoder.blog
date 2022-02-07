import { SwitchThemeModeStyled, SwitchCircleStyled } from './styles'

interface SwitchThemeModeProps {
    onModeChange: ()=> void
    isDark?:boolean
}

const SwitchThemeMode = ({ onModeChange, isDark }: SwitchThemeModeProps) => {
	return (
		<SwitchThemeModeStyled onClick={onModeChange}>
			<SwitchCircleStyled isDark={isDark} />
		</SwitchThemeModeStyled>
	)
}

export default SwitchThemeMode

const baseColors = {
	// GreyScale
	coolgrey00: '#FFFFFF',
	coolgrey30: '#F3F5F8',
	coolgrey40: '#EDF1F5',
	coolgrey60: '#E4E9EE',
	coolgrey100: '#DAE0E6',
	coolgrey300: '#98A5B3',
	coolgrey500: '#6C7680',
	coolgrey700: '#525C66',
	coolgrey800: '#292E33',
	coolgrey900: '#12161A',

	// Primary
	navy100: '#F0F6FB',
	navy300: '#E6ECF3',
	navy400: '#D0DBE8',
	navy500: '#A8B9CD',
	navy600: '#778EAA',
	navy700: '#4D6B8E',
	navy800: '#2D4C72',
	navy850: '#163458',
	navy900: '#002242',

	// Error
	red300: '#FFEEEC',
	red500: '#FFA18B',
	red700: '#EB795E',
	red800: '#D05438',

	orange300: '#FFEEE2',
	orange500: '#FFC6A4',
	orange700: '#FFB77F',
	orange800: '#FFA15C',

	// Success
	green300: '#E5F4EE',
	green500: '#98CFB7',
	green700: '#59BD93',
	green800: '#42B188',
} as const

export const colors = {
	...baseColors,

	// Text
	textPrimary: baseColors.coolgrey800,
	textSecondary: baseColors.coolgrey700,
	textTertiary: baseColors.coolgrey800,
	textEmphasis: baseColors.coolgrey900,
	textPlaceholder: baseColors.coolgrey300,

	// Icon
	iconActive: baseColors.coolgrey800,
	iconInActive: baseColors.coolgrey500,
	iconDisabled: baseColors.coolgrey300,

	// Button
	buttonPrimary: baseColors.navy800,
	buttonPrimaryHover: baseColors.navy850,
	buttonPrimaryActive: baseColors.navy850,

	buttonSecondary: baseColors.coolgrey30,
	buttonSecondaryHover: baseColors.coolgrey40,
	buttonSecondaryActive: baseColors.coolgrey40,

	buttonTertiary: baseColors.navy300,
	buttonTertiaryHover: baseColors.navy400,
	buttonTertiaryActive: baseColors.navy400,

	// Background
	backgroundPrimary: baseColors.coolgrey40,
	backgroundSecondary: baseColors.coolgrey30,
	backgroundDisabled: baseColors.coolgrey300,

	// Line
	linePrimary: baseColors.coolgrey60,
	lineSecondary: baseColors.coolgrey100,

	// System Primary
	error: baseColors.red800,
	warning: baseColors.orange800,
	success: baseColors.green800,
}

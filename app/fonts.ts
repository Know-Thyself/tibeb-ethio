import { Space_Grotesk, Inter, Montserrat } from 'next/font/google'

export const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-space-grotesk',
})

export const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})

export const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

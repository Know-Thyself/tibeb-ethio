import { Inter, Roboto_Mono, Playfair_Display, Montserrat, Raleway } from 'next/font/google'

export const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})

export const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto-mono',
})

export const playfairDisplay = Playfair_Display({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-playfair',
	weight: ['400', '500', '600', '700'],
	style: ['normal'],
})

export const playfairDisplayItalic = Playfair_Display({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-playfair-italic',
	weight: ['400', '500', '600', '700', '800', '900'],
	style: ['italic'],
})

export const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat',
	weight: ['300', '400', '500', '600', '700'],
	style: ['normal'],
})

export const raleway = Raleway({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-raleway',
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	style: ['normal'],
})

import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/navigation/navbar'
import '@/styles/colors.css'
import { spaceGrotesk, inter, montserrat } from '@/app/fonts'

export const metadata: Metadata = {
	title: 'Tibeb Ethiopia',
	description: 'Where everyone is welcome and everything is possible',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={`${spaceGrotesk.variable} ${inter.variable} ${montserrat.variable}`}
		>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	)
}

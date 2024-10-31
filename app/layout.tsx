import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/navigation/navbar'
import '@/styles/colors.css'
import { spaceGrotesk, inter } from '@/app/fonts'
import Footer from '@/components/footer/footer'

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
			className={`${spaceGrotesk.variable} ${inter.variable}`}
		>
			<head>
				<link rel='icon' href='/favicon.png' type='image/png' sizes='32x32' />
			</head>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}

'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import styles from './navbar.module.css'
import MobileMenu from './mobile-menu'
import NavLinks from './desktop-menu'
import { spaceGrotesk, inter } from '@/app/fonts'

export default function Navbar() {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])
	return (
		<nav className={styles.navbar}>
			<div className={styles.navContainer}>
				<Link
					href='/'
					className={`${styles.logo} ${mounted ? spaceGrotesk.className : ''}`}
				>
					TIBEB {''}
					<span
						className={`${styles.highlight} ${
							mounted ? inter.className : ''
						}`}
					>
						ETHIOPIA
					</span>
				</Link>

				{/* Desktop Menu */}
				<NavLinks mounted={mounted} />

				{/* Mobile Menu */}
				<MobileMenu mounted={mounted} />
			</div>
		</nav>
	)
}

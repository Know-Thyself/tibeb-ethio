'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import styles from './navbar.module.css'
import MobileMenu from './mobile-menu'
import DesktopMenu from './desktop-menu'
import { spaceGrotesk, inter } from '@/app/fonts'

export default function Navbar() {
	const [mounted, setMounted] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])
	return (
		<nav className={styles.navbar}>
			<div className={styles.navContainer}>
				<Link
					href='/'
					className={`${styles.logo} ${mounted ? spaceGrotesk.className : ''}`}
					onClick={() => setIsOpen(false)}
				>
					TIBEB {''}
					<span
						className={`${styles.highlight} ${mounted ? inter.className : ''}`}
					>
						ETHIOPIA
					</span>
				</Link>
				<DesktopMenu mounted={mounted} />
				<MobileMenu mounted={mounted} isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</nav>
	)
}

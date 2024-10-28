'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { playfairDisplayItalic } from '@/app/fonts'
import styles from './navbar.module.css'

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()

	const isActive = (path: string) => {
		return pathname === path
	}

	return (
		<nav className={styles.navbar}>
			<div className={`${styles.navContainer} `}>
				{/* Logo */}
				<Link
					href='/'
					className={`${playfairDisplayItalic.className} ${styles.logo}`}
				>
					TIBEB {''}
					<span
						className={`${playfairDisplayItalic.className} ${styles.highlight}`}
					>
						ETHIOPIA
					</span>
				</Link>

				{/* Desktop Menu */}
				<div className={styles.desktopMenu}>
					<Link
						href='/'
						className={`${styles.navLink} ${
							isActive('/') ? styles.active : ''
						}`}
					>
						Home
					</Link>
					<Link
						href='/about'
						className={`${styles.navLink} ${
							isActive('/about') ? styles.active : ''
						}`}
					>
						About
					</Link>
					<Link
						href='/services'
						className={`${styles.navLink} ${
							isActive('/services') ? styles.active : ''
						}`}
					>
						Services
					</Link>
					<Link
						href='/contact'
						className={`${styles.navLink} ${
							isActive('/contact') ? styles.active : ''
						}`}
					>
						Contact
					</Link>
					<button className={styles.ctaButton}>Get Started</button>
				</div>

				{/* Mobile Menu Button */}
				<button
					className={styles.mobileMenuBtn}
					onClick={() => setIsOpen(!isOpen)}
				>
					<span
						className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
					></span>
				</button>

				{/* Mobile Menu */}
				<div className={`${styles.mobileMenu} ${isOpen ? styles.show : ''}`}>
					<Link
						href='/'
						className={`${styles.mobileLink} ${
							isActive('/') ? styles.active : ''
						}`}
						onClick={() => setIsOpen(false)}
					>
						Home
					</Link>
					<Link
						href='/about'
						className={`${styles.mobileLink} ${
							isActive('/about') ? styles.active : ''
						}`}
						onClick={() => setIsOpen(false)}
					>
						About
					</Link>
					<Link
						href='/services'
						className={`${styles.mobileLink} ${
							isActive('/services') ? styles.active : ''
						}`}
						onClick={() => setIsOpen(false)}
					>
						Services
					</Link>
					<Link
						href='/contact'
						className={`${styles.mobileLink} ${
							isActive('/contact') ? styles.active : ''
						}`}
						onClick={() => setIsOpen(false)}
					>
						Contact
					</Link>
					<button className={styles.mobileCta}>Get Started</button>
				</div>
			</div>
		</nav>
	)
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import { montserrat } from '@/app/fonts'

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()

	const isActive = (path: string) => pathname === path

	return (
		<>
			<button
				className={styles.mobileMenuBtn}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span
					className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
				></span>
			</button>

			<div
				className={`${styles.mobileMenu} ${isOpen ? styles.show : ''} ${
					montserrat.className
				}`}
			>
				<Link
					href='/'
					className={`${styles.mobileLink} ${styles.homeLink} ${
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
					href='/projects'
					className={`${styles.mobileLink} ${
						isActive('/projects') ? styles.active : ''
					}`}
					onClick={() => setIsOpen(false)}
				>
					Projects
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
				<button className={styles.mobileCta}>Start Investing</button>
			</div>
		</>
	)
}

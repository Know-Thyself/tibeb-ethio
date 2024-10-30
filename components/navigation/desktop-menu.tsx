'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import { montserrat } from '@/app/fonts'

export default function NavLinks() {
	const pathname = usePathname()

	const isActive = (path: string) => pathname === path

	return (
		<div className={`${styles.desktopMenu} ${montserrat.className}`}>
			<Link
				href='/'
				className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
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
				href='/projects'
				className={`${styles.navLink} ${
					isActive('/projects') ? styles.active : ''
				}`}
			>
				Projects
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
			<button className={styles.ctaButton}>Get Registered</button>
		</div>
	)
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import { inter } from '@/app/fonts'

export default function MobileMenu({ mounted }: { mounted: boolean }) {
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

			<div className={`${styles.mobileMenu} ${isOpen ? styles.show : ''}`}>
				<Link href='/' onClick={() => setIsOpen(false)}>
					<p
						className={`${styles.mobileLink} ${styles.homeLink} ${
							mounted ? inter.className : ''
						} ${isActive('/') ? styles.active : ''}`}
					>
						Home
					</p>
				</Link>
				<Link href='/about' onClick={() => setIsOpen(false)}>
					<p
						className={`${styles.mobileLink} ${
							mounted ? inter.className : ''
						} ${isActive('/about') ? styles.active : ''}`}
					>
						About
					</p>
				</Link>
				<Link href='/projects' onClick={() => setIsOpen(false)}>
					<p
						className={`${styles.mobileLink} ${
							mounted ? inter.className : ''
						} ${isActive('/projects') ? styles.active : ''}`}
					>
						Projects
					</p>
				</Link>
				<Link href='/services' onClick={() => setIsOpen(false)}>
					<p
						className={`${styles.mobileLink} ${
							mounted ? inter.className : ''
						} ${isActive('/services') ? styles.active : ''}`}
					>
						Services
					</p>
				</Link>
				<Link href='/contact' onClick={() => setIsOpen(false)}>
					<p
						className={`${styles.mobileLink} ${
							mounted ? inter.className : ''
						} ${isActive('/contact') ? styles.active : ''}`}
					>
						Contact
					</p>
				</Link>
				<button className={styles.mobileCta}>Start Investing</button>
			</div>
		</>
	)
}

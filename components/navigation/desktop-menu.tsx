import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import { inter } from '@/app/fonts'

export default function NavLinks({ mounted }: { mounted: boolean }) {
	const pathname = usePathname()

	const isActive = (path: string) => pathname === path

	return (
		<div className={styles.desktopMenu}>
			<Link
				href='/'
				className={`${styles.navLink} ${
					isActive('/') ? styles.active : ''
				}`}
			>
				<p className={mounted ? inter.className : ''}>Home</p>
			</Link>
			<Link
				href='/about'
				className={`${styles.navLink} ${
					isActive('/about') ? styles.active : ''
				}`}
			>
				<p className={mounted ? inter.className : ''}>About</p>
			</Link>
			<Link
				href='/projects'
				className={`${styles.navLink} ${
					isActive('/projects') ? styles.active : ''
				}`}
			>
				<p className={mounted ? inter.className : ''}>Projects</p>
			</Link>
			<Link
				href='/services'
				className={`${styles.navLink} ${
					isActive('/services') ? styles.active : ''
				}`}
			>
				<p className={mounted ? inter.className : ''}>Services</p>
			</Link>
			<Link
				href='/contact'
				className={`${styles.navLink} ${
					isActive('/contact') ? styles.active : ''
				}`}
			>
				<p className={mounted ? inter.className : ''}>Contact</p>
			</Link>
			<button className={styles.ctaButton}>Get Registered</button>
		</div>
	)
}

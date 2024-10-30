import Link from 'next/link'
import styles from './navbar.module.css'
import MobileMenu from './mobile-menu'
import NavLinks from './desktop-menu'
import { spaceGrotesk, montserrat } from '@/app/fonts'

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navContainer}>
				<Link href='/' className={`${styles.logo} ${spaceGrotesk.className}`}>
					TIBEB {''}
					<span className={`${styles.highlight} ${montserrat.className}`}>
						ETHIOPIA
					</span>
				</Link>

				{/* Desktop Menu */}
				<NavLinks />

				{/* Mobile Menu */}
				<MobileMenu />
			</div>
		</nav>
	)
}

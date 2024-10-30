'use client'

import styles from './footer.module.css'
import {
	FaTwitter,
	FaLinkedinIn,
	FaGithub,
	FaFacebookF,
	FaInstagram,
} from 'react-icons/fa'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerPattern} />
			<div className={styles.footerContent}>
				<div className={styles.footerSection}>
					<div className={styles.logo}>Tibeb Ethiopia</div>
					<p>Where everyone is welcome and everything is possible</p>
					<div className={styles.socialLinks}>
						<a
							href='#'
							className={styles.socialIcon}
							data-platform='facebook'
							aria-label='Follow us on Facebook'
						>
							<FaFacebookF />
						</a>
						<a
							href='#'
							className={styles.socialIcon}
							data-platform='instagram'
							aria-label='Follow us on Instagram'
						>
							<FaInstagram />
						</a>
						<a
							href='#'
							className={styles.socialIcon}
							data-platform='twitter'
							aria-label='Follow us on Twitter'
						>
							<FaTwitter />
						</a>
						<a
							href='#'
							className={styles.socialIcon}
							data-platform='linkedin'
							aria-label='Follow us on LinkedIn'
						>
							<FaLinkedinIn />
						</a>
						<a
							href='#'
							className={styles.socialIcon}
							data-platform='github'
							aria-label='Follow us on GitHub'
						>
							<FaGithub />
						</a>
					</div>
				</div>

				<div className={styles.footerSection}>
					<h3 className={styles.footerTitle}>Quick Links</h3>
					<ul className={styles.footerLinks}>
						<li className={styles.footerLink}>
							<a href='#'>About Us</a>
						</li>
						<li className={styles.footerLink}>
							<a href='#'>Our Mission</a>
						</li>
						<li className={styles.footerLink}>
							<a href='#'>Projects</a>
						</li>
						<li className={styles.footerLink}>
							<a href='#'>Get Involved</a>
						</li>
					</ul>
				</div>

				<div className={styles.footerSection}>
					<h3 className={styles.footerTitle}>Resources</h3>
					<ul className={styles.footerLinks}>
						<li className={styles.footerLink}>
							<a href='#'>Success Stories</a>
						</li>
						<li className={styles.footerLink}>
							<a href='#'>Community</a>
						</li>
						<li className={styles.footerLink}>
							<a href='#'>Documentation</a>
						</li>
						<li className={styles.footerLink}>
							<a href='#'>Support</a>
						</li>
					</ul>
				</div>

				<div className={styles.footerSection}>
					<h3 className={styles.footerTitle}>Stay Connected</h3>
					<p>Subscribe to our newsletter for updates</p>
					<div className={styles.newsletter}>
						<input
							type='email'
							placeholder='Enter your email'
							className={styles.newsletterInput}
						/>
						<button className={styles.newsletterButton}>Subscribe</button>
					</div>
				</div>
			</div>

			<div className={styles.bottomBar}>
				<p>© {new Date().getFullYear()} Tibeb Ethiopia. All rights reserved.</p>
			</div>
		</footer>
	)
}

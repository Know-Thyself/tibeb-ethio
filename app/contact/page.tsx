import React from 'react'
import styles from './contact.module.css'

export default function Contact() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Contact Us</h1>
			<p className={styles.paragraph}>
				We'd love to hear from you! Here's how you can reach us:
			</p>

			<div className={styles.section}>
				<h2 className={styles.subtitle}>Email</h2>
				<p>[Placeholder: your@email.com]</p>
			</div>

			<div className={styles.section}>
				<h2 className={styles.subtitle}>Phone</h2>
				<p>[Placeholder: +1 (123) 456-7890]</p>
			</div>

			<div className={styles.section}>
				<h2 className={styles.subtitle}>Address</h2>
				<p>[Placeholder: 123 Main St, City, Country, ZIP]</p>
			</div>

			<div className={styles.section}>
				<h2 className={styles.subtitle}>Social Media</h2>
				<p>[Placeholder: Add links to your social media profiles]</p>
			</div>
		</div>
	)
}

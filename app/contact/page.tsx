import React from 'react'
import styles from './contact.module.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Contact() {
	return (
		<div className={styles.container}>
			<div className={styles.contactWrapper}>
				{/* Left side - Contact Form */}
				<div className={styles.formSection}>
					<h1 className={styles.title}>Get in Touch</h1>
					<form className={styles.form}>
						<div className={styles.inputGroup}>
							<input type="text" placeholder="Your Name" required />
						</div>
						<div className={styles.inputGroup}>
							<input type="email" placeholder="Your Email" required />
						</div>
						<div className={styles.inputGroup}>
							<input type="text" placeholder="Subject" required />
						</div>
						<div className={styles.inputGroup}>
							<textarea placeholder="Your Message" rows={5} required></textarea>
						</div>
						<button type="submit" className={styles.submitButton}>
							Send Message
						</button>
					</form>
				</div>

				{/* Right side - Contact Information */}
				<div className={styles.infoSection}>
					<div className={styles.infoCard}>
						<h2 className={styles.subtitle}>Contact Information</h2>
						<div className={styles.contactInfo}>
							<div className={styles.infoItem}>
								<FaEnvelope className={styles.icon} />
								<div>
									<h3>Email</h3>
									<p>your@email.com</p>
								</div>
							</div>
							<div className={styles.infoItem}>
								<FaPhone className={styles.icon} />
								<div>
									<h3>Phone</h3>
									<p>+1 (123) 456-7890</p>
								</div>
							</div>
							<div className={styles.infoItem}>
								<FaMapMarkerAlt className={styles.icon} />
								<div>
									<h3>Address</h3>
									<p>123 Main St, City, Country</p>
								</div>
							</div>
						</div>

						<div className={styles.socialLinks}>
							<h3>Follow Us</h3>
							<div className={styles.socialIcons}>
								<a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
								<a href="#" aria-label="Twitter"><FaTwitter /></a>
								<a href="#" aria-label="Instagram"><FaInstagram /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

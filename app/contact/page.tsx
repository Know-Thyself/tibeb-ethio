'use client'

import React from 'react'
import { spaceGrotesk, inter } from '@/app/fonts'
import {
	FaEnvelope,
	FaPhone,
	FaMapMarkerAlt,
	FaLinkedin,
	FaTwitter,
	FaInstagram,
	FaCheckCircle,
} from 'react-icons/fa'
import { useState, useEffect } from 'react'
import styles from './contact.module.css'

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})
	const [mounted, setMounted] = useState(false)
	const [showAlert, setShowAlert] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			if (response.ok) {
				setShowAlert(true)
				setFormData({
					name: '',
					email: '',
					subject: '',
					message: '',
				})
				setTimeout(() => setShowAlert(false), 3000)
			} else {
				throw new Error('Failed to send message')
			}
		} catch (error) {
			console.error('Error:', error)
			// Handle error (show error message to user)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className={`${styles.container} ${mounted ? inter.className : ''}`}>
			{/* Success Alert */}
			<div className={`${styles.alert} ${showAlert ? styles.show : ''}`}>
				<FaCheckCircle />
				Message sent successfully!
			</div>
			<div className={styles.titleWrapper}>
				<h1
					className={`${styles.title} ${mounted ? spaceGrotesk.className : ''}`}
				>
					Get in Touch
				</h1>
				<p className={styles.subtitle}>Let&#39;s start a conversation</p>
			</div>
			<div className={styles.contactWrapper}>
				{/* Left side - Contact Form */}
				<div className={styles.formSection}>
					<form className={styles.form} onSubmit={handleSubmit}>
						<div className={styles.inputGroup}>
							<input
								type='text'
								name='name'
								value={formData.name}
								onChange={handleChange}
								placeholder='Your Name'
								required
							/>
						</div>
						<div className={styles.inputGroup}>
							<input
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								placeholder='Your Email'
								required
							/>
						</div>
						<div className={styles.inputGroup}>
							<input
								type='text'
								name='subject'
								value={formData.subject}
								onChange={handleChange}
								placeholder='Subject'
								required
							/>
						</div>
						<div className={styles.inputGroup}>
							<textarea
								name='message'
								value={formData.message}
								onChange={handleChange}
								placeholder='Your Message'
								rows={5}
								required
							></textarea>
						</div>
						<button
							type='submit'
							className={styles.submitButton}
							disabled={isSubmitting}
						>
							{isSubmitting ? 'Sending...' : 'Send Message'}
							<div className={styles.buttonSparkle}></div>
						</button>
					</form>
				</div>

				{/* Right side - Contact Information */}
				<div className={styles.infoSection}>
					<div className={styles.infoCard}>
						<h2 className={styles.infoTitle}>Contact Information</h2>
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
								<a href='#' aria-label='LinkedIn'>
									<FaLinkedin />
								</a>
								<a href='#' aria-label='Twitter'>
									<FaTwitter />
								</a>
								<a href='#' aria-label='Instagram'>
									<FaInstagram />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

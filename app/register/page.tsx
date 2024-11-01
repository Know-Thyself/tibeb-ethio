'use client'

import { useState, useEffect } from 'react'
import {
	FiUser,
	FiMail,
	FiLock,
	FiPhone,
	FiGlobe,
	FiDollarSign,
	FiMapPin,
	FiHash,
	FiCreditCard,
	FiCheckCircle,
} from 'react-icons/fi'
import styles from './register.module.css'
import { inter, spaceGrotesk } from '@/app/fonts'

export default function Register() {
	const [mounted, setMounted] = useState(false)
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		password: '',
		confirmPassword: '',
		phone: '',
		city: '',
		postcode: '',
		country: '',
		investmentType: '',
		investmentAmount: '',
	})
	const [showAlert, setShowAlert] = useState(false)

	const investmentTypes = [
		'Angel Investment',
		'Venture Capital',
		'Seed Funding',
		'Series A',
		'Growth Capital',
		'Real Estate',
		'Cryptocurrency',
	]

	useEffect(() => {
		setMounted(true)
	}, [])

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle form submission
		console.log(formData)
		setShowAlert(true)

		// Reset form data
		setFormData({
			fullName: '',
			email: '',
			password: '',
			confirmPassword: '',
			phone: '',
			city: '',
			postcode: '',
			country: '',
			investmentType: '',
			investmentAmount: '',
		})

		// Hide alert after 3 seconds
		setTimeout(() => {
			setShowAlert(false)
		}, 3000)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	return (
		<main className={styles.main}>
			<div className={`${styles.alert} ${showAlert ? styles.show : ''}`}>
				<FiCheckCircle />
				<span>Registration successful!</span>
			</div>
			<div className={styles.container}>
				<h1
					className={`${styles.title} ${mounted ? spaceGrotesk.className : ''}`}
				>
					Get Registered
				</h1>
				<p className={`${styles.subtitle} ${mounted ? inter.className : ''}`}>
					Join our community of entrepreneurs and investors
				</p>

				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.inputGroup}>
						<div className={styles.inputIcon}>
							<FiUser />
						</div>
						<input
							type='text'
							name='fullName'
							placeholder='Full Name'
							value={formData.fullName}
							onChange={handleChange}
							required
							className={mounted ? inter.className : ''}
						/>
						<div className={styles.inputLine}></div>
					</div>

					<div className={styles.inputGroup}>
						<div className={styles.inputIcon}>
							<FiMail />
						</div>
						<input
							type='email'
							name='email'
							placeholder='Email Address'
							value={formData.email}
							onChange={handleChange}
							required
							className={mounted ? inter.className : ''}
						/>
						<div className={styles.inputLine}></div>
					</div>

					<div className={styles.inputGroup}>
						<div className={styles.inputIcon}>
							<FiPhone />
						</div>
						<input
							type='tel'
							name='phone'
							placeholder='Phone Number'
							value={formData.phone}
							onChange={handleChange}
							className={mounted ? inter.className : ''}
						/>
						<div className={styles.inputLine}></div>
					</div>
					<div className={styles.inputGroup}>
						<div className={styles.inputIcon}>
							<FiGlobe />
						</div>
						<input
							type='text'
							name='country'
							placeholder='Country'
							value={formData.country}
							onChange={handleChange}
							className={mounted ? inter.className : ''}
						/>
						<div className={styles.inputLine}></div>
					</div>

					<div className={styles.inputGroup}>
						<div className={styles.inputIcon}>
							<FiMapPin />
						</div>
						<input
							type='text'
							name='city'
							placeholder='City'
							value={formData.city}
							onChange={handleChange}
							className={mounted ? inter.className : ''}
						/>
						<div className={styles.inputLine}></div>
					</div>

					<div className={styles.inputGroup}>
						<div className={styles.inputIcon}>
							<FiHash />
						</div>
						<input
							type='text'
							name='postcode'
							placeholder='Postal Code'
							value={formData.postcode}
							onChange={handleChange}
							className={mounted ? inter.className : ''}
						/>
						<div className={styles.inputLine}></div>
					</div>

					<div className={styles.inputGroup}>
						<div className={styles.inputIcon}>
							<FiLock />
						</div>
						<input
							type='password'
							name='password'
							placeholder='Password'
							value={formData.password}
							onChange={handleChange}
							required
							className={mounted ? inter.className : ''}
						/>
						<div className={styles.inputLine}></div>
					</div>
					<div className={styles.inputGroup}>
						<div className={styles.inputIcon}>
							<FiLock />
						</div>
						<input
							type='password'
							name='confirmPassword'
							placeholder='Confirm Password'
							value={formData.confirmPassword}
							onChange={handleChange}
							required
							className={mounted ? inter.className : ''}
						/>
						<div className={styles.inputLine}></div>
					</div>

					<div className={styles.inputGroup}>
						<div className={styles.inputIcon}>
							<FiDollarSign />
						</div>
						<select
							name='investmentType'
							value={formData.investmentType}
							onChange={handleSelectChange}
							required
							className={mounted ? inter.className : ''}
							disabled
						>
							<option value='' disabled>
								Select Investment Type
							</option>
							{investmentTypes.map(type => (
								<option key={type} value={type}>
									{type}
								</option>
							))}
						</select>
						<div className={styles.inputLine}></div>
					</div>

					<div className={styles.inputGroup}>
						<div className={styles.inputIcon}>
							<FiCreditCard />
						</div>
						<input
							type='number'
							name='investmentAmount'
							placeholder='Investment Amount (USD)'
							value={formData.investmentAmount}
							onChange={handleChange}
							min='0'
							step='1000'
							className={mounted ? inter.className : ''}
							required
						/>
						<div className={styles.inputLine}></div>
					</div>

					<button type='submit' className={styles.submitButton}>
						Register Now
						<div className={styles.buttonSparkle}></div>
					</button>
				</form>
			</div>
		</main>
	)
}

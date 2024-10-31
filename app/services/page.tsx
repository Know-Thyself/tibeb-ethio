'use client'

import { useState, useEffect } from 'react'
import { spaceGrotesk, inter } from '@/app/fonts'
import {
	FaLeaf,
	FaHandsHelping,
	FaLightbulb,
	FaUsers,
	FaHeart,
	FaGlobe,
} from 'react-icons/fa'
import styles from './services.module.css'

const services = [
	{
		title: 'Community Development',
		description:
			'Building stronger communities through grassroots initiatives and local engagement programs',
		gradient: 'linear-gradient(135deg, #FF6B6B, #FFE66D)',
		icon: FaUsers,
		categories: [
			'Neighborhood Programs',
			'Cultural Events',
			'Local Initiatives',
		],
		impact: '50+ Communities Served',
		featured: true,
		alignRight: false,
	},
	{
		title: 'Environmental Projects',
		description:
			'Creating sustainable solutions and green initiatives for a better tomorrow',
		gradient: 'linear-gradient(135deg, #4CAF50, #81C784)',
		icon: FaLeaf,
		categories: ['Sustainability', 'Conservation', 'Green Energy'],
		impact: '30% Carbon Reduction',
	},
	{
		title: 'Social Innovation',
		description:
			'Developing creative solutions to address pressing social challenges',
		gradient: 'linear-gradient(135deg, #7B1FA2, #E1BEE7)',
		icon: FaLightbulb,
		categories: ['Social Enterprise', 'Innovation Labs', 'Impact Solutions'],
		impact: '200+ Projects Launched',
		featured: true,
		alignRight: true,
	},
	{
		title: 'Volunteer Programs',
		description:
			'Connecting passionate individuals with meaningful volunteer opportunities',
		gradient: 'linear-gradient(135deg, #FF5722, #FFA726)',
		icon: FaHandsHelping,
		categories: ['Youth Programs', 'Senior Support', 'Crisis Response'],
		impact: '10,000+ Volunteers',
	},
	{
		title: 'Health & Wellness',
		description:
			'Promoting community health and wellness through accessible programs',
		gradient: 'linear-gradient(135deg, #26A69A, #80DEEA)',
		icon: FaHeart,
		categories: ['Mental Health', 'Fitness Programs', 'Nutrition'],
		impact: '15,000+ Participants',
	},
	{
		title: 'Global Initiatives',
		description:
			'Creating international connections and fostering global citizenship',
		gradient: 'linear-gradient(135deg, #1565C0, #64B5F6)',
		icon: FaGlobe,
		categories: ['Cultural Exchange', 'Global Projects', 'Education'],
		impact: '25+ Countries Reached',
		featured: true,
		alignRight: false,
	},
]

export default function Services() {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return (
		<div className={styles.container}>
			<h1
				className={`${mounted ? spaceGrotesk.className : ''} ${styles.title}`}
			>
				Our Services
			</h1>
			<p className={`${mounted ? inter.className : ''} ${styles.subtitle}`}>
				Making a difference through innovative community solutions
			</p>

			<div className={styles.servicesGrid}>
				{services.map((service, index) => (
					<div
						key={index}
						className={`${styles.serviceCard} ${
							service.featured ? styles.featured : ''
						}`}
						data-align-right={service.featured ? service.alignRight : undefined}
					>
						<div
							className={styles.imageBox}
							style={{ background: service.gradient }}
						>
							<div
								className={`${styles.placeholderText} ${
									mounted ? spaceGrotesk.className : ''
								}`}
							>
								Visual representation of {service.title}
							</div>
							<service.icon className={styles.serviceIcon} />
						</div>

						<div
							className={`${styles.content} ${mounted ? inter.className : ''}`}
						>
							<h3
								className={`${styles.serviceTitle} ${
									mounted ? spaceGrotesk.className : ''
								}`}
							>
								{service.title}
							</h3>
							<p className={styles.description}>{service.description}</p>

							<div className={styles.categories}>
								{service.categories.map((category, idx) => (
									<span key={idx} className={styles.category}>
										{category}
									</span>
								))}
							</div>

							<div className={styles.impactBadge}>{service.impact}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

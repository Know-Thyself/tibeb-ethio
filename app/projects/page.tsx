'use client'

import { useState, useEffect } from 'react'
import { spaceGrotesk } from '@/app/fonts'
import {
	FaArrowRight,
	FaHandsHelping,
	FaUsers,
	FaChartLine,
} from 'react-icons/fa'
import styles from './projects.module.css'

const projects = [
	{
		title: 'Community Garden Network',
		description:
			'A digital platform connecting urban gardeners with local communities, facilitating resource sharing and knowledge exchange',
		gradient: `linear-gradient(135deg, var(--neutral-700), var(--primary-400))`,
		tags: ['Community', 'Sustainability', 'Urban Agriculture'],
		location: 'Vancouver, BC',
		status: 'Active',
		featured: true,
		alignRight: false,
		participants: 234,
		impact: '2.5 tons of food produced',
	},
	{
		title: 'Senior Tech Connect',
		description:
			'Teaching digital literacy to seniors through personalized one-on-one sessions and group workshops',
		gradient: `linear-gradient(135deg, var(--neutral-600), var(--secondary-300))`,
		tags: ['Education', 'Seniors', 'Technology'],
		location: 'Edmonton, AB',
		status: 'Active',
		participants: 156,
		impact: '1000+ seniors helped',
	},
	{
		title: 'Elder Stories Archive',
		description:
			"Digital preservation of elderly citizens' life stories through interactive multimedia storytelling",
		gradient: `linear-gradient(135deg, var(--secondary-500), var(--info))`,
		tags: ['Cultural Heritage', 'Oral History', 'Community'],
		location: 'Toronto, ON',
		status: 'Active',
		featured: true,
		alignRight: true,
		participants: 312,
		impact: '500+ stories preserved',
	},
	{
		title: 'SkillBridge',
		description:
			'Connecting retired professionals with youth for mentorship and skill-sharing in underserved communities',
		gradient: `linear-gradient(135deg, var(--neutral-700), var(--accent-600))`,
		tags: ['Education', 'Mentorship', 'Social Impact'],
		location: 'Montreal, QC',
		status: 'Active',
	},
	{
		title: 'Local Art Collective',
		description:
			'Virtual gallery space showcasing local artists and facilitating community art projects',
		gradient: `linear-gradient(135deg, var(--neutral-700), var(--primary-500))`,
		tags: ['Arts', 'Culture', 'Community Events'],
		location: 'Vancouver, BC',
		status: 'Active',
	},
	{
		title: 'Food Waste Warriors',
		description:
			'Connecting restaurants with food banks and shelters to reduce waste and feed communities',
		gradient: `linear-gradient(135deg, var(--neutral-750), var(--secondary-300))`,
		tags: ['Sustainability', 'Food Security', 'Social Impact'],
		location: 'Toronto, ON',
		status: 'Active',
	},
	{
		title: 'Neighborhood Watch 2.0',
		description:
			'Modern community safety platform with emergency alerts and resource sharing',
		gradient: `linear-gradient(135deg, var(--neutral-700), var(--accent-600))`,
		tags: ['Safety', 'Community', 'Emergency Response'],
		location: 'Montreal, QC',
		status: 'Active',
	},
	{
		title: 'Youth Sports Initiative',
		description:
			'Free sports programs and equipment sharing for underprivileged youth, promoting health and team building',
		gradient: `linear-gradient(135deg, var(--secondary-500), var(--info))`,
		tags: ['Youth', 'Sports', 'Health'],
		location: 'Calgary, AB',
		status: 'Active',
		featured: true,
	},
	{
		title: 'Indigenous Crafts Market',
		description:
			'Digital marketplace supporting Indigenous artisans and preserving traditional craft techniques',
		gradient: `linear-gradient(135deg, var(--info), var(--secondary-400))`,
		tags: ['Indigenous', 'Culture', 'Commerce'],
		location: 'Winnipeg, MB',
		status: 'Active',
	},
	{
		title: 'Mental Health Buddies',
		description:
			'Peer support network connecting individuals for mental health support and community building',
		gradient: `linear-gradient(135deg, var(--neutral-700), var(--primary-400))`,
		tags: ['Mental Health', 'Support', 'Community'],
		location: 'Halifax, NS',
		status: 'Active',
	},
	{
		title: 'Green Transit Initiative',
		description:
			'Community carpooling and bike-sharing program reducing carbon footprint',
		gradient: `linear-gradient(135deg, var(--neutral-700), var(--secondary-300))`,
		tags: ['Environment', 'Transportation', 'Sustainability'],
		location: 'Ottawa, ON',
		status: 'Active',
		featured: true,
		alignRight: false,
		participants: 789,
		impact: '-45% CO2 emissions',
	},
	{
		title: 'Intergenerational Learning Hub',
		description:
			'Connecting students with senior experts for knowledge exchange and mentorship',
		gradient: `linear-gradient(135deg, var(--neutral-700), var(--accent-500))`,
		tags: ['Education', 'Mentorship', 'Community'],
		location: 'Victoria, BC',
		status: 'Active',
		participants: 423,
		impact: '200+ partnerships',
	},
]

export default function Projects() {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return (
		<div className={styles.container}>
			<h1 className={`${styles.title} ${mounted ? spaceGrotesk.className : ''}`}>
				Community Projects
			</h1>
			<p className={styles.subtitle}>Making a difference together</p>

			<div className={styles.projectsGrid}>
				{projects.map((project, index) => (
					<div
						key={index}
						className={`${styles.projectCard} ${
							project.featured ? styles.featured : ''
						}`}
						data-align-right={project.alignRight}
					>
						<div
							className={styles.imageWrapper}
							style={{ background: project.gradient }}
						>
							<div className={`${styles.placeholderText} ${mounted ? spaceGrotesk.className : ''}`}>
								Image for {project.title}
							</div>
							<div className={styles.overlay}>
								<div className={styles.links}>
									<button className={styles.actionButton}>
										<FaHandsHelping /> Get Involved
									</button>
									<button className={styles.actionButton}>
										<FaArrowRight /> Learn More
									</button>
								</div>
							</div>
						</div>
						<div className={styles.content}>
							<h3
								className={`${styles.projectTitle} ${mounted ? spaceGrotesk.className : ''}`}
							>
								{project.title}
							</h3>
							<p className={styles.description}>{project.description}</p>
							<div className={styles.projectMeta}>
								<span className={styles.location}>{project.location}</span>
								<span className={styles.status}>{project.status}</span>
							</div>
							<div className={styles.projectStats}>
								<span className={styles.statItem}>
									<FaUsers /> {project.participants} Participants
								</span>
								<span className={styles.statItem}>
									<FaChartLine /> {project.impact}
								</span>
							</div>
							<div className={styles.tags}>
								{project.tags.map((tag, tagIndex) => (
									<span key={tagIndex} className={styles.tag}>
										{tag}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

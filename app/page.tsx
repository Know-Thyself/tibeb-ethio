'use client'

import React, { useState, useEffect } from 'react'
import styles from './page.module.css'
import abstractData from '@/abstract.json'
import { inter, spaceGrotesk } from '@/app/fonts'
import {
	FaNetworkWired,
	FaBook,
	FaIndustry,
	FaPiggyBank,
	FaBalanceScale,
	FaHandHoldingHeart,
	FaLightbulb,
} from 'react-icons/fa' // Add other icons as needed
import ScrollAnimation from '@/components/scroll-animation'

const subItemStyles = {
	'Organization & Networking': {
		icon: FaNetworkWired,
		gradient: 'linear-gradient(135deg, var(--primary-500), var(--primary-600))',
	},
	'Knowledge & Information': {
		icon: FaBook,
		gradient:
			'linear-gradient(135deg, var(--secondary-500), var(--secondary-600))',
	},
	'Market & Production Networks': {
		icon: FaIndustry,
		gradient: 'linear-gradient(135deg, var(--accent-600), var(--accent-500))',
	},
	'Capital & Capital Network': {
		icon: FaPiggyBank,
		gradient: 'linear-gradient(135deg, var(--primary-500), var(--primary-600))',
	},
	'Good Governance, Business Ethics & Peace': {
		icon: FaBalanceScale,
		gradient:
			'linear-gradient(135deg, var(--secondary-500), var(--secondary-600))',
	},
	'Affirmative Action': {
		icon: FaHandHoldingHeart,
		gradient: 'linear-gradient(135deg, var(--accent-600), var(--accent-500))',
	},
}

interface Paragraph {
	pillars: Record<string, string | object>
}

export default function Home() {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])
	const { title, subtitle, paragraphs } = abstractData[0]
	const Bold = ({ children }: { children: React.ReactNode }) => {
		return <span className={mounted ? inter.className : ''}>{children}</span>
	}

	function parseItalics(text: string) {
		return text.split(/\*([^*]+)\*/).map((part, index) =>
			index % 2 === 0 ? (
				<span key={`text-${index}`}>{part}</span>
			) : (
				<strong key={`italic-${index}`}>
					<em>{part}</em>
				</strong>
			)
		)
	}

	return (
		<main className={styles.main}>
			<div className={styles.hero}>
				<div className={styles.heroPattern} />
				<h1
					className={`${styles.title} ${mounted ? inter.className : ''}`}
				>
					<Bold>
						{title.split('TIBEB').map((part, i) => (
							<React.Fragment key={i}>
								{part.toUpperCase()}
								{i === 0 && (
									<span
										className={`${styles.tibeb} ${
											mounted ? spaceGrotesk.className : ''
										}`}
									>
										TIBEB
									</span>
								)}
							</React.Fragment>
						))}
					</Bold>
				</h1>
				<h2
					className={`${styles.subtitle} ${
						mounted ? spaceGrotesk.className : ''
					}`}
				>
					{subtitle.toUpperCase()}
				</h2>
			</div>
			<ScrollAnimation />
			<section className={`${styles.section} ${styles.fadeInSection}`}>
				<h1
					className={`${mounted ? spaceGrotesk.className : ''} ${
						styles.pageTitle
					}`}
				>
					Our Mission
				</h1>
				{/* ... */}
			</section>
			<section
				className={`${styles.section} ${mounted ? inter.className : ''}`}
			>
				{paragraphs.map((paragraph: string | Paragraph, index: number) => (
					<div key={index} className={styles.paragraph}>
						{typeof paragraph === 'string' ? (
							<p lang='en'>{parseItalics(paragraph)}</p>
						) : (
							<div className={styles.pillarsWrapper}>
								{Object.entries(paragraph.pillars).map(([key, value]) => (
									<div
										key={key}
										className={`${styles.pillarCard} ${styles.fadeInSection}`}
									>
										<div
											className={styles.pillarHeader}
											style={{
												background:
													subItemStyles[key as keyof typeof subItemStyles]
														?.gradient ||
													'linear-gradient(135deg, #4a90e2, #87ceeb)',
											}}
										>
											{(() => {
												const IconComponent =
													subItemStyles[key as keyof typeof subItemStyles]
														?.icon || FaLightbulb
												return <IconComponent className={styles.pillarIcon} />
											})()}
											<h3 className={styles.pillarTitle}>{key}</h3>
										</div>
										<div className={styles.pillarContent}>
											{typeof value === 'string'
												? value
												: JSON.stringify(value)}
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				))}
			</section>
			<section className={`${styles.section} ${styles.fadeInSection}`}>
				<div className={styles.stats}>
					<div className={styles.statNumber}>100+</div>
					<div className={styles.statNumber}>50K+</div>
					<div className={styles.statNumber}>25+</div>
				</div>
			</section>
		</main>
	)
}

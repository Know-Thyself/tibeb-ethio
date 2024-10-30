'use client'

import React, { useState } from 'react'
import styles from './page.module.css'
import abstractData from '@/abstract.json'
import { inter, spaceGrotesk, montserrat } from '@/app/fonts'
import {
	FaNetworkWired,
	FaBook,
	FaIndustry,
	FaPiggyBank,
	FaBalanceScale,
	FaHandHoldingHeart,
	FaLightbulb,
} from 'react-icons/fa' // Add other icons as needed

const subItemStyles = {
	'Organization & Networking': {
		icon: FaNetworkWired,
		gradient: 'linear-gradient(135deg, #6366f1, #a855f7)',
	},
	'Knowledge & Information': {
		icon: FaBook,
		gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
	},
	'Market & Production Networks': {
		icon: FaIndustry,
		gradient: 'linear-gradient(135deg, #14b8a6, #22c55e)',
	},
	'Capital & Capital Network': {
		icon: FaPiggyBank,
		gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
	},
	'Good Governance & business Ethics & Peace': {
		icon: FaBalanceScale,
		gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
	},
	'Affirmative Action': {
		icon: FaHandHoldingHeart,
		gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
	},
}

interface Paragraph {
	pillars: Record<string, string | object>
}

export default function Home() {
	const { title, subtitle, paragraphs } = abstractData[0]
	const Bold = ({ children }: { children: React.ReactNode }) => {
		return <span className={montserrat.className}>{children}</span>
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
				<h1 className={`${styles.title} ${montserrat.className}`}>
					<Bold>
						{title.split('TIBEB').map((part, i) => (
							<React.Fragment key={i}>
								{part.toUpperCase()}
								{i === 0 && (
									<span className={`${styles.tibeb} ${spaceGrotesk.className}`}>
										TIBEB
									</span>
								)}
							</React.Fragment>
						))}
					</Bold>
				</h1>
				<h2 className={`${styles.subtitle} ${spaceGrotesk.className}`}>
					{subtitle.toUpperCase()}
				</h2>
			</div>
			<section className={`${styles.section} ${inter.className}`}>
				{paragraphs.map((paragraph: string | Paragraph, index: number) => (
					<div key={index} className={styles.paragraph}>
						{typeof paragraph === 'string' ? (
							<p lang="en">{parseItalics(paragraph)}</p>
						) : (
							<div className={styles.pillarsWrapper}>
								{Object.entries(paragraph.pillars).map(([key, value]) => (
									<div key={key} className={styles.pillarCard}>
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
		</main>
	)
}

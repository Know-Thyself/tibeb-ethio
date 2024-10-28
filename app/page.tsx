import React from 'react'
import styles from './page.module.css'
import abstractData from '@/abstract.json'
import { playfairDisplayItalic, montserrat, raleway } from '@/app/fonts'

export default function Home() {
	const { title, subtitle, paragraphs } = abstractData[0]

	return (
		<main className={styles.main}>
			<div className={styles.hero}>
				<h1 className={`${styles.title} ${playfairDisplayItalic.className}`}>
					{title.toUpperCase()}
				</h1>
				<h2 className={`${styles.subtitle} ${raleway.className}`}>
					{subtitle.toUpperCase()}
				</h2>
			</div>
			<section className={`${styles.section} ${raleway.className}`}>
				{paragraphs.map((paragraph: string | Object, index: number) => (
					<div key={index} className={styles.paragraph}>
						{typeof paragraph === 'string' ? (
							<p>{paragraph}</p>
						) : (
							Object.entries(paragraph).map(([key, value]) => (
								<ul key={key} className={styles.pillars}>
									<li className={styles.listItem}>
										<strong>
											{key}
											{':- '}
										</strong>
										{typeof value === 'string' ? value : JSON.stringify(value)}
									</li>
								</ul>
							))
						)}
					</div>
				))}
			</section>
		</main>
	)
}

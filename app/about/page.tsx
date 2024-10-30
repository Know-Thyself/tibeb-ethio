import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'

export default function About() {
	return (
		<div className={styles.container}>
			<section className={styles.hero}>
				<h1 className={styles.title}>About Tibeb Ethiopia</h1>
				<p className={styles.subtitle}>
					Crafting Excellence, Preserving Heritage
				</p>
			</section>

			<section className={styles.grid}>
				<div className={styles.textBox}>
					<h2 className={styles.heading2}>Our Story</h2>
					<p className={styles.paragraph}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at
						nisi ut tellus sagittis hendrerit.
					</p>
				</div>
				<div className={styles.imageBox}>
					{/* Placeholder for image */}
					<div className={styles.imagePlaceholder}>Image 1</div>
				</div>

				<div className={styles.imageBox}>
					{/* Placeholder for image */}
					<div className={styles.imagePlaceholder}>Image 2</div>
				</div>
				<div className={styles.textBox}>
					<h2 className={styles.heading2}>Our Mission</h2>
					<p className={styles.paragraph}>
						Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam.
					</p>
				</div>

				<div className={styles.fullWidth}>
					<h2 className={styles.heading2}>Our Values</h2>
					<div className={styles.valuesGrid}>
						<div className={styles.valueCard}>
							<h3 className={styles.heading3}>Innovation</h3>
							<p className={styles.paragraph}>Pushing boundaries</p>
						</div>
						<div className={styles.valueCard}>
							<h3 className={styles.heading3}>Heritage</h3>
							<p className={styles.paragraph}>Preserving culture</p>
						</div>
						<div className={styles.valueCard}>
							<h3 className={styles.heading3}>Quality</h3>
							<p className={styles.paragraph}>Excellence in craft</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

import React from 'react'
import styles from './about.module.css'

export default function About() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>About Tibeb Ethiopia</h1>
			<p className={styles.paragraph}>
				Welcome to Tibeb Ethiopia, where everyone is welcome and everything is
				possible.
			</p>
			<p className={styles.paragraph}>
				[Placeholder: Add more information about your organization, mission, and
				values here.]
			</p>
			<p className={styles.paragraph}>
				[Placeholder: Include a brief history or any other relevant details
				about Tibeb Ethiopia.]
			</p>
		</div>
	)
}

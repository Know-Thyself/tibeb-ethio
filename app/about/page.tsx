'use client'

import React from 'react'
import styles from './about.module.css'
import { motion } from 'framer-motion'
import { IoImageOutline } from 'react-icons/io5';

export default function About() {
	return (
		<main className={styles.container}>
			<section className={styles.hero}>
				<motion.h1 
					className={styles.title}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					About Tibeb Ethiopia
				</motion.h1>
				<motion.p 
					className={styles.subtitle}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					Crafting Excellence, Preserving Heritage
				</motion.p>
			</section>

			<section className={styles.grid}>
				<motion.div 
					className={styles.textBox}
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className={styles.heading2}>Our Story</h2>
					<p className={styles.paragraph}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at
						nisi ut tellus sagittis hendrerit.
					</p>
				</motion.div>
				<motion.div 
					className={styles.imageBox}
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className={styles.placeholderImage}>
						<div className={styles.placeholderContent}>
							<IoImageOutline size={24} />
							<span>Our Story Image</span>
						</div>
					</div>
				</motion.div>

				<motion.div 
					className={styles.imageBox}
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className={styles.placeholderImage}>
						<div className={styles.placeholderContent}>
							<IoImageOutline size={24} />
							<span>Our Mission Image</span>
						</div>
					</div>
				</motion.div>
				<motion.div 
					className={styles.textBox}
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className={styles.heading2}>Our Mission</h2>
					<p className={styles.paragraph}>
						Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam.
					</p>
				</motion.div>

				<motion.div 
					className={styles.fullWidth}
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<h2 className={styles.heading2}>Our Values</h2>
					<div className={styles.valuesGrid}>
						<motion.div 
							className={styles.valueCard}
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<h3 className={styles.heading3}>Innovation</h3>
							<p className={styles.paragraph}>
								Embracing new ideas and technologies to create better solutions
							</p>
						</motion.div>
						<motion.div 
							className={styles.valueCard}
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<h3 className={styles.heading3}>Heritage</h3>
							<p className={styles.paragraph}>
								Preserving and celebrating our rich cultural traditions
							</p>
						</motion.div>
						<motion.div 
							className={styles.valueCard}
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<h3 className={styles.heading3}>Quality</h3>
							<p className={styles.paragraph}>
								Maintaining excellence in everything we do
							</p>
						</motion.div>
					</div>
				</motion.div>
			</section>
		</main>
	)
}

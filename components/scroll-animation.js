'use client'

import { useEffect } from 'react'

export default function ScrollAnimation() {
	useEffect(() => {
		const observerCallback = entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible')
				}
			})
		}

		const observerOptions = {
			threshold: 0.1,
		}

		const observer = new IntersectionObserver(observerCallback, observerOptions)

		document.querySelectorAll('.fadeInSection').forEach(element => {
			observer.observe(element)
		})

		return () => observer.disconnect()
	}, [])

	return null
}

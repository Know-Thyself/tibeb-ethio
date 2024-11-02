import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
	try {
		const { name, email, subject, message } = await request.json()

		// Create transporter
		const transporter = nodemailer.createTransport({
			service: 'gmail', // or your email service
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		})

		// Email content
		const mailOptions = {
			from: process.env.EMAIL_USER,  // Your verified email
			to: process.env.RECIPIENT_EMAIL,
			replyTo: email,  // User's email address
			subject: `Contact Form: ${subject}`,
			html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>From:</strong> ${name} (${email})</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
		}

		// Send email
		await transporter.sendMail(mailOptions)

		return NextResponse.json(
			{ message: 'Email sent successfully' },
			{ status: 200 }
		)
	} catch (error) {
		console.error('Error:', error)
		return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
	}
}

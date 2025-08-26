import { NextRequest, NextResponse } from 'next/server'
import { validateContactForm, sanitizeContactForm, type ContactFormData } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json()
    
    // Validate the form data
    const validation = validateContactForm(formData)
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: validation.errors 
        }, 
        { status: 400 }
      )
    }

    // Sanitize the form data
    const sanitizedData = sanitizeContactForm(formData)

    // Log the contact form submission (in production, send an email)
    console.warn('📧 Contact form submission:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      company: sanitizedData.company,
      interestArea: sanitizedData.interestArea,
      message: sanitizedData.message,
      timestamp: new Date().toISOString()
    })

    // In production, you would send an email here:
    /*
    try {
      // Send email to Hero Point Consulting
      await sendEmail({
        to: 'partners@heropointconsulting.com',
        subject: `Contact Form: ${sanitizedData.interestArea} - ${sanitizedData.name}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Company:</strong> ${sanitizedData.company || 'Not provided'}</p>
          <p><strong>Interest Area:</strong> ${sanitizedData.interestArea}</p>
          <p><strong>Message:</strong></p>
          <p>${sanitizedData.message.replace(/\n/g, '<br>')}</p>
        `,
      })

      // Send auto-reply to customer
      await sendEmail({
        to: sanitizedData.email,
        subject: 'Thank you for contacting Hero Point Consulting',
        html: `
          <p>Dear ${sanitizedData.name},</p>
          <p>Thank you for your interest in Hero Point Consulting. We have received your message and will respond within 24 hours.</p>
          <p>Best regards,<br>Hero Point Consulting Team</p>
        `,
      })
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
    }
    */

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will respond within 24 hours.'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' }, 
      { status: 500 }
    )
  }
}
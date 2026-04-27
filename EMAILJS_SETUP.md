# EmailJS Setup Guide

Your contact form is now configured to send emails to **mohamed.khaled6083@gmail.com**. Follow these steps to get it working:

## Step 1: Create EmailJS Account

1. Visit [emailjs.com](https://www.emailjs.com)
2. Click "Sign Up" and create a free account
3. Verify your email

## Step 2: Get Your Public Key

1. Go to Dashboard → Account → API Keys
2. Copy your **Public Key**
3. In [Contact.tsx](src/pages/Contact.tsx), replace `YOUR_PUBLIC_KEY_HERE` with this value

## Step 3: Create an Email Service

1. Go to Dashboard → Email Services
2. Click "Add Service"
3. Select your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID** (looks like: `service_xxxxx`)
6. In [Contact.tsx](src/pages/Contact.tsx), replace `YOUR_SERVICE_ID_HERE` with this value

## Step 4: Create an Email Template

1. Go to Dashboard → Email Templates
2. Click "Create New Template"
3. Name it something like "Portfolio Contact Form"
4. Copy your **Template ID** (looks like: `template_xxxxx`)
5. Update the template with these variables:
    - `{{to_email}}` - recipient email
    - `{{from_name}}` - sender's name
    - `{{from_email}}` - sender's email
    - `{{message}}` - message content

6. In [Contact.tsx](src/pages/Contact.tsx), replace `YOUR_TEMPLATE_ID_HERE` with this value

### Example Template Content:

```
From: {{from_name}} ({{from_email}})

Message:
{{message}}
```

## Step 5: Test It Out

1. Save your changes to [Contact.tsx](src/pages/Contact.tsx)
2. Run `npm run dev` to start your development server
3. Go to your Contact page
4. Fill out the form and click "Send Message"
5. Check your email at **mohamed.khaled6083@gmail.com**

## Troubleshooting

- **"Failed to send message" error**: Check that all three credentials (Public Key, Service ID, Template ID) are correctly set
- **Email not arriving**: Check your spam folder and make sure your email service is properly configured in EmailJS
- **Console errors**: Open browser DevTools (F12) → Console tab to see detailed error messages

## Important Notes

- Keep your Public Key safe (it's technically public-facing in the browser, but don't share it unnecessarily)
- EmailJS has a free tier with 200 emails/month - perfect for a portfolio
- You can view all sent emails in your EmailJS dashboard

import { z } from 'zod';

// Define environment variable schema
const envSchema = z.object({
  // EmailJS Configuration
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: z.string().optional(),
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: z.string().optional(),
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z.string().optional(),

  // Google Analytics (optional)
  NEXT_PUBLIC_GA_ID: z.string().optional(),

  // Google Site Verification (optional)
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: z.string().optional(),
});

// Parse and validate environment variables
const envValidation = envSchema.safeParse({
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
});

// Throw error if validation fails
if (!envValidation.success) {
  console.error('❌ Invalid environment variables:', envValidation.error.flatten().fieldErrors);
  throw new Error('Invalid environment variables');
}

// Export validated environment variables
export const env = envValidation.data;

// Helper to check if EmailJS is configured
export const isEmailJSConfigured = () => {
  return !!(
    env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
    env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
    env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  );
};

// Helper to check if Google Analytics is configured
export const isGoogleAnalyticsConfigured = () => {
  return !!env.NEXT_PUBLIC_GA_ID;
};

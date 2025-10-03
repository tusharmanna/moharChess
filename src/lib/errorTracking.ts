// Error tracking utilities
// Can be extended to integrate with services like Sentry, LogRocket, etc.

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string | null;
  url?: string;
  userAgent?: string;
  timestamp: string;
}

export function logError(error: Error, errorInfo?: { componentStack?: string | null }) {
  const errorData: ErrorInfo = {
    message: error.message,
    stack: error.stack,
    componentStack: errorInfo?.componentStack,
    url: typeof window !== 'undefined' ? window.location.href : undefined,
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
    timestamp: new Date().toISOString(),
  };

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error tracked:', errorData);
  }

  // In production, you could send to an error tracking service
  // Example: sendToSentry(errorData);
  // Example: sendToLogRocket(errorData);

  // For now, we'll just store in sessionStorage for debugging
  if (typeof window !== 'undefined') {
    try {
      const errors = JSON.parse(sessionStorage.getItem('app_errors') || '[]');
      errors.push(errorData);
      // Keep only last 10 errors
      if (errors.length > 10) {
        errors.shift();
      }
      sessionStorage.setItem('app_errors', JSON.stringify(errors));
    } catch {
      // Fail silently if sessionStorage is not available
    }
  }

  return errorData;
}

export function getStoredErrors(): ErrorInfo[] {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    return JSON.parse(sessionStorage.getItem('app_errors') || '[]');
  } catch {
    return [];
  }
}

export function clearStoredErrors() {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('app_errors');
  }
}

// Track page views
export function trackPageView(url: string) {
  if (process.env.NODE_ENV === 'development') {
    console.log('Page view:', url);
  }

  // Can integrate with analytics services here
  // Example: gtag('config', GA_ID, { page_path: url });
}

// Track custom events
export function trackEvent(eventName: string, eventData?: Record<string, unknown>) {
  if (process.env.NODE_ENV === 'development') {
    console.log('Event tracked:', eventName, eventData);
  }

  // Can integrate with analytics services here
  // Example: gtag('event', eventName, eventData);
}

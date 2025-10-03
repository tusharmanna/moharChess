// Common types used across the application

// Contact Form
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactFormState {
  data: ContactFormData;
  isSubmitting: boolean;
  error: string | null;
  success: boolean;
}

// Navigation
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

// Course/Class Types
export interface CourseLevel {
  title: string;
  description: string;
  features: string[];
}

export interface PricingPackage {
  name: string;
  price: number;
  sessions?: number;
  duration?: string;
  features: string[];
  discount?: number;
  popular?: boolean;
}

// Tournament
export interface Tournament {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  registrationLink?: string;
}

// Gallery Item
export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  category?: 'tournament' | 'camp' | 'class' | 'event';
}

// Testimonial
export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating?: number;
  avatar?: string;
}

// Event
export interface ChessEvent {
  id: string;
  title: string;
  date: string;
  startTime?: string;
  endTime?: string;
  location: string;
  description: string;
  category: 'tournament' | 'workshop' | 'camp' | 'lecture';
  registrationRequired: boolean;
  registrationLink?: string;
  imageUrl?: string;
}

// Schema.org Types
export interface Organization {
  '@context': string;
  '@type': string;
  name: string;
  alternateName?: string;
  description: string;
  url: string;
  logo?: string;
  image?: string;
  telephone?: string;
  email?: string;
  address?: PostalAddress;
  founder?: Person;
  offers?: Offer[];
  sameAs?: string[];
}

export interface PostalAddress {
  '@type': string;
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  streetAddress?: string;
  postalCode?: string;
}

export interface Person {
  '@type': string;
  name: string;
  jobTitle?: string;
  description?: string;
  image?: string;
}

export interface Offer {
  '@type': string;
  itemOffered: Course;
  price?: string;
  priceCurrency?: string;
}

export interface Course {
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
  };
}

// Component Props
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  onClose: () => void;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Metadata Types
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
}

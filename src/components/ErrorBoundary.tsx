'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import Link from 'next/link';
import { FaExclamationTriangle, FaHome, FaRedo } from 'react-icons/fa';
import { logError } from '@/lib/errorTracking';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to tracking system
    logError(error, { componentStack: errorInfo.componentStack });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full bg-white rounded-lg shadow-2xl p-8">
            {/* Error Icon */}
            <div className="text-center mb-6">
              <FaExclamationTriangle className="text-red-500 text-6xl mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-800 font-playfair mb-2">
                Oops! Something Went Wrong
              </h1>
              <p className="text-gray-600">
                We encountered an unexpected error. Don&apos;t worry, we&apos;re working on it!
              </p>
            </div>

            {/* Error Details (only in development) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Error Details:</h3>
                <pre className="text-xs text-red-600 overflow-auto max-h-40">
                  {this.state.error.toString()}
                </pre>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <FaRedo />
                <span>Try Again</span>
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center space-x-2 border-2 border-teal-800 text-teal-800 hover:bg-teal-800 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <FaHome />
                <span>Go Home</span>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 text-sm mb-2">
                If this problem persists, please contact us:
              </p>
              <a
                href="mailto:mohar.chess@gmail.com"
                className="text-orange-500 hover:text-orange-600 font-semibold"
              >
                mohar.chess@gmail.com
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

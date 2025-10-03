'use client';

import { useEffect } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0" />;
      case 'error':
        return <FaExclamationCircle className="text-red-500 text-2xl flex-shrink-0" />;
      case 'info':
        return <FaInfoCircle className="text-blue-500 text-2xl flex-shrink-0" />;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'info':
        return 'bg-blue-50 border-blue-200';
    }
  };

  const getTextColor = () => {
    switch (type) {
      case 'success':
        return 'text-green-800';
      case 'error':
        return 'text-red-800';
      case 'info':
        return 'text-blue-800';
    }
  };

  return (
    <div
      className={`
        fixed top-4 right-4 z-50 max-w-md w-full
        ${getBackgroundColor()}
        border rounded-lg shadow-lg p-4
        animate-slide-in-right
      `}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start space-x-3">
        {getIcon()}
        <div className="flex-1">
          <p className={`${getTextColor()} font-medium`}>{message}</p>
        </div>
        <button
          onClick={onClose}
          className={`${getTextColor()} hover:opacity-70 transition-opacity`}
          aria-label="Close notification"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

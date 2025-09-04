'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function PrivateClassRegistration() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    middleName: '',
    lastName: '',
    chessLevel: '',
    studentGrade: '',
    schoolName: '',
    gender: '',
    dateOfBirth: '',
    streetAddress: '',
    city: '',
    state: 'United States',
    zip: '',
    country: '',
    uscfId: '',
    uscfExpiration: '',
    uscfRating: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/forms-and-links" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Enroll</span>
          </Link>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Step 1 of 4</span>
            <span className="text-sm text-blue-600 font-medium">20%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '20%' }}></div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {/* Logo */}
          <div className="text-center mb-6">
            <Image 
              src="/images/mohar.jpg" 
              alt="Mohar Chess Logo" 
              width={100} 
              height={100} 
              className="rounded-full shadow-lg mx-auto"
            />
          </div>
          <h1 className="text-3xl font-bold text-center mb-8 border-b-2 border-gray-200 pb-4">
            Private Class Registration Form
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Player Contact Details Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Player Contact Details</h2>
              
              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">(Required)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Student Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Name <span className="text-red-500">(Required)</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <label className="text-xs text-gray-500 mt-1">First</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleInputChange}
                      placeholder="Middle"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <label className="text-xs text-gray-500 mt-1">Middle</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <label className="text-xs text-gray-500 mt-1">Last</label>
                  </div>
                </div>
              </div>

              {/* Chess Level */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chess Level <span className="text-red-500">(Required)</span>
                </label>
                <select
                  name="chessLevel"
                  value={formData.chessLevel}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Choose One</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>

              {/* Student Grade */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Grade <span className="text-red-500">(Required)</span>
                </label>
                <select
                  name="studentGrade"
                  value={formData.studentGrade}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Choose One</option>
                  <option value="pre-k">Pre-K</option>
                  <option value="kindergarten">Kindergarten</option>
                  <option value="1st">1st Grade</option>
                  <option value="2nd">2nd Grade</option>
                  <option value="3rd">3rd Grade</option>
                  <option value="4th">4th Grade</option>
                  <option value="5th">5th Grade</option>
                  <option value="6th">6th Grade</option>
                  <option value="7th">7th Grade</option>
                  <option value="8th">8th Grade</option>
                  <option value="9th">9th Grade</option>
                  <option value="10th">10th Grade</option>
                  <option value="11th">11th Grade</option>
                  <option value="12th">12th Grade</option>
                  <option value="adult">Adult</option>
                </select>
              </div>

              {/* Student School Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student School Name <span className="text-red-500">(Required)</span>
                </label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Gender */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender <span className="text-red-500">(Required)</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Choose One</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              {/* Student Date of Birth */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Date of Birth <span className="text-red-500">(Required)</span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Address */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address <span className="text-red-500">(Required)</span>
                </label>
                
                {/* Street Address */}
                <div className="mb-3">
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    placeholder="Street Address"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <label className="text-xs text-gray-500 mt-1">Street Address</label>
                </div>

                {/* City, State, Zip */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                  <div>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <label className="text-xs text-gray-500 mt-1">City</label>
                  </div>
                  <div>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="United States">United States</option>
                      <option value="Alabama">Alabama</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Florida">Florida</option>
                      <option value="Tennessee">Tennessee</option>
                      <option value="Other">Other</option>
                    </select>
                    <label className="text-xs text-gray-500 mt-1">State</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      placeholder="Zip"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <label className="text-xs text-gray-500 mt-1">Zip</label>
                  </div>
                </div>

                {/* Country */}
                <div>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="Country"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <label className="text-xs text-gray-500 mt-1">Country</label>
                </div>
              </div>

              {/* USCF ID */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student USCF ID
                </label>
                <input
                  type="text"
                  name="uscfId"
                  value={formData.uscfId}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* USCF Expiration Date */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student USCF Expiration Date
                </label>
                <input
                  type="date"
                  name="uscfExpiration"
                  value={formData.uscfExpiration}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* USCF Rating */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student USCF Rating
                </label>
                <input
                  type="number"
                  name="uscfRating"
                  value={formData.uscfRating}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors font-medium"
              >
                NEXT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

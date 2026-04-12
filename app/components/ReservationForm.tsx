'use client';

import { useState } from 'react';
import { FormData, FormErrors, validateForm } from './ReservationForm.utils';

export default function ReservationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    console.log('Reservation submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Reservation Confirmed!</h2>
          <p className="text-green-700 mb-4">
            Thank you for choosing Little Lemon. We&apos;ve received your reservation request and will confirm it shortly.
          </p>
          <p className="text-sm text-green-600">
            A confirmation email will be sent to {formData.email}
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
          >
            Make Another Reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Make a Reservation</h1>
        <p className="text-gray-600 mb-8">
          Reserve your table at Little Lemon and enjoy an authentic Mediterranean dining experience.
        </p>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {Object.keys(errors).length > 0 ? (
            <div className="rounded-md bg-red-50 border border-red-200 p-4 text-sm text-red-700" role="alert" aria-live="assertive">
              Please fix the highlighted fields before submitting.
            </div>
          ) : null}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Enter your first name"
                aria-invalid={Boolean(errors.firstName)}
              />
              {errors.firstName ? (
                <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Enter your last name"
                aria-invalid={Boolean(errors.lastName)}
              />
              {errors.lastName ? (
                <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>
              ) : null}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="your.email@example.com"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email ? (
                <p className="text-sm text-red-600 mt-1">{errors.email}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="(555) 123-4567"
                aria-invalid={Boolean(errors.phone)}
              />
              {errors.phone ? (
                <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
              ) : null}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                aria-invalid={Boolean(errors.date)}
              />
              {errors.date ? (
                <p className="text-sm text-red-600 mt-1">{errors.date}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                Time *
              </label>
              <select
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                aria-invalid={Boolean(errors.time)}
              >
                <option value="">Select time</option>
                <option value="17:00">5:00 PM</option>
                <option value="17:30">5:30 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="18:30">6:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="20:30">8:30 PM</option>
                <option value="21:00">9:00 PM</option>
              </select>
              {errors.time ? (
                <p className="text-sm text-red-600 mt-1">{errors.time}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                Number of Guests *
              </label>
              <select
                id="guests"
                name="guests"
                required
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                aria-invalid={Boolean(errors.guests)}
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7">7 Guests</option>
                <option value="8">8+ Guests</option>
              </select>
              {errors.guests ? (
                <p className="text-sm text-red-600 mt-1">{errors.guests}</p>
              ) : null}
            </div>
          </div>

          <div>
            <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
              Special Requests
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Any special dietary requirements, celebrations, or other requests..."
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="acceptedTerms"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              className="mt-1 h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
              aria-invalid={Boolean(errors.acceptedTerms)}
            />
            <label htmlFor="acceptedTerms" className="text-sm text-gray-700">
              I agree to the restaurant&apos;s cancellation policy and terms of service *
            </label>
          </div>
          {errors.acceptedTerms ? (
            <p className="text-sm text-red-600 mt-1">{errors.acceptedTerms}</p>
          ) : null}

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-700 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            Reserve Table
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            For parties larger than 8 guests or special events, please call us directly at (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  );
}
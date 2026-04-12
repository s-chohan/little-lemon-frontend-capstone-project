export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequests: string;
  acceptedTerms: boolean;
};

export type FormErrors = Partial<Record<keyof FormData, string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;

export function validateForm(data: FormData): FormErrors {
  const validationErrors: FormErrors = {};
  const today = new Date();
  const selectedDate = data.date ? new Date(data.date) : null;

  if (!data.firstName.trim()) {
    validationErrors.firstName = 'First name is required.';
  }

  if (!data.lastName.trim()) {
    validationErrors.lastName = 'Last name is required.';
  }

  if (!data.email.trim()) {
    validationErrors.email = 'Email address is required.';
  } else if (!emailRegex.test(data.email)) {
    validationErrors.email = 'Enter a valid email address.';
  }

  if (!data.phone.trim()) {
    validationErrors.phone = 'Phone number is required.';
  } else if (!phoneRegex.test(data.phone)) {
    validationErrors.phone = 'Enter a valid phone number.';
  }

  if (!data.date) {
    validationErrors.date = 'Reservation date is required.';
  } else if (selectedDate && selectedDate < new Date(today.toDateString())) {
    validationErrors.date = 'Reservation date must be today or later.';
  }

  if (!data.time) {
    validationErrors.time = 'Reservation time is required.';
  }

  if (!data.guests || Number(data.guests) < 1) {
    validationErrors.guests = 'Please select the number of guests.';
  }

  if (!data.acceptedTerms) {
    validationErrors.acceptedTerms = 'You must agree to the terms before submitting.';
  }

  return validationErrors;
}

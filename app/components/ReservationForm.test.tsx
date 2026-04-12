import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReservationForm from './ReservationForm';
import { validateForm, FormData } from './ReservationForm.utils';

describe('validateForm', () => {
  const buildForm = (overrides: Partial<FormData> = {}): FormData => ({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    phone: '+15551234567',
    date: new Date().toISOString().split('T')[0],
    time: '18:00',
    guests: '2',
    specialRequests: 'Window seat',
    acceptedTerms: true,
    ...overrides,
  });

  it('returns no errors for a valid reservation', () => {
    const result = validateForm(buildForm());
    expect(result).toEqual({});
  });

  it('returns errors for missing required fields', () => {
    const result = validateForm(buildForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      acceptedTerms: false,
    }));

    expect(result.firstName).toBe('First name is required.');
    expect(result.lastName).toBe('Last name is required.');
    expect(result.email).toBe('Email address is required.');
    expect(result.phone).toBe('Phone number is required.');
    expect(result.date).toBe('Reservation date is required.');
    expect(result.time).toBe('Reservation time is required.');
    expect(result.guests).toBe('Please select the number of guests.');
    expect(result.acceptedTerms).toBe('You must agree to the terms before submitting.');
  });

  it('returns errors for an invalid email and phone number', () => {
    const result = validateForm(buildForm({
      email: 'invalid-email',
      phone: 'abc123',
    }));

    expect(result.email).toBe('Enter a valid email address.');
    expect(result.phone).toBe('Enter a valid phone number.');
  });

  it('returns an error when the date is in the past', () => {
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0];
    const result = validateForm(buildForm({ date: yesterday }));

    expect(result.date).toBe('Reservation date must be today or later.');
  });
});

describe('ReservationForm', () => {
  it('renders the form and shows validation messages when submitted empty', async () => {
    const user = userEvent.setup();
    render(<ReservationForm />);

    await user.click(screen.getByRole('button', { name: /reserve table/i }));

    expect(screen.getByRole('alert')).toHaveTextContent(
      /please fix the highlighted fields before submitting/i
    );
    expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/last name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email address is required/i)).toBeInTheDocument();
    expect(screen.getByText(/phone number is required/i)).toBeInTheDocument();
    expect(screen.getByText(/reservation date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/reservation time is required/i)).toBeInTheDocument();
    expect(screen.getByText(/you must agree to the terms/i)).toBeInTheDocument();
  });

  it('submits successfully when the form is filled out correctly', async () => {
    const user = userEvent.setup();
    render(<ReservationForm />);

    await user.type(screen.getByLabelText(/first name/i), 'Jane');
    await user.type(screen.getByLabelText(/last name/i), 'Doe');
    await user.type(screen.getByLabelText(/email/i), 'jane.doe@example.com');
    await user.type(screen.getByLabelText(/phone number/i), '+15551234567');
    const today = new Date().toISOString().split('T')[0];
    await user.type(screen.getByLabelText(/date/i), today);
    await user.selectOptions(screen.getByLabelText(/time/i), '18:00');
    await user.selectOptions(screen.getByLabelText(/number of guests/i), '2');
    await user.click(screen.getByLabelText(/i agree to the restaurant/i));
    await user.click(screen.getByRole('button', { name: /reserve table/i }));

    expect(screen.getByText(/reservation confirmed/i)).toBeInTheDocument();
    expect(screen.getByText(/a confirmation email will be sent to jane.doe@example.com/i)).toBeInTheDocument();
  });
});

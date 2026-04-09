import Header from '../components/Header';
import Footer from '../components/Footer';
import ReservationForm from '../components/ReservationForm';

export default function Reservations() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReservationForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <Menu />
      <Testimonials />
      <Reservation />
      <Footer />
    </div>
  );
}

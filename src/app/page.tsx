import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

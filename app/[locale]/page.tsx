import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Metrics from '@/components/sections/Metrics';
import HowItWorks from '@/components/sections/HowItWorks';
import UseCases from '@/components/sections/UseCases';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Metrics />
      <HowItWorks />
      <UseCases />
      <ContactCTA />
      <Footer />
    </main>
  );
}

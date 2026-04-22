import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Fundamentals } from '@/components/Fundamentals';
import { InstallationGuide } from '@/components/InstallationGuide';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Header />
      <Hero />
      <Fundamentals />
      <InstallationGuide />
      <Footer />
    </main>
  );
}
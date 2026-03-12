import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
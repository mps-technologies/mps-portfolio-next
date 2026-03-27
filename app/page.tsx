import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { ClientWork } from "./components/ClientWork";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-dark)' }}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ClientWork />
        <About />
      </main>
      <Footer />
    </div>
  );
}

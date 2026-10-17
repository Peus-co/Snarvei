import About from './components/About';
import Categories from './components/Categories';
import Business from './components/Business';
import Hero from './components/Hero';
import How from './components/How';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen w-full bg-black">
      
        <Hero />
        <About/>
        <Categories/>
        <Business/>
        <How/>
        <Footer/>
        
    </main>
  );
}
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Docs from './components/Docs';
import Community from './components/Community';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <Features />
        <Docs />
        <Community />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
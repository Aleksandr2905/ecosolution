import About from './components/About/About';
import Cases from './components/Cases/Cases';
import Contact from './components/Contact/Contact';
import Electricity from './components/Electricity/Electricity';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <Header />
      <main>
        <Main />
        <About />
        <Electricity />
        <Cases />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

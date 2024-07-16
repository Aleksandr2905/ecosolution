import About from './sections/About/About';
import Cases from './sections/Cases/Cases';
import Contact from './sections/Contact/Contact';
import Electricity from './sections/Electricity/Electricity';
import Faq from './sections/Faq/Faq';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import Main from './sections/Main/Main';

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

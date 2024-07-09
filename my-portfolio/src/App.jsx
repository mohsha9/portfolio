import './App.css';
import NavBar from './components/NavBar/navBar';
import ProfileInfo from './components/Home/home';
import About from './components/About/about';
import Project from './components/Project/project';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <main className='bg-bodyColor'>
      <NavBar />
      <ProfileInfo />
      <About />
      <Project />
      <Contact />
      <Footer />
    </main>
  )
}

export default App

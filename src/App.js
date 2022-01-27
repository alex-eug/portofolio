import './App.css';
import ThemeContextProvider from './Context/ThemeContext';
import Header from './Header/Header';
import Presentation from './Presentation/Presentation';
import Competences from './Competences/Competences';
import Projects from './Projects/Projects';
import Contact from './Contacts/Contact';
import ButtonBack from './ButtonBack/ButtonBack';
import NotFound from './NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';


function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
    
    <Routes>
    <Route path="/" element={<Header />} />
    <Route path="/presentation" element={<Presentation />} />
    <Route path="/competences" element={<Competences />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    </ThemeContextProvider>
    <NavBar />
    <ButtonBack />  
    </div>
  );
}

export default App;

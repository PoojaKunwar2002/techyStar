import{BrowserRouter as Router,Route,Routes}from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from './components/Footer';
import Services from "./components/Services";
import Contact from "./components/Contact";


import "./styles/App.scss"
import "./styles/Header.scss"


function App() {
  return (
   <Router>

    <Header></Header>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Services" element={<Services />} />
    </Routes>
    <Footer />
   </Router>

  );
}

export default App;

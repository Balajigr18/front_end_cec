import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
 return (
   <Router>
     <Navbar />
     <main className="min-h-screen bg-white text-gray-800">
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/products" element={<Products />} />
         <Route path="/services" element={<Services />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
       </Routes>
     </main>
     <Footer />
   </Router>
 );
}


export default App;

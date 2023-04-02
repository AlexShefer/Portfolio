import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className=" bg-slate-900">
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Work />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

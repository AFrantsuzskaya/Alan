import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/elements/Header/Header";
import Main from "./components/elements/Main/Main";
import Gallery from "./components/elements/Gallery/Gallery";
import Stories from "./components/elements/Stories/Stories";
import AboutMe from "./components/elements/AboutMe/AboutMe";
import Footer from "./components/elements/Footer/Footer";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route path="/stories" element={<Stories />} />
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/about-me" element={<AboutMe />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

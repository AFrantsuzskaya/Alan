import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/elements/Header/Header";
import Main from "./components/elements/Main/Main";
import News from "./components/elements/News/News";
import Stories from "./components/elements/Stories/Stories";
import AboutMe from "./components/elements/AboutMe/AboutMe";
import Footer from "./components/elements/Footer/Footer";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/stories" element={<Stories />} />
        <Route path="/about-me" element={<AboutMe />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

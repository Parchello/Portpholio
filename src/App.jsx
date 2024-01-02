import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { AboutPage, ContactPage, HomePage, ProjectPage } from "./Pages";

function App() {
  return (
    <main>
      <Router basename="/Portpholio">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;

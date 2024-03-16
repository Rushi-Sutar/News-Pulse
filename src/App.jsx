import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TopHeadlines from "./components/TopHeadlines";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScienceNews from "./components/ScienceNews";
import SportsNews from "./components/SportsNews";
import EntertainmentNews from "./components/EntertainmentNews";
import BusinessNews from "./components/BusinessNews";
import HealthNews from "./components/HealthNews";
import TechnologyNews from "./components/TechnologyNews";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    console.log("clicked");
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className={`dark:darkMode ${isDarkMode ? "dark" : ""}`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<TopHeadlines />} />
          <Route path="/science"  exact element={<ScienceNews category='Science' />} />
          <Route path="/sports" exact element={<SportsNews category='Sports' />} />
          <Route path="/entertainment" exact element={<EntertainmentNews category='Entertainment' />} />
          <Route path="/business" exact element={<BusinessNews category='Business' />} />
          <Route path="/health" exact element={<HealthNews category='Health' />} />
          <Route path="/technology" exact element={<TechnologyNews category='Technology' />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

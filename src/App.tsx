import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Errorpage from "./pages/errorpage";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

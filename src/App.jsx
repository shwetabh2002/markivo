import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SEO from "./services/SEO";
import CRO from "./services/CRO";
import PPC from "./services/PPC";
import Ui_Ux from "./services/Ui_Ux";
import Virtual_Assistant from "./services/Virtual_Assistant";
import Web_Design from "./services/Web_Design";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/seo" element={<SEO />} />
      <Route path="/services/ppc" element={<PPC />} />
      <Route path="/services/cro" element={<CRO />} />
      <Route path="/services/ui_ux" element={<Ui_Ux />} />
      <Route
        path="/services/virtual_assistant"
        element={<Virtual_Assistant />}
      />
      <Route path="/services/web_design" element={<Web_Design />} />
    </Routes>
  );
}

export default App;

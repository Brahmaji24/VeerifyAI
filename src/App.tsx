import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RequestDemo from "./pages/RequestDemo";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/request-demo" element={<RequestDemo />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;

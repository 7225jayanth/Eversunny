import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

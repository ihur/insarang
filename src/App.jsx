import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Brand from './pages/Brand';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Facilities from './pages/Facilities';
import GradeTest from './pages/GradeTest';
import WelfareConsultation from './pages/WelfareConsultation';
import ElderlyWelfare from './pages/ElderlyWelfare';
import InsuranceSystem from './pages/InsuranceSystem';
import WelfareEquipment from './pages/WelfareEquipment';
import ChooseEquipment from './pages/ChooseEquipment';

function App() {
  return (
    <Router basename="/insarang">
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/grade-test" element={<GradeTest />} />
            <Route path="/welfare-consultation" element={<WelfareConsultation />} />
            <Route path="/elderly-welfare" element={<ElderlyWelfare />} />
            <Route path="/insurance-system" element={<InsuranceSystem />} />
            <Route path="/welfare-equipment" element={<WelfareEquipment />} />
            <Route path="/choose-equipment" element={<ChooseEquipment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

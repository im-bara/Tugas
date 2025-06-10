import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PenjadwalanDisk from './pages/Tugas/PenjadwalanDisk';
import Project from './pages/Project'
import Navbar from './components/Navbar';
import SchedulingProcess from './pages/Tugas/SchedulingProcess';
import Footer from './components/Footer';


function App() {

  return (
    <div className="bg-white w-full flex flex-col min-h-screen app-wrapper">  
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/PenjadwalanDisk" element={<PenjadwalanDisk />} />
          <Route path="/SchedulingProcess" element={<SchedulingProcess />} />
        </Routes>
      </main>
    <Footer />
    </div>
  );
}

export default App

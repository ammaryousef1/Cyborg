import './App.css'
import { Routes , Route } from 'react-router';
import Navbar from './Component/Multiple/Navbar/Navbar';
import Home from './Component/Home/Home';
import Footer from './Component/Multiple/Footer/Footer';
import Browse from './Component/Browse/Browse';
import Details from './Component/Details/Details';
import Stream from './Component/Stream/Stream';
import Profile from './Component/Profile/Profile.jsx'
function App() {
  return (
    <>
    <Navbar />
        <div className="wraper-section">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Browse' element={<Browse />} />
          <Route path='/Details' element={<Details />} />
          <Route path='/Stream' element={<Stream/>} />
          <Route path='/Profile' element={<Profile/>} />
        </Routes>
        </div>
    <Footer />
    </>
  );
}

export default App;


import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Apropos from './pages/Apropos/Apropos';
import Error from './pages/Error';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import "./style/App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apropos' element={<Apropos />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import Meme from './Meme/Meme'
import Footer from './components/Footer/Footer'
import MemeGenerated from './MemeGenerated/MemeGenerated';


function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Meme />}/>
          <Route path='/generated' element={<MemeGenerated />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;

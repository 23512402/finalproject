
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Single from './components/Single';
import Category from './components/Category';
import Footer from './components/Footer';


function App() {
  return (
    
<>
<BrowserRouter>
<Header />
<Routes>

    <Route path='/'  element={<Home />}/>
    <Route path='/:category'  element={<Category />}/>
    <Route path='/single/:category/:id'  element={<Single />}/>
    
</Routes>
<Footer />
</BrowserRouter>
</>

  );
}

export default App;

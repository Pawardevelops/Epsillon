import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Shop from './components/Shop';
import Contacts from './components/Contacts';
import Blog from './components/Blog';
import ProductPage from './components/ProductPage'
// import { MainData } from './components/DataSets/MainData';
import { DummyData } from './components/DataSets/DummyData';
import { useState } from 'react';
import Register from './components/Register';
function App() {

  const [perm,SetPerm] = useState(true)

  // console.log(DummyData)
  return (
    <>
      {perm ? <BrowserRouter>
      <Navbar header="4SR" link1="Home" link2="About" link3="Shop" link4="Blog" link5="Contacts" link6="Cart" login="Login/Sign up" />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/about' element= {<About />} />
        <Route path='/shop' element={ <Shop /> }/>
        <Route path='/blog' element= {<Blog />} />
        <Route path='/contacts' element= {<Contacts />} />
        <Route path='/cart' element= {<Cart />} />
        <Route path='/product' element={<ProductPage />} />
      </Routes>
      </BrowserRouter> : <Register />}
    </>
  );
}

export default App;

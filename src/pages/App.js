import React from 'react'
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchCar from './SearchCar';
// import Detail from './SearchCar/Card/Detail';
import NotFound from './NotFound';
// import Register from './Register';

function App() {
  return (
    <>
     <Router>
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/our_services' element={<Home />}/>
        <Route path='/whyus' element={<Home />}/>
        <Route path='/testi' element={<Home />}/>
        <Route path='/faq' element={<Home />}/>
        <Route path='/search' element={<SearchCar />}/>
        {/* <Route path='/register' element={<Register />}/> */}
        {/* <Route path='/search/:id' element={<Detail />}/> */}
        <Route path='*' element={<NotFound/>}/>
       </Routes>
     </Router>
    </>
  );
}

export default App;

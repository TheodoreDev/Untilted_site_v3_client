import MainPage from './componants/mainPage/mainPage';
import Home from './componants/homePage/homePage';
import Forum from './componants/forumPage/forumPage';
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(response => response.json()).then(data => setBackendData(data))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/forum' element={<Forum></Forum>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

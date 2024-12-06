import MainPage from './componants/mainPage/mainPage';
import Account from './componants/accountPage/accountPage';
import Home from './componants/homePage/homePage';
import NavBar from "./componants/navBar/navBar";
import Forum from './componants/forumPage/forumPage';
import NewForumPage from './componants/forumPage/newForumPage';
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
        <Route path='/home' element={<NavBar></NavBar>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='forum' element={<Forum></Forum>}></Route>
        </Route>
        <Route path='/account' element={<Account></Account>}></Route>
        <Route path='/new-forum' element={<NewForumPage></NewForumPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

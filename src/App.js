import MainPage from './componants/mainPage/mainPage';
import React, {useEffect, useState} from 'react';

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(response => response.json()).then(data => setBackendData(data))
  }, [])

  return (
    <MainPage></MainPage>
  );
}

export default App;

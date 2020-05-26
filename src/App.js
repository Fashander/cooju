import React, {useEffect} from 'react';
import './App.css';
import Assessment from './components/Pages/Profile/Assessment';
import Profiles from './components/Pages/Profile/profile'

const App = () => {

  useEffect(() => {
    document.title = "Colledge of Education, Oju";
  }, [])

  return (
    
      <h1>
       
        <Profiles/>
        <Assessment/>
      </h1>
    
      )
}

export default App
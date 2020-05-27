import React, {useEffect} from 'react';
import './App.css';
import Landing from './components/Pages/Landing'

const App = () => {

  useEffect(() => {
    document.title = "Colledge of Education, Oju";
  }, [])

  return (
    <div>
      <Landing />
    </div>
  )
}

export default App
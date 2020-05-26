import React, {useEffect} from 'react';
import './App.css';

const App = () => {

  useEffect(() => {
    document.title = "Colledge of Education, Oju";
  }, [])

  return (
    <div>
      <h1>
        COLLEDGE OF EDUCATION, OJU
      </h1>
    </div>
  )
}

export default App
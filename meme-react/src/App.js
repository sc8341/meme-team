import './App.css';
import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/test").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof data.test === 'undefined') ? (
        <p>Loading...</p>
      ):(
        data.test.map((ele, i) => (
          <p key={i}>{ele}</p>
        ))
      )}
    </div>
  );
}

export default App;

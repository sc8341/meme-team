import './App.css';
import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([{}])
  const [memes, setMemes] = useState([{}])
  const [memeIndex, setMemeIndex] = useState(0);

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

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').then(
      res => res.json().then( res => {
        const memes = res.data.memes;
        setMemes(memes);
      })
    )
  }, [])

  return (
    <>
      <div>
        {(typeof data.test === 'undefined') ? (
          <p>Loading...</p>
        ):(
          data.test.map((ele, i) => (
            <p key={i}>{ele}</p>
          ))
        )}
      </div>
      <div>
        <button onClick={() => setMemeIndex(memeIndex+1)}>Generate</button>
        {(memes.length===0) ? (
          <img src='http://spittoon.co.uk/wp-content/uploads/2019/01/error-meme.jpg' alt='error meme'/>
        ):(
          <img src={memes[memeIndex].url} />
        )}
      </div>
    </>
  );
}

export default App;

import './App.css';
import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([{}])
  const [memes, setMemes] = useState([{}])
  const [memeIndex, setMemeIndex] = useState(0);

  const shuffleMemes = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

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
        const _memes = res.data.memes;
        shuffleMemes(_memes);
        setMemes(_memes);
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
          <img src={memes[memeIndex].url} alt='random empty meme' />
        )}
      </div>
    </>
  );
}

export default App;

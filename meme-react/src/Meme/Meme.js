import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function Meme() {
  //const [components, setComponents] = useState([])
  //const [data, setData] = useState([{}])
  const [memes, setMemes] = useState([{}])
  const [memeIndex, setMemeIndex] = useState(0)
  const [captions, setCaptions] = useState([])

  const navigate = useNavigate();

  const shuffleMemes = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  /*const displayResult = () => {
    setComponents([...components, 'Creating Custom Meme...'])
  }

  const HeaderComponent = (props) => {
    return(
      <div>
        <h1>{props.text}</h1>
      </div>
    )
  }*/

  const updateCaption = (event, index) => {
    const text = event.target.value || ''
    setCaptions(
      captions.map((c,i) => {
        if(index === i){
          return text;
        }
        else{
          return c;
        }
      })
    )
  }
  
  const createMeme = () => {
    const currMeme = memes[memeIndex]
    const formData = new FormData()
    formData.append('username', 'memeteam_serenabrian')
    formData.append('password', 'memeteam123')
    formData.append('template_id', currMeme.id);
    captions.forEach((c, index) => formData.append(`boxes[${index}][text]`,c))

    fetch('https://api.imgflip.com/caption_image', {
      method: 'POST',
      body: formData
    }).then(res => {
      res.json().then(res => {
        console.log(res)
        navigate(`/generated?url=${res.data.url}`)
      })
    });
  }

  /*useEffect(() => {
    fetch("/test").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])*/

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').then(
      res => res.json().then( res => {
        const _memes = res.data.memes;
        shuffleMemes(_memes);
        setMemes(_memes);
      })
    )
  }, [])

  useEffect(() => {
    if(memes.length){
      setCaptions(Array(memes[memeIndex].box_count).fill(''));
    }
  }, [memeIndex, memes])

  useEffect(() => {
    console.log(captions)
  }, [captions])

  return (
    <>
    {/**
      <div>
        {(typeof data.test === 'undefined') ? (
          <p>Loading...</p>
        ):(
          data.test.map((ele, i) => (
            <p key={i}>{ele}</p>
          ))
        )}
      </div>
      */}
      <div id='create'>
        <button onClick={() => setMemeIndex(memeIndex+1)}>Generate Random</button>
        {(memes.length===0) ? (
          <img src='http://spittoon.co.uk/wp-content/uploads/2019/01/error-meme.jpg' alt='error meme'/>
        ):(
          <img src={memes[memeIndex].url} alt='random empty meme' />
        )}
        {
          captions.map((c, index) => (
            <input onChange={(event) => updateCaption(event, index)} key={index} />
          ))
        }
      </div>
      <div>
        <button onClick={createMeme} id='createMemeBtn'>Create Custom Meme</button>
        {/*components.map((item, i) => (<HeaderComponent text={item} />))*/}
      </div>
    </>
  );
}

export default Meme;
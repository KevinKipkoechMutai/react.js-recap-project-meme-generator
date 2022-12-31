import React from 'react'
import Header from './components/Header'
import Meme from './components/Meme'

const App = () => {
  const [allMemeImages, setAllMemeImages] = React.useState([])

  React.useEffect(()=>{
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemeImages(data.data.memes))
  }, [])

  return (
    <>
      <Header />
      <Meme 
        allMemeImages={allMemeImages}
      />
    </>
  )
}

export default App
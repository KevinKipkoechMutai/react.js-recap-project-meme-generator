import React from 'react'

const Meme = ({allMemeImages}) => {

    const [formData, setFormData] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.pinimg.com/550x/8f/17/cb/8f17cbf922cb9b62f44a15e05042efd7.jpg"
    })

    function getRandomMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const randomUrl = allMemeImages[randomNumber].url
        setFormData((prevFormData=> ({
            ...prevFormData, randomImage: randomUrl
        })))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData, [name]:value
        }))
    }

  return (
    <div className='memes-section'>
        <div className='memes-form'>
            <input 
                className='memes-input' 
                placeholder='top text' 
                name='topText' 
                value={formData.topText}
                onChange={handleChange}
            />
            <input 
                className='memes-input' 
                placeholder= 'bottom text' 
                name='bottomText' 
                value={formData.bottomText}
                onChange={handleChange}
            />
        </div>
        <button onClick={getRandomMemeImage} className='memes-button'>Get New Image</button>
        <div className='memes-display'>
            <h2 className='memes-text top'>{formData.topText}</h2>
            <img src={formData.randomImage} alt='meme' className='meme-image'/>
            <h2 className='memes-text bottom'>{formData.bottomText}</h2>
        </div> 
    </div>
  )
}

export default Meme
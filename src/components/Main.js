import React, { useEffect } from 'react'
import { useCycle } from 'framer-motion'

// Material UI Components
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { MainBGGrid, HeaderText, BodyText } from './CustomMaterial'

// Hero Images
import DC from '../assets/images/hero.dc.jpeg'
import Marvel from '../assets/images/hero.marvel.jpg'
import imageComics from '../assets/images/hero.image.jpg'
import darkHorse from '../assets/images/hero.darkHorse.jpg'


// Framer Motion Themes
const heroVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: .7,
      duration: 3
    }
  }
}

const Main = () => {
  // Framer Motion to cycle through images
  const [image, cycleImage] = useCycle(DC, Marvel, imageComics, darkHorse)

  // Create timer for "Hero Section" background image
  useEffect(() => {
    const myTimer = setTimeout(() => {
      cycleImage()

    }, 6000)
    
    return function cleanup() {
      clearTimeout(myTimer)
    }
  }, [image])

  return (
    <MainBGGrid
      // Animation for hero images
      sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7),rgba(0,0,0,0.9)),url(${image})`,
      }}
    >
      <Container
        maxWidth="sm"
      >
        <HeaderText >
          Heroes and Villians

        </HeaderText>
        <BodyText
          paragraph
        >
          Do you wonder who is stronger, Hulk or Shazam? Do you wonder
          when your favorite hero first appeared? Now you can easily
          search for info on your favorite heroes or villians and
          answer your fanboy/fangirl questions!
        </BodyText>

      </Container>

    </MainBGGrid >
  )

}

export default Main
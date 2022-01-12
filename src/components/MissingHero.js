import React from 'react'

// Material UI Components
import Container from '@mui/material/Container';
import { MainBGGrid, HeaderText, BodyText } from './CustomMaterial'

// image
import missing from '../assets/images/missing.hero.jpg'

const MissingHero = () => {
    return (
        <MainBGGrid
            sx={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7),rgba(0,0,0,0.9)),url(${missing})`,
            }}
        >
            <Container
                maxWidth="sm"
            >
                <HeaderText >
                    Sorry, We can't find a Hero by that name

                </HeaderText>
                <BodyText
                    paragraph
                >
                    Please try checking the spelling or maybe that hero hasn't been created
                    and its time to craft this new hero

                </BodyText>

            </Container>
    
        </MainBGGrid >
    )
}

export default MissingHero
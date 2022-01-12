import React from 'react'

// Material UI Components
import Container from '@mui/material/Container';
import { MainBGGrid, HeaderText, BodyText } from './CustomMaterial'

// image
import NotFound404 from '../assets/images/404.jpg'

// Text for 404 Missing Page---------------------------------------------------
const NotFound = () => {
    return (
        <MainBGGrid
            sx={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7),rgba(0,0,0,0.9)),url(${NotFound404})`,
            }}
        >
            <Container
                maxWidth="sm"
            >
                <HeaderText >
                    Need To Be Saved?
                </HeaderText>
                <BodyText
                    paragraph
                >
                    No Super Heroes Here... 
                    <br/>
                    Please go back to the Main Page 
                    <br/>or 
                    <br/>Try a new Search
                </BodyText>

            </Container>

        </MainBGGrid >

    )
}

export default NotFound
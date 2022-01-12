import React from 'react'

// Material UI Components
import { Container, Grid } from '@mui/material';
import HeroCard from './HeroCard';


const Hero = ({ hero, setHero }) => {

    return (
        <Container
            sx={{ py: 8 }}
            maxWidth="md"
        >
            <Grid
                container
                spacing={4}
            >
                {hero.map((data) => (
                    <HeroCard hero={data} setHero={setHero} key={data.id}/>
                ))}
            </Grid>
        </Container>
    )
}


export default Hero
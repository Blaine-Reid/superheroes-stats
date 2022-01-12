import React from 'react'
import { useNavigate } from 'react-router-dom';

import {Card, CardMedia, CardContent,Typography,Grid} from '@mui/material/';

 const HeroCard = ({ hero,setHero }) => {
    const navigate = useNavigate()

    const handleClick = (hero) => {
        setHero(hero)
     
        navigate(`/hero/details/Batman}`)
    }

    return (
        <Grid
            item
            key={hero.id}
            xs={12}
            sm={6}
            md={4}
            onClick={() => handleClick(hero)}
        >
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    boxShadow: '0px 2px 12px 6px rgba(0,0,0,0.5)'
                }}
            >
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        pt: 1,
                        color: '#f50000'
                    }
                    }
                >
                    {hero.name}
                </Typography>
                <Typography
                    gutterBottom
                    component="h4"
                >
                    {hero.biography.publisher}
                </Typography>

                <CardMedia
                    component="img"
                    image={hero.images.sm}
                    alt={hero.name}
                />

                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Typography>
                        {hero.biography.fullName}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>
    )
}
export default HeroCard
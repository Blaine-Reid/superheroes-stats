import React from 'react';

// Material UI Components
import { Card, CardMedia, CardContent, Typography, } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails, MainBGGrid } from './CustomMaterial'

// React Components
import HeroStats from './HeroDetail.Stats'
import HeroAppearance from './HeroDetails.Appearance'
import HeroBio from './HeroDetails.Biography'
import HeroMisc from './HeroDetails.Misc'

import Accordians from './Accordians'



const HeroDetails = ({ hero }) => {

    const accordianTitles = ['Hero Stats', 'Appearance', 'Biography', 'Misc']

    return (
        <div className='display-area'>
            <div className='hero-detail'>
                <h2 className='hero-title'>
                    {hero.name}
                </h2>
                <img src={hero.images.lg} alt={hero.name} className='hero-img' />
                <div className='hero-accordians'>

                    {
                        accordianTitles.map(title => <Accordians title={title} hero={hero} />)
                    }
                
                </div>
            </div>
        </div>

    );
}
export default HeroDetails
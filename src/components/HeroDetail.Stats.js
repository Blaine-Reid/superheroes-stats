import React from 'react'

// Material UI Components
import { List, ListItemText, ListItem, Avatar } from '@mui/material';
import { BorderLinearProgress } from './CustomMaterial';

const HeroStats = ({ hero }) => {

    return (
        <List
        sx={
            {
                backgroundColor:"rgb(26, 26, 27)"
            }
        }
        >
            <ListItem sx={{ listStyleType: 'none' }}>
                <Avatar
                    title="Intelligence"
                    sx={
                        { mx: 1, fontSize: 16 }
                    }
                >
                    INT
                </Avatar>
                <ListItemText
                    primary={<BorderLinearProgress variant="determinate" value={Number(hero.powerstats.intelligence)} />}
                />
            </ListItem>
            <ListItem>
                <Avatar
                    title="Strength"
                    sx={
                        { mx: 1, fontSize: 16 }
                    }
                >
                    STR
                </Avatar>
                <ListItemText
                    primary={<BorderLinearProgress variant="determinate" value={Number(hero.powerstats.strength)} />}
                />
            </ListItem>
            <ListItem>
                <Avatar
                    title="Speed"
                    sx={
                        { mx: 1, fontSize: 16 }
                    }
                >
                    SPD
                </Avatar>
                <ListItemText
                    primary={<BorderLinearProgress variant="determinate" value={Number(hero.powerstats.speed)} />}
                />
            </ListItem>
            <ListItem>
                <Avatar
                    title="Durability"
                    sx={
                        { mx: 1, fontSize: 16 }
                    }
                >
                    DUR
                </Avatar>
                <ListItemText
                    primary={<BorderLinearProgress variant="determinate" value={Number(hero.powerstats.durability)} />}
                />
            </ListItem>
            <ListItem>
                <Avatar
                    title="Power"
                    sx={
                        { mx: 1, fontSize: 16 }
                    }
                >
                    PWR
                </Avatar>
                <ListItemText
                    primary={<BorderLinearProgress variant="determinate" value={Number(hero.powerstats.power)} />}
                />
            </ListItem>
            <ListItem>
                <Avatar
                    title="Combat Skill"
                    sx={
                        { mx: 1, fontSize: 16 }
                    }
                >
                    CBT 
                </Avatar>
                <ListItemText
                    primary={<BorderLinearProgress variant="determinate" value={Number(hero.powerstats.combat)} />}
                />
            </ListItem>

        </List>


    )


}

export default HeroStats
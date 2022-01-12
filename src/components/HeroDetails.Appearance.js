import React from 'react'

// Material UI Component
import { List, ListItemText, ListItem} from '@mui/material';

const HeroAppearance = ({hero})=>{

    return(

        <List sx={{      
            backgroundColor:"rgb(26, 26, 27)"
        }}>

        <ListItem sx={{listStyleType:'none'}}>
            <ListItemText
                primary='Gender:'
                secondary={hero.appearance.gender}
            />
        </ListItem>
        <ListItem sx={{listStyleType:'none'}}>
            <ListItemText
                primary='Race:'
                secondary={hero.appearance.race}
            />
        </ListItem>
        <ListItem sx={{listStyleType:'none'}}>
            <ListItemText
                primary='Height:'
                secondary={`${hero.appearance.height[0]} (${hero.appearance.height[1]})`}
            />
        </ListItem>
        <ListItem sx={{listStyleType:'none'}}>
            <ListItemText
                primary='Weight:'
                secondary={`${hero.appearance.weight[0]} (${hero.appearance.weight[1]})`}
            />
        </ListItem>
        <ListItem sx={{listStyleType:'none'}}>
            <ListItemText
                primary='Eye Color:'
                secondary={`${hero.appearance.eyeColor}`}
            />
        </ListItem>
        <ListItem sx={{listStyleType:'none'}}>
            <ListItemText
                primary='Hair Color:'
                secondary={`${hero.appearance.hairColor}`}
            />
        </ListItem>
  
        </List>


    )
}

export default HeroAppearance
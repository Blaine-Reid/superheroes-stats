import React from 'react'

// Material UI Components
import { List, ListItemText, ListItem} from '@mui/material';

const HeroMisc = ({ hero }) => {

    return (
        <List sx={{      
            backgroundColor:"rgb(26, 26, 27)"
        }}>
        <ListItem sx={{listStyleType:'none'}}>
            <ListItemText
                primary='Work:'
                secondary={`${hero.work.occupation}`}
            />
        </ListItem>

        <ListItem sx={{listStyleType:'none'}}>
            <ListItemText
                primary='Base of Operations:'
                secondary={`${hero.work.base}`}
            />
        </ListItem>

        <ListItem sx={{listStyleType:'none'}}>
            <ListItemText
                primary='Group Affiliations:'
                secondary={hero.connections.groupAffiliation}
            />
        </ListItem>

        <ListItem sx={{listStyleType:'none'}}>
            <ListItemText
                primary='Relatives:'
                secondary={`${hero.connections.relatives}`}
            />
        </ListItem>

    
        </List>
    
  

   


    )
}


export default HeroMisc
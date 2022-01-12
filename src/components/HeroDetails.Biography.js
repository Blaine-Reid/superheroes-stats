import React from 'react'

// Material UI Component
import { List, ListItemText, ListItem } from '@mui/material';


const HeroBio = ({ hero }) => {


    return (

        <List sx={{      
            backgroundColor:"rgb(26, 26, 27)"
        }}>
            <ListItem sx={{ listStyleType: 'none' }}>
                <ListItemText
                    primary='Full Name:'
                    secondary={`${hero.biography.fullName}`}
                />
            </ListItem>

            <ListItem sx={{ listStyleType: 'none' }}>
                <ListItemText
                    primary='Alter Egos:'
                    secondary={`${hero.biography.alterEgos}`}
                />
            </ListItem>

            <ListItem sx={{ listStyleType: 'none' }}>
                <ListItemText
                    primary='Aliases:'
                    secondary={hero.biography.aliases.join(', ')}
                />
            </ListItem>

            <ListItem sx={{ listStyleType: 'none' }}>
                <ListItemText
                    primary='Place of Birth:'
                    secondary={`${hero.biography.placeOfBirth}`}
                />
            </ListItem>

            <ListItem sx={{ listStyleType: 'none' }}>
                <ListItemText
                    primary='First Appearance:'
                    secondary={`${hero.biography.firstAppearance}`}
                />
            </ListItem>

            <ListItem sx={{ listStyleType: 'none' }}>
                <ListItemText
                    primary='Publisher:'
                    secondary={`${hero.biography.publisher}`}
                />
            </ListItem>
            <ListItem sx={{ listStyleType: 'none' }}>
                <ListItemText
                    primary='Alignment:'
                    secondary={`${hero.biography.alignment}`}
                />
            </ListItem>

        </List>



    )
}


export default HeroBio
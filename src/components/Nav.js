import React from 'react';
import { useNavigate } from 'react-router-dom'

// Material UI Components
import { AppBar, Box, Tooltip, Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase, Logo } from './CustomMaterial'


const Nav = ({ query, setQuery, search }) => {
    // Use Navigator Hook to Change Pages
    const navigate = useNavigate()

    const handleNavigate = () => {
        // Function to hand change of page onClick of Logo
        navigate('/')
    }

    return (
        <Box
            sx={{
                flexGrow: 1,
                height: '10vh'
            }}>
            <AppBar
                position="static"
                sx={{ 
                    pt: 2, 
                    pb: 2,
                    boxShadow: '0px 6px 10px 6px rgba(0,0,0,0.5)'
                }}
            >
                <Toolbar>
                    {/*------------ Logo ------------*/}
                    <Logo
                        onClick={handleNavigate}
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Super Hero Search
                    </Logo>

                    {/*------------ Search Bar--------- */}
                    <Tooltip
                        title='Search for your favorite hero by name'
                    >
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={e => setQuery(e.target.value)}
                                value={query}
                                onKeyPress={search}
                            />
                        </Search>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Nav
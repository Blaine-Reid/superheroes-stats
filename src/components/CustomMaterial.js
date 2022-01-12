import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import {LinearProgress} from '@mui/material/';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
// Custom Material Components


// NAV COMPONENTS ------------------------------------------------------------------------
export const Logo = styled('div')(({ theme }) => ({
    textwrap:'nowrap',
    color:theme.primary,
    flexGrow: 1,
    fontSize: 36,
    fontWeight: 500,
    textShadow: '1.5px 1.5px rgb(171, 0, 0)'
}));

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

// MAIN ----------------------------------------------------------------------

export const MainBGGrid = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    minHeight: '90vh',
    minWidth:'100vw',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    direction:"column",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}));

// TEXT BOXES (MISSING PAGE, MISSING HERO, LANDING PAGE)

export const HeaderText = styled('h1')(({ theme }) => ({
    color:theme.palette.secondary.main,
    textAlign:"center",
    fontSize:36,
}));


export const BodyText = styled('h2')(({ theme }) => ({
    color:theme.palette.secondary.light,
    textAlign:"center",
    fontSize:22,
}));

// HERO DETAIL PAGE -----------------------------------------------

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#f50000' : '#308fe8',
    },
}));


    
export const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

export const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));





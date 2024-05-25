import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Teaching_Fetch } from '../api/modares/Teaching_Fetch';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';


type Category = {
    category_id: number,
    category: string,
    course_count: number
}


const MenoNavbar = () => {

    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };


    const themee = useTheme();
    const isLargeScreen = useMediaQuery(themee.breakpoints.up('lg'));


    React.useEffect(() => {
        if (isLargeScreen) {
            setOpen(false);
        }
    }, [isLargeScreen])

    const [expanded, setExpanded] = React.useState(false)
    const handleAccordionClick = () => {
        setExpanded(!expanded);
    };


    const { dataCategory } = Teaching_Fetch()
    const courses = dataCategory?.data.categories

    const theme = createTheme({
        typography: {
            fontFamily: 'YekanBakh-Medium',
        },
    });


    const DrawerList = (

        <Box sx={{ width: 250 }} role="presentation" >

            <List className='flex justify-center pb-0 '>
                <div className='flex justify-between items-center w-[95%] '>

                    <div className='flex w-[186px] h-[86px]'>
                        <img className="w-full " src='/images/global/Rectangle.png' />
                    </div>

                    <IconButton onClick={toggleDrawer(false)} className='flex ml-2 w-10 h-min '>
                        {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
            </List>

            <Divider sx={{ width: '80%', marginRight: '25px', bgcolor: '#008000' }} />


            <List className="flex justify-center" sx={{ marginTop: '12px' }}>
                <div className='flex relative w-[80%]'>
                    <input type='text' onClick={(e) => e.stopPropagation()} className='w-full rounded-xl flex border-0 focus:ring-[#008000]  bg-[#F5F5F5]' placeholder='جستجو کنید...' />
                    <img className='w-[22px] absolute top-2  left-2 cursor-pointer' src="/icon/user/home_page/navbar/search.svg" alt="Search" />
                </div>
            </List>


            <List disablePadding>
                <Accordion expanded={expanded} onChange={handleAccordionClick} sx={{ boxShadow: 'none' }} defaultExpanded>
                    <AccordionSummary

                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='font-YekanBakh-Medium'>دوره ها</Typography>
                    </AccordionSummary>

                    <AccordionDetails className='py-0'>
                        <Typography>
                            <List disablePadding>
                                {courses?.map((item: Category) => (
                                    <ListItem sx={{ paddingRight: '10px', textAlign: 'right' }} key={item.category_id} disablePadding>
                                        <ListItemText primary={<Link href='/' className='hover:text-[#008000]'>{item.category}</Link>} sx={{ paddingY: '2px' }} />
                                    </ListItem>
                                ))}
                            </List>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </List>


            <List disablePadding>
                <ListItem >
                    <ListItemText>
                        <ul>
                            <li className='w-max hover:bg-[#008000]'><Link href='/user/blog'>وبلاگ</Link></li>
                            <li className='w-max hover:bg-[#008000]'><Link href='/user/blog'>تدریس کنید</Link></li>
                        </ul>
                    </ListItemText>
                </ListItem>
            </List>

        </Box>
    );

    return (
        <ThemeProvider theme={theme}>
            <div>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={toggleDrawer(true)}
                    sx={{ color: "#484848" }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </div>

        </ThemeProvider>
    );
}
export default MenoNavbar













import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Teaching_Fetch } from '../api/modares/Teaching_Fetch';
import Link from 'next/link';
import Button from '@mui/material/Button';


type Category = {
    category_id: number,
    category: string,
    course_count: number
}


const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />

))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 10,
        marginTop: theme.spacing(2.6),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(2),
            },
        },
    },
}));

const ButtonCourses = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 15,
    // width:'px',
    padding: '2px 0px',
    lineHeight: 0.5,
    fontFamily: 'YekanBakh-Medium',
    direction: 'rtl',
    gap: '6px',
    '&:hover': {
        boxShadow: 'none',
        backgroundColor: 'transparent', // تغییر رنگ پس زمینه هنگام هاور به رنگ شفاف
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: 'transparent',
    },
    '&:focus': {
        boxShadow: 'none',
        backgroundColor: 'transparent',
    },

});

const Item = styled(MenuItem)({
    height: '50px',
    margin: '10px',
    border: '1px solid #FFF',
    borderRadius: '10px',
    '&:hover': {
        boxShadow: 'none',
        backgroundColor: 'transparent', // تغییر رنگ پس زمینه هنگام هاور به رنگ شفاف
        border: '1px solid #008000',
        borderRadius: '10px',
        color: '#008000'
    },
})


const Dropdown = () => {

    const { dataCategory } = Teaching_Fetch()
    const courses = dataCategory?.data.categories

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <ButtonCourses
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="text"
                color='inherit'
                size='small'
                disableElevation
                // onClick={handleClick}
                onMouseEnter={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                دوره ها

            </ButtonCourses>

            <StyledMenu
                onMouseMove={handleClose}
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                // onClose={handleClose}
            >

                {courses?.map((i: Category, ind: number) => {
                    return (
                        <div key={i.category_id}>
                            <Item disableRipple>
                                <Link href={{ pathname: '/user/courses', query: { param1: i.category } }} className="flex items-center gap-[6px] text-[1.125rem] p-3 ">
                                    {ind === 0 && <img src='/images/user/home_page/dropdown/graphic_design.png' alt='Graphic_Design' className="w-[24px]" />}
                                    {ind === 1 && <img src='/images/user/home_page/dropdown/browser.png' alt='Browser' className="w-[24px]" />}
                                    {ind === 2 && <img src='/images/user/home_page/dropdown/cyber_security.png' alt='Cyber_SSecurity' className="w-[24px]" />}
                                    {ind === 3 && <img src='/images/user/home_page/dropdown/monitor.png' alt='Monitor' className="w-[24px]" />}
                                    {ind === 4 && <img src='/images/user/home_page/dropdown/mobile_coding.png' alt='Mobile_Coding' className="w-[24px]" />}
                                    {ind === 5 && <img src='/images/user/home_page/dropdown/custom_coding.png' alt='Custom_Coding' className="w-[24px]" />}
                                    {ind === 6 && <img src='/images/user/home_page/dropdown/menu.png' alt='Meno' className="w-[24px]" />}
                                    {ind === 7 && <img src='/images/user/home_page/dropdown/movie.png' alt='Movie' className="w-[24px]" />}
                                    <p className='font-YekanBakhMedium'>{i.category}</p>
                                </Link>
                            </Item>
                        </div>
                    )
                })}
            </StyledMenu>
        </div>
    );
}
export default Dropdown





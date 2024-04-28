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
                marginRight: theme.spacing(1),
            },
        },
    },
}));

const ButtonCourses = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 15,
    padding: '1px 1px',
    lineHeight: 1.5,
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
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}

                onClose={handleClose}
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






















































// import Link from "next/link";
// import React from 'react'
// import { Teaching_Fetch } from "../api/modares/Teaching_Fetch";
// type Category = {
//     category_id: number,
//     category: string,
//     course_count: number
// }


// const Dropdown = () => {



//     const { dataCategory } = Teaching_Fetch()
//     const courses = dataCategory?.data.categories

//     console.log('g', courses)

//     return (
//         <div>

//             <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="inline-flex items-center outline-0" type="button">
//                 <p>دوره ها</p>
//                 <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
//                 </svg>
//             </button>

//             <div id="dropdownHover" className="z-10 hidden bg-[#FFF] py-4 rounded-lg  shadow w-[18rem]">
//                 {courses?.map((i: Category, ind: number) => {
//                     return (
//                         <div key={i.category_id} className="">
//                             <ul className="flex flex-col px-6 py-1.5" aria-labelledby="dropdownHoverButton">
//                                 <li className="border-solid border-white border-[1px]  hover:border-[#008000] rounded-[10px] hover:text-[#008000]">
//                                     <Link href={{ pathname: '/user/courses', query: `${i.category}` }} className="flex items-center gap-[6px] text-[1.125rem] p-3">
//                                         {ind === 0 && <img src='/images/user/home_page/dropdown/graphic_design.png' alt='Graphic_Design' className="w-[24px]" />}
//                                         {ind === 1 && <img src='/images/user/home_page/dropdown/browser.png' alt='Browser' className="w-[24px]" />}
//                                         {ind === 2 && <img src='/images/user/home_page/dropdown/cyber_security.png' alt='Cyber_SSecurity' className="w-[24px]" />}
//                                         {ind === 3 && <img src='/images/user/home_page/dropdown/monitor.png' alt='Monitor' className="w-[24px]" />}
//                                         {ind === 4 && <img src='/images/user/home_page/dropdown/mobile_coding.png' alt='Mobile_Coding' className="w-[24px]" />}
//                                         {ind === 5 && <img src='/images/user/home_page/dropdown/custom_coding.png' alt='Custom_Coding' className="w-[24px]" />}
//                                         {ind === 6 && <img src='/images/user/home_page/dropdown/menu.png' alt='Meno' className="w-[24px]" />}
//                                         {ind === 7 && <img src='/images/user/home_page/dropdown/movie.png' alt='Movie' className="w-[24px]" />}
//                                         <p>{i.category}</p>
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     )
//                 })}

//             </div>
//         </div>

//     )
// }

// export default Dropdown

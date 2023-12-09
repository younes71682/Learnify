import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'



const Sidbar = () => {

  const prof = [
    { id: 1, title: "اطلاعات کاربری", pathname: "/Info_user", icon: <Image src="/icon/user/account/info_user/user.svg" alt='User' width={24} height={24} /> },
    { id: 2, title: "آموزش‌های من", pathname: "/My_training", icon: <Image src="/icon/user/account/info_user/education.svg" alt='Education' width={24} height={24} /> },
    { id: 3, title: "نظرات شما", pathname: "/Your_comments", icon: <Image src="/icon/user/account/sidebar/comments.svg" alt='Comments' width={24} height={24} /> },
    { id: 4, title: "تاریخچه سفارش‌ها", pathname: "/Order_history", icon: <Image src="/icon/user/account/sidebar/history.svg" alt='History' width={24} height={24} /> },
    { id: 5, title: "اعلان ها", pathname: "/Notification", icon: <Image src="/icon/user/account/sidebar/notification.svg" alt='Notification' width={24} height={24} /> },
    { id: 6, title: "خروج از حساب کاربری", pathname: "", icon: <Image src="/icon/user/account/" alt='' width={24} height={24} /> }
  ]


  return (
    <div className='flex flex-col w-[19%] rounded-[15px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] pr-4 pt-8'>

      <div className='flex items-center gap-5'>
        <div className='w-[113px] h-[101px] rounded-[11px] mb-11'><img src='/images/sidebar/prof.png' alt='Prof' /></div>
        <div className='mb-10'>
          <p className='font-bold'>محمد نصیری</p>
          <p className='text-sm font-normal'>09374143663</p>
        </div>
      </div>

      {prof.map((item) => {
        return (
          <div key={item.id}>
            <ul className='text-[#404040]'>
              <li className='flex items-center gap-2 py-[9px]'>
                <div>{item.icon}</div>
                <Link href={`/profile/${item.pathname}`}>{item.title}</Link>
              </li>
            </ul>
          </div>
        )
      })}

    </div>
  )
}

export default Sidbar


// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

// export default function VerticalTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Box
//       sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
//     >
//       <Tabs
//         orientation="vertical"
//         variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         sx={{ borderRight: 1, borderColor: 'divider' }}
//       >
//         <Tab label="Item One" {...a11yProps(0)} />
//         <Tab label="Item Two" {...a11yProps(1)} />
//         <Tab label="Item Three" {...a11yProps(2)} />
//         <Tab label="Item Four" {...a11yProps(3)} />
//         <Tab label="Item Five" {...a11yProps(4)} />
//         <Tab label="Item Six" {...a11yProps(5)} />
//         <Tab label="Item Seven" {...a11yProps(6)} />
//       </Tabs>
//       <TabPanel value={value} index={0}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         Item Four
//       </TabPanel>
//       <TabPanel value={value} index={4}>
//         Item Five
//       </TabPanel>
//       <TabPanel value={value} index={5}>
//         Item Six
//       </TabPanel>
//       <TabPanel value={value} index={6}>
//         Item Seven
//       </TabPanel>
//     </Box>
//   );
// }

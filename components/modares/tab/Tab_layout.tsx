import * as  React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Condition from './Condition';
import Training_recording from './Training_recording';
import Release_period from './Release_period';

const Tab_layout = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };


    return (
        <div className='flex justify-center w-full'>
            <Box sx={{typography: 'body1',   }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 2, borderColor: '#D3D3D3', display:'flex', gap:'300px' }}>
                        <TabList  onChange={handleChange} aria-label="lab API tabs example" indicatorColor='#800800'>
                            <Tab  className='text-xl font-bold text-[#000]' label="شرایط لرنیفای" value="1" />
                            <Tab className='text-xl font-bold text-[#000]' label="ظبط آموزش" value="2" />
                            <Tab className='text-xl font-bold text-[#000]' label="انتشاره دوره" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><Condition /></TabPanel>
                    <TabPanel value="2"><Training_recording /></TabPanel>
                    <TabPanel value="3"><Release_period /></TabPanel>
                </TabContext>
            </Box>
        </div>
    )
}

export default Tab_layout

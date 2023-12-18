import * as  React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Condition from './Condition';
import Training_recording from './Training_recording';
import Release_period from './Release_period';
import Tabs from '@mui/material/Tabs';


const Tab_layout = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };


    return (
        <div className='flex justify-center w-full'>
            <Box sx={{ typography: 'body1', width: "50%", }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 2, borderColor: '#D3D3D3'}}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            flexContainerVertical
                     
                        >
                            <Tab className='text-xl font-bold text-black mx-20' value="1" label="شرایط لرنیفای" />
                            <Tab className='text-xl font-bold text-black mx-20' value="2" label="ظبط آموزش" />
                            <Tab className='text-xl font-bold text-black mx-20' value="3" label="انتشار دوره" />  
                        </Tabs>
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

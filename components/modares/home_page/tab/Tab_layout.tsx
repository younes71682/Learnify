import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabContext, TabPanel } from '@mui/lab';
import Condition from './Condition';
import Training_recording from './Training_recording';
import Release_period from './Release_period';

interface StyledTabsProps {
    children?: React.ReactNode;
    value: string;
    onChange: (event: React.SyntheticEvent, newValue: string) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />

))({
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',
    '@media (max-width: 600px)': {
        width: '100%',
    },
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderColor: 'divider',

    },
    '& .MuiTabs-indicatorSpan': {
        width: '200px',
        backgroundColor: '#008000',
    },

});

interface StyledTabProps {
    label: string;
    value: string; // Add this line
}

const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: 'YekanBakh-Medium',
    fontSize: '23px',
    color: '#000',
    width: '33%',
    '@media (max-width: 600px)': {
        fontSize: '18px',
    },
    '&.Mui-selected': {
        color: '#000',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 828, 0.32)',
    },

}));


const Tab_layout = (props: any) => {
    const { refstudy } = props
    const [value, setValue] = React.useState("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div>
            <div className='flex justify-center mx-auto'>
                <Box ref={refstudy} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TabContext value={value} >
                        <Box display='flex' justifyContent='center' sx={{ bgcolor: '#FBFBFB', borderColor: 'divider' }}>
                            <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
                                <StyledTab value="1" label="شرایط لرنیفای" />
                                <StyledTab value="2" label="ظبط آموزش" />
                                <StyledTab value="3" label="انتشار دوره" />
                            </StyledTabs>
                        </Box>
                        <TabPanel value="1"><Condition /></TabPanel>
                        <TabPanel value="2"><Training_recording /></TabPanel>
                        <TabPanel value="3"><Release_period /></TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    );
}

export default Tab_layout;

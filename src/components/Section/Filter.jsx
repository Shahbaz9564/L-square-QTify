import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from "./Filter.module.css"
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Filter( {filterData, selectedFilterIndex, setselectedFilterIndex}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setselectedFilterIndex(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs   value={selectedFilterIndex} onChange={handleChange} aria-label="basic tabs example" sx={{
    "& .MuiTabs-indicator": {
      backgroundColor: "#34C94B",
      height: "3px",
    },
    "& .MuiTab-root": {
      color: "#FFFFFF",
      textTransform: "none",
      fontWeight: 500,
    },
    "& .Mui-selected": {
      color: "#ffffff",
    },
  }}>
          {filterData.map((element, index)=>(
<Tab 
  className={styles.name}  key ={element.key} label={element.label} {...a11yProps(index)}  />
          ))
          
          }
        </Tabs>
      </Box>
     {/* <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
*/   } 
</Box>
  );
}

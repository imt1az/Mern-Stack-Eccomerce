import { Checkbox, Collapse, List, ListItem, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box } from '@mui/system';

const CollapseCheckBox = (props) => {
  const [open, setOpen] = useState(props.initState);
  const [checked, setChecked] = useState([])

  const handleCollapseOpen = () => setOpen(!open)

  const renderList = () => (
    props.list ?
      props.list.map((value) => (
        
        <ListItem  key={value._id}>
          {/* <Typography>
          <Box sx={{ fontWeight: 'bold', m: 1 }}>Bold</Box>
          </Typography> */}
         
          <ListItemText  primary={value.name} className=""/>
          <ListItemSecondaryAction>
            <Checkbox
              onChange={() => handleToggle(value._id)}
              checked={checked.indexOf(value._id) !== -1}
            />

          </ListItemSecondaryAction>
        </ListItem>
      ))
      : null
  )
  const handleToggle = (value) => {
         const currentIndex = checked.indexOf(value);
         const newChecked = [...checked];
         if(currentIndex === -1){
          newChecked.push(value);
         }
         else{
           newChecked.splice(currentIndex,1);
         }
         setChecked(newChecked);
         props.handleFilters(newChecked)
  }
  return (
    <div>
      <List>
        <ListItem onClick={handleCollapseOpen}>
          <ListItemText
            primary={props.title}
          />
          {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </ListItem>

        <Collapse in={open} timeout="auto" >
          <List component="div" disablePadding>
           
           {renderList()}
         
          </List>
        </Collapse>

      </List>
    </div>
  );
};

export default CollapseCheckBox;
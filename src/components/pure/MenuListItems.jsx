import { List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import { Home, Settings, Task  } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const getIcon = (icon) =>{
    switch(icon){
        case 'HOME':
            return (<Home></Home>)
        case 'TASK':
            return (<Task></Task>)
        case 'SETTINGS':
            return (<Settings></Settings>)
    }
}


const MenuListItems = ({list}) => {
  const navigate = useNavigate()
  const navTo = (path) => {
    navigate(path)
  }
  return (
    <List>
        {list.map(({text, path, icon}, index) => (
            <ListItem key={index} button  onClick={() => navTo(path)}>
                <ListItemIcon>
                    {getIcon(icon)}
                </ListItemIcon>
                <ListItemText primary={text}>
                </ListItemText>
            </ListItem>
        ))}
    </List>
  )
}

export default MenuListItems
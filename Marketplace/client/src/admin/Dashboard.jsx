import React, { useState } from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CategoryIcon from '@mui/icons-material/Category';
function Dashboard() {
    const [openCli, setOpenCli] = React.useState(true);
    const [openSel, setOpenSel] = React.useState(true);
    const [openCat, setOpenCat] = React.useState(true);
    const [openProd, setOpenProd] = React.useState(true);
    const [view,setView]=React.useState("welcome")
    const [clients,setclients]=useState([])
    const [sellers,setSellers]=useState([])
    const [categorys,setCategorys]=useState([])
    const [products,setProducts]=useState([]
        )


////FUNCTION///////



    const handleClick = (calback,openx) => {
        calback(!openx);
    }
  return (
    <div>
        <div>

        </div>
        <div>
        <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Dashboard 
        </ListSubheader>
      }
    >
      <ListItemButton onClick={()=>handleClick(setOpenCli,openCli)}>
        <ListItemIcon>
          <ContactEmergencyIcon />
        </ListItemIcon>
        <ListItemText primary="Clients" />
        {openCli ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openCli} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="View List & Manage" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={()=>handleClick(setOpenSel,openSel)}>
        <ListItemIcon>
          <SupervisedUserCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Sellers" />
        {openSel ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSel} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="View List & Manage" />
          </ListItemButton>
        </List>
      </Collapse>
      
      <ListItemButton onClick={()=>handleClick(setOpenCat,openCat)}>
         <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Category" />
        {openCat ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openCat} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Add Category" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="View & Update Category" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={()=>handleClick(setOpenProd,openProd)}>
         <ListItemIcon>
          <ProductionQuantityLimitsIcon  />
        </ListItemIcon>
        <ListItemText primary="Products" />
        {openProd ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openProd} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="View & Manage Products" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Dashboard
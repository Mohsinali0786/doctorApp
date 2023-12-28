import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Sidebar() {
  return (
    <div className='w-15vw h-sidebar ' style={{color:'white'}}>
        <ul>
            <li>
                <div>
                    <DashboardIcon/>
                </div>
                <span>Dashoboard</span>
            </li>
            <li>
                <div>
                    <AccountCircleIcon/>
                </div>
                <span>Users</span>
            </li>
            <li>
                <div>
                    <SettingsIcon/>
                </div>
                <span>Settings</span>
            </li>
        </ul>
    </div>
  );
}
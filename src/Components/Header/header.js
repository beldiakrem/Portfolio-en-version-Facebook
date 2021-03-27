import React from 'react';
import Menuheader from './menuheader'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown'
import logo from '../../Assests/logo.png'
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import ArchiveIcon from '@material-ui/icons/Archive';
import IconButton from '@material-ui/core/IconButton';
import { pink } from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar'; 
import Me from '../../Assests/me.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        margin: '0px 5px',
      },
    },
    gris: {
      color: theme.palette.getContrastText(pink[500]),
      backgroundColor: '#3A3B3C',
      "&:hover":
        {
          
        backgroundColor: '#696969',
       }
    },
   
    
  }));
 
 
  export default function  Header () {
    const classes = useStyles();
    return (
        <div className="header" >
            
            <Navbar id="headerfixed" >
             {/* <img id="logo" src={logo} /> */}
               <Form inline>
                   <FormControl type="text" placeholder="&#61442;  Rechercher..." className="mr-sm-2" />
               </Form>
                     <Menuheader />
                     <div className={classes.root}>
                       
                          <Avatar type="button"  src={Me} /> <h6 id="avatarname"> Akrém </h6>
                        
                           <IconButton className={classes.gris}>
                           <Tooltip title="Add" aria-label="add">
                        
                            <AddIcon  />
                            
                      </Tooltip>
                           </IconButton>
                        
                           <IconButton className={classes.gris}>
                           <Tooltip title="Contact" aria-label="contact">
                            <PermPhoneMsgIcon  />
                            </Tooltip>
                           </IconButton>
                           <IconButton className={classes.gris}>
                           <Tooltip title="Projects" aria-label="projects">
                            <ArchiveIcon  />
                            </Tooltip>
                           </IconButton>
                     </div>
                <ButtonGroup vertical>  
                     <DropdownButton as={ButtonGroup} title="" id="bg-vertical-dropdown-1" >
                         <Dropdown.Item id="dropdowncolor" eventKey="1">Dropdown link</Dropdown.Item>
                         <Dropdown.Item id="dropdowncolor" eventKey="2">Dropdown link</Dropdown.Item>
                     </DropdownButton>
                </ButtonGroup>
             </Navbar>
            
        </div>
    )
}
 

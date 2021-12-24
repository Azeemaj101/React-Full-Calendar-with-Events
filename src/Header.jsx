import "./App.css"
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import {bindActionCreators} from 'redux';
import {actionCreators} from "./state/index";
import {useDispatch} from 'react-redux';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';

export default function Header() {
    const dispatch = useDispatch()
    const {Month,Year, Country} = bindActionCreators(actionCreators,dispatch);
    const [post, setPost] = useState(null);
    const [flag, setflag] = useState(false);
    if(localStorage.getItem('month') && localStorage.getItem('year'))
    {
        let localMonth = localStorage.getItem('month');
        let localYear = localStorage.getItem('year');
        Month(localMonth);
        Year(localYear);
        if(document.getElementById(localMonth))
        {
            document.getElementById(localMonth).selected = 'selected'
        }
        if(document.getElementById(localYear))
        {
            document.getElementById(localYear).selected = 'selected'
        }
        
    }
    useEffect(() => {
        axios.get('https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json').then((response) => {
            setPost(response.data);
            setflag(true)
        });
    }, []);
    return(
        <Box sx={{ flexGrow: 1  }}>
        <AppBar position="static">
            <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <EventAvailableOutlinedIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
                <strong className="title"> Event Calendar </strong>
            </Typography>
        <div className="header_section">
        <Tooltip title="Year">
            <select onChange={(e) =>{ localStorage.setItem("year", e.target.value);
            Year(e.target.value);
            document.location.reload();}} className="Year">
                <option key="101" value="101" id="101" >Year</option>
                <option key="2005" value="2005" id="2005" >2005</option>
                <option key="2006" value="2006" id="2006" >2006</option>
                <option key="2007" value="2007" id="2007" >2007</option>
                <option key="2008" value="2008" id="2008" >2008</option>
                <option key="2009" value="2009" id="2009" >2009</option>
                <option key="2010" value="2010" id="2010" >2010</option>
                <option key="2011" value="2011" id="2011" >2011</option>
                <option key="2012" value="2012" id="2012" >2012</option>
                <option key="2013" value="2013" id="2013" >2013</option>
                <option key="2014" value="2014" id="2014" >2014</option>
                <option key="2015" value="2015" id="2015" >2015</option>
                <option key="2016" value="2016" id="2016" >2016</option>
                <option key="2017" value="2017" id="2017" >2017</option>
                <option key="2018" value="2018" id="2018" >2018</option>
                <option key="2019" value="2019" id="2019" >2019</option>
                <option key="2020" value="2020" id="2020" >2020</option>
                <option key="2021" value="2021" id="2021" >2021</option>
                <option key="2022" value="2022" id="2022" >2022</option>
            </select>
        </Tooltip>
        <Tooltip title="Month">
            <select onChange={(e) => {localStorage.setItem("month", e.target.value);
            Month(e.target.value);
            document.location.reload();}} className="Month">
                <option key="101" value="101" id="101" >Month</option>
                <option key="01" value="01" id="01" >January</option>
                <option key="02" value="02" id="02" >February</option>
                <option key="03" value="03" id="03" >March</option>
                <option key="04" value="04" id="04" >April</option>
                <option key="05" value="05" id="05" >May</option>
                <option key="06" value="06" id="06" >June</option>
                <option key="07" value="07" id="07" >July</option>
                <option key="08" value="08" id="08" >August</option>
                <option key="09" value="09" id="09" >September</option>
                <option key="10" value="10" id="10" >October</option>
                <option key="11" value="11" id="11" >November</option>
                <option key="12" value="12" id="12" >December</option>
            </select>
        </Tooltip>
        <Tooltip title="Country">
            <select onChange={(e) => Country(e.target.value)} className="country">
                <option key="0" value="PK" >Default (Pakistan)</option>
                {flag&&post.map(pos => (
                    <option key={pos.Code} value={pos.Code}>{pos.Name}</option>
                ))}
            </select>
        </Tooltip>
        </div>
        <Tooltip title="@Azeemaj101">
            <a href="https://github.com/Azeemaj101" className="github" target="_blank" rel="noopener noreferrer">
                <GitHubIcon/>
            </a>
        </Tooltip>
        <Tooltip title="Portfolio">
            <a href="http://azeemaj101.herokuapp.com/" className="github" target="_blank" rel="noopener noreferrer">
                <SwitchAccountIcon/>
            </a>
        </Tooltip>
            </Toolbar>
        </AppBar>
        </Box>
    );
}

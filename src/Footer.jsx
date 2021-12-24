import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
const Footer = () => {
    let year = 2022;
    return (
        <div className='footer'>
            <strong>©️Copyright 2021-{year}</strong> <Tooltip title="@Azeemaj101">
            <a href="https://github.com/Azeemaj101" className="githubFooter" target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize='small'/>
            </a>
        </Tooltip>
        </div>
    )
}

export default Footer;

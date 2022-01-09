import React from 'react'
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';


export default function Home() {
    return (
        <div>
            <Typography variant="h4">
                Add your words. If you want to improve your english, &nbsp;
                <Link to="/application">click here</Link>
            </Typography>
        </div>
    )
}

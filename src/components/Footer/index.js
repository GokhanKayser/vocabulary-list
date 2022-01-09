import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';

export default function Footer() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#1976D2", color: "white", padding: "10px" }} >
            <Typography variant="overline" component="div" >
                © 2022 Gokhan Kayser And Mustafa Cor All Rights Reserved
            </Typography>
        </Box>
    )
}

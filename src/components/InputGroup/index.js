import React, { useState } from 'react'
import { TextField, Grid, Button } from '@mui/material';
import { SwapHorizontalCircle } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addWord } from '../../app/slices/wordsSlice';


export default function InputGroup() {
    const [writen, setWriten] = useState({ englishWord: "", turkishWord: "" })
    const dispatch = useDispatch()
    return (
        <Grid container display="flex" justifyContent="center" spacing={1} pt="10px">
            <Grid item xs={5} md={3} >
                <TextField id="outlined-basic" fullWidth label="Türkçe" variant="outlined" onChange={(e) => setWriten({ ...writen, turkishWord: e.target.value })} />
            </Grid>
            <Grid item xs={2} md={1} display="flex" justifyContent="center" alignItems="center">
                <SwapHorizontalCircle fontSize="large" />
            </Grid>
            <Grid item xs={5} md={3} >
                <TextField id="outlined-basic" fullWidth label="English" variant="outlined" onChange={(e) => setWriten({ ...writen, englishWord: e.target.value })} />
            </Grid>
            <Grid item xs={10} md={5.1} >
                <Button fullWidth variant="contained" onClick={() => dispatch(addWord(writen))}>Add</Button>
            </Grid>
        </Grid>
    )
}

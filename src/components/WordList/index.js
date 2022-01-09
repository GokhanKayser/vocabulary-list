import React from 'react'
import { TextField, Container, List } from '@mui/material';
import WordItem from "../WordItem"
import { useSelector } from 'react-redux';



export default function WordList() {
    const words = useSelector((state) => { return state.words })
    return (
        <Container>
            <TextField id="outlined-basic" fullWidth label="Search" variant="standard" />
            <List>
                {words.map((word) => <WordItem en={word.englishWord} tr={word.turkishWord} id={word.id} key={word.id} />)}
            </List>
        </Container>
    )
}

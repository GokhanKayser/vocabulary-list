import React, { useState } from 'react'
import { Box, IconButton, ListItem, Typography, TextField } from '@mui/material';
import { Visibility, VisibilityOff, Check, Edit, Delete } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { deleteWord, editWord } from '../../app/slices/wordsSlice';

export default function WordItem(props) {
    const [seen, setSeen] = useState(false)
    const [onEditMode, setOnEditMode] = useState(false)
    const [edited, setEdited] = useState({ en: props.en, tr: props.tr, id: props.id })
    const dispatch = useDispatch()
    return (
        <ListItem>
            <Box width="100%" display="flex" alignItems="center" justifyContent="space-around">
                {onEditMode == true ?
                    "" :
                    <IconButton
                        onMouseDown={() => { setSeen(true) }}
                        onMouseUp={() => { setSeen(false) }}
                        onTouchStart={(e) => { setSeen(true); e.preventDefault() }}
                        onTouchEnd={(e) => { setSeen(false); e.preventDefault() }}
                    >
                        {seen == true ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                }
                {onEditMode == true ?
                    <div style={{ display: "flex" }}>
                        <TextField id="outlined-basic" fullWidth label="EN" variant="standard" value={edited.en} onChange={(e) => setEdited({ ...edited, en: e.target.value })} sx={{ marginRight: "15px" }} />
                        <TextField id="outlined-basic" fullWidth label="TR" variant="standard" value={edited.tr} onChange={(e) => setEdited({ ...edited, tr: e.target.value })} />
                    </div> :
                    <Typography variant="overline">
                        {seen == true ? props.tr : props.en}
                    </Typography>
                }

                <div>

                    {onEditMode == true ?
                        <IconButton onClick={() => {
                            dispatch(editWord(edited))
                            setOnEditMode(false);
                        }}><Check /></IconButton > :
                        <IconButton onClick={() => { setOnEditMode(true) }}><Edit /></IconButton>
                    }

                    <IconButton onClick={() => dispatch(deleteWord(props.id))}>
                        <Delete />
                    </IconButton>
                </div>
            </Box>
        </ListItem>
    )
}

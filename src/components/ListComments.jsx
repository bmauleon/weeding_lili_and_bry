import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';


export default function ListComments() {
    const [comments, setComments] = useState([]);
    const searchComments = async () => {
        const response = await fetch('https://wedding-liliandbry-45fd821e9dbd.herokuapp.com/list_comments/', {
        method: `GET`,
        })
        setComments(await response.json())
    };

    useEffect(() => {
        searchComments()
    }, [])

    return (
        <List sx={{ width: 1, bgcolor: 'background.paper', maxHeight: 300, overflow: 'auto' }}>
            {comments.map((element) => (
                <ListItem alignItems="flex-start" key={element.family}>
                    <ListItemAvatar>
                    <Avatar alt={element.family} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    //   primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                            <Box>
                                <Rating name="read-only" value={5} readOnly />
                            </Box>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                {element.family.toUpperCase()} - 
                            </Typography>
                            {element.comment}
                        </React.Fragment>
                    }
                    />
                </ListItem>
              ))}
        <Divider variant="inset" component="li" />
        </List>
    );
}
import { Container } from '@material-ui/core';
import React from 'react';
import useStyles from './styles.js';

const Profile = () => {
    const classes = useStyles();

    return (
        <Container className={classes.profileContainer}>
            Profile Page
        </Container>
    )
}

export default Profile

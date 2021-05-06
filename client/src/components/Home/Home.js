import { Container } from '@material-ui/core'
import React from 'react';
import useStyles from './styles';

const Home = () => {
    const classes = useStyles()

    return (
        <Container className={classes.homeContainer}>
            Home
        </Container>
    )
}

export default Home

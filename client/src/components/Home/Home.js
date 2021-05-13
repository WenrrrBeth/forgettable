import { Container } from '@material-ui/core'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProfile } from '../../actions/profile';
import useStyles from './styles';

const Home = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));

    useEffect(() => {
        dispatch(getProfile(user?.result._id));
    }, [user?.result?._id, dispatch]);

    return (
        <Container className={classes.homeContainer}>
            Home
        </Container>
    )
}

export default Home

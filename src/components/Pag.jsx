import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        color: "white",
        '& > *': {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
    },
}));

export default function Pag() {
    const classes = useStyles();
    return (
        <Container margin="50%" alignItems="center" justify="center" className={classes.root}>
            <Pagination className={classes.root} variant="outlined" count={10} color="secondary" />
        </Container>
    );
}
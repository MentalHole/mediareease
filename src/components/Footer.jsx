import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(0, rgb(27, 27, 40) 100%, #291619 100%);',
        border: 0,
        height: 48,
        marginTop: "6vh"
    },
    typography: {
        fontFamily: "'Lora', sans-serif"
    }
});

export default function CustomizedBreadcrumbs() {
    const classes = useStyles()
    return (
        <AppBar position="static" width={1} m={3} p={{ xs: 2, sm: 3, md: 4 }} className={classes.root}>
            <Typography className={classes.typography} variant="body1" align="center" justify="center" alignitems="center" color="inherit">
                Автор дипломного проекта: <span style={{ textDecoration: 'underline' }}>Культаев Нариман</span> © 2021 Mediareease
                </Typography>
        </AppBar>
    );
}
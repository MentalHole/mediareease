import React from 'react';
import { AppBar, Container, createMuiTheme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(0deg, rgb(27, 27, 40) 100%, #291619 100%);',
        border: 0,
        height: 48,
    },
    typography: {
        fontFamily: "'Lora', sans-serif"
    }
});

export default function CustomizedBreadcrumbs() {
    const classes = useStyles()
    return (
        <AppBar className={classes.root} position="static">
            <Container className={classes.typography} maxWidth="md">
                <Typography className={classes.typography} variant="body1" color="inherit">
                    Автор дипломного проекта: <span style={{textDecoration: 'underline'}}>Культаев Нариман</span> © 2021 Mediareease
                </Typography>
            </Container>
        </AppBar>
    );
}
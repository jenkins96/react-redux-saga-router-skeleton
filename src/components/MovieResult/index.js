import React from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core"
import { withRouter } from "react-router-dom";

import style from "./style";
const MovieResult = ({ Title, Year, Type, imdbID, Poster }) => {
    const classes = style();

    const handleSeeMovie = () => {
        history.pushState(`/movie/${imdbID}`)
    }

    return (
        <Card className={classes.cardContainer}>
            <Grid container>
                <Grid item>
                    <img className={classes.poster} src={Poster} alt={Title}/>
                </Grid>
                <Grid item className={classes.titlesContainer}>
                    <Typography>{Title}</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>
                    <Button color="primary" variant="contained" onClick={handleSeeMovie}>Ver mas</Button>
                </Grid>
            </Grid>
        </Card>

    )
}
export default withRouter(MovieResult);
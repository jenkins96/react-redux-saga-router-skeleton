import React, { useState } from "react"
import { Container, Typography, Card, Grid, TextField, Button } from "@material-ui/core"
import styles from "./style.js";
import { MovieIcon } from "../../icons";

export default () => {
    const [searchText, setSearchText] = useState("");
    const classes= styles();
    const handleOnChange = e => {
        setSearchText(e.target.value);
    const handleClean = e => {}
    const handleSearchTextClick = e => {}
    };
    return (
        <Container className={ classes.container }>
            <Card className={ classes.cardContainer }>
                <Grid className={ classes.titleGridContainer }>
                    <Grid>
                        <Typography className={ classes.title }>Bienvenido</Typography>
                    </Grid>
                    <Grid>
                        <MovieIcon className={classes.movieIcon} />
                    </Grid>
                    <TextField value="searchText"
                        className={ classes.textFieldSearch }
                        placeholder="Buscar..."
                        onChange={ handleOnChange }>
                    </TextField>
                    <Grid className={ classes.buttonsContainer }>
                        <Button variant="contained" onClick={ handleClean }>
                        </Button>
                        <Button variant="contained" className={ classes.searchButton } color="primary" size="large" onClick={ handleSearchTextClick }>
                        </Button>
                    </Grid>

                </Grid>

            </Card>

        </Container>
    )
}
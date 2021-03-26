import { Container } from "@material-ui/core";
import React from "react";
import queryString from "querystring";

export default ({ location }) => {
    console.log(queryString.parse(location.search));
    return (
        <Container>
           Results 
        </Container>
    )
}
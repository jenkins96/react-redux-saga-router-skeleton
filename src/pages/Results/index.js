import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Container, CircularProgress } from "@material-ui/core";
import queryString from "querystring";

import { searchMovie } from "../../redux/actions/search.js";
import { movieResults, isSearchLoading } from "../../redux/selectors";
import MovieResult from "../../components/MovieResult";
import { render } from "react-dom";
export default ({ location }) => {
    const dispatch = useDispatch();
    const movies = useSelector(state => movieResults(state));
    const isLoading = useSelector(state => isSearchLoading(state));
    const [isLooked, setIsLooked] = useState(false);
    console.log(movies);

    useEffect(() => {

        const { movieName } = queryString.parse(location.search);
        if(movieName && !isLooked){
            setIsLooked(true);
            dispatch(searchMovie({ movieName }));
        }
    });
    const renderMovies = () => {
        if(movies){
            return movies.map((value,index) => <MovieResult key={index} {...value}/>);
        } else if (isLoading) {
            return <CircularProgress size={100} color="primary"/>
        }
        return <div />;
    };

    
    return (
        <Container>
           { renderMovies() } 
        </Container>
    )
}
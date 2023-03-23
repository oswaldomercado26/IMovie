import React , { useEffect }  from 'react';
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Head from '../Components/Head';
import Layout from './../Layout/Layout';

import HBO from '../Components/Recommended/HBO';

import {

  getTopRatedMovieAction,
} from "../Redux/Actions/MoviesActions";

function AboutUs() {
  const dispatch = useDispatch();
  // useSelectors

  const {
    isLoading: topLoading,
    isError: topError,
    movies: topMovies,
  } = useSelector((state) => state.getTopRatedMovie);
  const {  isError} = useSelector(
    (state) => state.getAllMovies
  );

  // useEffect
  useEffect(() => {

    // get top rated movies
    dispatch(getTopRatedMovieAction());
    // errors
    if (topError) {
      toast.error("Something went wrong!");
    }
  }, [dispatch, isError, topError]);

  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="Recomendaciones" />
        <div className="xl:py-20 py-10 px-4">

        </div>
   
        <HBO movies={topMovies} isLoading={topLoading} />

      </div>
    </Layout>
  );
}

export default AboutUs;

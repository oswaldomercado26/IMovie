import React , { useEffect }  from 'react';
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Head from '../Components/Head';
import Layout from './../Layout/Layout';
import General from '../Components/Recomendaciones/General';
import TopRated from "../Components/Home/TopRated";
import BadGeneral from '../Components/Recomendaciones/BadGeneral';
import {

  getTopRatedMovieAction,
  getRandomMoviesAction,
} from "../Redux/Actions/MoviesActions";

function AboutUs() {
  const dispatch = useDispatch();
  // useSelectors
  const {
    isLoading: randomLoading,
    isError: randomError,
    movies: randomMovies,
  } = useSelector((state) => state.getRandomMovies);

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
    // get bad rated movies
    dispatch(getRandomMoviesAction());
    // errors
    if (topError || randomError) {
      toast.error("Something went wrong!");
    }
  }, [dispatch, isError,randomError, topError]);

  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="Recomendaciones" />
        <div className="xl:py-20 py-10 px-4">

        </div>
   
        <General movies={topMovies} isLoading={topLoading} />
        <BadGeneral movies={randomMovies} isLoading={randomLoading} />


      </div>
    </Layout>
  );
}

export default AboutUs;

import React, {FC} from 'react';
import {MovieDetails, MovieListObject, TVDetails, TVListObject, videoListResultObject} from "../../Types/Types";
import MoviesSection from "./MoviesSection/MoviesSection";
import TrailersBar from "./MoviesSection/TrailersBar/TrailersBar";
import SearchSection from './SearchSection/SearchSection';
import {backgroundUrls} from '../../Utils/Utils';
import StreamingPlatform from '../Plataform/StreamingPlatforms'

interface MainPageProps {
    dayTrendTV: TVListObject[]|TVDetails[],
    weekTrendTV: TVListObject[]|TVDetails[],
    dayTrendMovie: MovieListObject[]|MovieDetails[],
    weekTrendMovie: MovieListObject[]|MovieDetails[],
    popularTV: TVListObject[],
    popularMovies: MovieListObject[],
    url: string,
    trailers:videoListResultObject[]
    setQuery:(query:string)=>any
}

const MainPage: FC<MainPageProps> = (props) => {


    const trendingMovieData = {
        labels: ['Hoy','Esta semana'],
        movies: [props.dayTrendMovie, props.weekTrendMovie]
    }
    const trendingTVData = {
        labels: ['Hoy','Esta semana'],
        movies: [props.dayTrendTV, props.weekTrendTV]
    }
    const popularData = {
        labels: ['Películas','Series'],
        movies: [props.popularMovies, props.popularTV]
    }

    return (
        <div>
            <SearchSection setQuery={props.setQuery} urls={backgroundUrls}/>
            <StreamingPlatform  />
            <MoviesSection data={popularData} title={'Popular'} url={props.url}/>
            <MoviesSection data={trendingMovieData} title={'Tendencias de películas'} url={props.url}/>
            <TrailersBar data={props.trailers} title={'Últimos avances'}/>
            <MoviesSection data={trendingTVData} title={'Tendencias de la serie'} url={props.url}/>
        </div>
);
};



export default MainPage;
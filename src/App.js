import React, { useEffect, useState } from 'react';
import Api from './ApiNetflix';
import MovieLine from './components/MovieLine';
import MovieContrast from './components/MovieContrast';
import Header from './components/Header';
import './App.css';

export default () => {

    const [movieList, setMovieList] = useState([]);
    const [movieData, setMovieData] = useState([null]);
    const [navBlack, setNavBlack] = useState(false);

    useEffect(() => {
        const load = async () => {
            let list = await Api.getHomeList();
            setMovieList(list);

            let originals = list.filter(i => i.slug === 'Originals');
            let randomSelection = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let select = originals[0].items.results[randomSelection];
            let selectInfo = await Api.getMovieInfo(select.id, 'tv');
            setMovieData(selectInfo);
        }

        load();
    }, []);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setNavBlack(true);
            } else {
                setNavBlack(false);
            }
        }
        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    return (
        <div className="page">

            <Header black={navBlack} />

            {movieData &&
                <MovieContrast item={movieData} />
            }

            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieLine key={key} title={item.title} items={item.items} />
                ))}
            </section>


            {movieList.length <= 0 &&
                <div className="loading">
                    <img src="https://rchandru.com/images/portfolio/modals/m-loading.gif" />
                </div>
            }
        </div>
    );

}
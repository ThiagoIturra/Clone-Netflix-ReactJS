import React, {useState} from 'react';
import './MovieLine.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }


    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW =items.results.length * 150;
        if((window. innerWidth - listW) > x){
            x = (window. innerWidth - listW) -60;
        }
        setScrollX(x);
    }


    return (
        <div className="movieLine">
            <h2>{title}</h2>

            <div className="moveLeft" onClick={handleLeftArrow}>
                <ArrowBackIosNewIcon style={{fontSize: 50}} />
            </div>
            <div className="moveRight" onClick={handleRightArrow}>
                <ArrowForwardIosIcon style={{fontSize: 50}} />
            </div>

            <div className="movieLine--listArea">
                <div className="movieLine--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieLine--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} /> 
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
import React from 'react';
import './FeaturedMovie.css';

export default function featured({item})  {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    let description = item.overview;
    
    if(description !== undefined) {
        if(description.length > 200) {
            description = description.substring(0, 200)+ '...';
        }
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}> {console.log(item)}
        
        <div className="featured--vertical">
            <div className="featured--horizontal">
                <div className="featured--name">{item.original_name}</div>
                <div className="featured--info">
                    <div className="featured--points">{item.vote_average} pontos</div>
                    <div className="featured--years">{firstDate.getFullYear()}</div>
                    <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !==1 ? 's' : ''}</div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                        <a href={`/`} className="watchButton">► Assistir</a>
                        <a href={`/`} className="myListButton">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres">
                        <strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </div>
        </section>
    );
}

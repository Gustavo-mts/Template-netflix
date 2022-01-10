const API_KEY = 'a0d7c1ac13ca31c1a853cc69797712f6';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFecth = async (endpoint) => {
    return (await fetch(`${API_BASE}${endpoint}`)).json();
}

const listasTmdb = {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title : "Originais do Netflix",
                items : await basicFecth(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title : "Recomendados para Você",
                items : await basicFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title : "Em Alta",
                items : await basicFecth(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title : "Ação",
                items : await basicFecth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title : "Comédia",
                items : await basicFecth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title : "Terror",
                items : await basicFecth(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title : "Romance",
                items : await basicFecth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },            
            {
                slug: 'documentary',
                title : "Documentários",
                items : await basicFecth(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },
    getMovieInfo: async (MovieId, type) => {
        let info = {};

        if(MovieId) {
            switch(type) {
                case 'movie':
                    info = await basicFecth(`/movie/${MovieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFecth(`/tv/${MovieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }

        return info;
    }
}

export default listasTmdb;
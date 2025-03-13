import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import getImages from "@/lib/getImages";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importando o hook useParams

function Details() {
  const { id } = useParams(); // Pegando o id da URL
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);
  const [movieVideos, setMovieVideos] = useState([]);
  const [movieSimilar, setMovieSimilar] = useState([]);
  const [popularMovies, setpopularMovies] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      // Pegar filme do dia
      axios({
        method: "get",
        url: "https://api.themoviedb.org/3/trending/movie/day",
        params: {
          api_key: "e4553f1eb0af7c766ac5a0237ec8baeb",
          language: "pt-BR",
        },
      }).then((response) => {
        setpopularMovies(response.data.results[0]);
      });
    };

    getMovies();
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: {
        api_key: "e4553f1eb0af7c766ac5a0237ec8baeb",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovieDetails(response.data); //
    });
  }, [id]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: {
        api_key: "e4553f1eb0af7c766ac5a0237ec8baeb",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovieGenres(response.data.genres); //
    });
  }, [id]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${id}/credits`,
      params: {
        api_key: "e4553f1eb0af7c766ac5a0237ec8baeb",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovieCredits(response.data.cast); //
    });
  }, [id]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${id}/videos`,
      params: {
        api_key: "e4553f1eb0af7c766ac5a0237ec8baeb",
        language: "en-US",
      },
    }).then((response) => {
      setMovieVideos(response.data.results);
    });
  }, [id]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${id}/similar`,
      params: {
        api_key: "e4553f1eb0af7c766ac5a0237ec8baeb",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovieSimilar(response.data.results);
    });
  }, [id]);

  if (!movieDetails) return <p>Carregando...</p>;
  if (!movieCredits) return <p>Carregando...</p>;
  if (!movieVideos) return <p>Carregando...</p>;
  if (!popularMovies) return <p>Carregando...</p>;
  if (!movieSimilar) return <p>Carregando...</p>;
  if (!movieGenres) return <p>Carregando...</p>;

  return (
    <div className="h-full w-full">
      <div className="relative">
        <div className="capaa">
          <img
            className="w-screen h-[50vh]"
            src={getImages(popularMovies?.backdrop_path)}
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 -mt-30 ml-25 xl:ml-50 w-100 absolute xl:w-[55vw] justify-center">
        <div>
          <img
            className="w-105 hidden xl:flex effect rounded-4xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
            src={getImages(popularMovies.poster_path)}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3 mb-0 xl:mb-10 mr-40">
          <h1 className="text-white text-2xl xl:text-5xl font-extrabold">
            {popularMovies.title}
          </h1>

          <div className="flex gap-5 mt-2">
            {movieGenres.map((movie, index) => (
              <ul key={index}>
                <li className="text-white font-medium bg-zinc-900 border-2 px-3 py-1.5 rounded-2xl">
                  {movie.name}
                </li>
              </ul>
            ))}
          </div>

          <p className="xl:text-2xl font-medium mt-5  text-white">
            {popularMovies.overview}
          </p>

          <p className="text-3xl mt-5 hidden xl:flex text-white font-bold">Créditos</p>

          <div className="flex items-center justify-center gap-4 xl:mt-10 xl:ml-30">
            {movieCredits.slice(0, 4).map((artist) => (
              <div
                className="hidden xl:flex flex-col items-center justify-center gap-1"
                key={artist.id}
              >
                <img
                  className=" rounded-lg cursor-pointer"
                  src={getImages(artist.profile_path)}
                  alt=""
                />
                <p className="text-white font-bold text-lg text-center w-[120px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {artist.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-80 xl:mt-180 flex flex-col gap-24">
        {movieVideos.slice(0, 2).map((video) => (
          <div
            key={video.id}
            className="flex flex-col items-center justify-center mb-20 gap-20"
          >
            <p className="text-2xl font-medium text-white">{video.name}</p>
            <iframe
              className="rounded-4xl w-80 xl:w-1/2 h-70 xl:h-120 "
              width="50%"
              height="550px"
              src={`https://www.youtube.com/embed/${video.key}`}
            ></iframe>
          </div>
        ))}
      </div>

      <p className="text-white text-2xl font-extrabold ml-15 mb-10">
        Filmes Similares
      </p>
      <div>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1 flex-nowrap">
            {movieSimilar.map((movie, index) => (
              <CarouselItem key={index} className="basis-1/2 xl:basis-1/6">
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <img
                    className="rounded-3xl h-110 cursor-pointer"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt=""
                  />
                  <p className="text-white text-lg font-bold">{movie.title}</p>
                </div>
                ;
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default Details;

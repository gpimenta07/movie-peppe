import getImages from "@/lib/getImages";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importando o hook useParams

function Details() {
  const { id } = useParams(); // Pegando o id da URL
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);
  const [movieVideos, setMovieVideos] = useState(null);
  const [movieSimilar, setMovieSimilar] = useState(null);
  const [popularMovies, setpopularMovies] = useState(null);

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
        language: "pt-BR",
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
      setMovieSimilar(response.data);
    });
  }, [id]);
  console.log(popularMovies);
  console.log(movieVideos);
  console.log(movieCredits);
  console.log(movieDetails);
  console.log(movieSimilar);

  if (!movieDetails) return <p>Carregando...</p>;
  if (!movieCredits) return <p>Carregando...</p>;
  if (!movieVideos) return <p>Carregando...</p>;

  return (
    <div className="relative">
      <div className="h-1/2">
        <img className="w-screen capa" src={getImages(popularMovies?.backdrop_path)} alt="" />
      </div>
    </div>
  );
}

export default Details;

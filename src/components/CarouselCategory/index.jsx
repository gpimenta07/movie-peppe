import * as React from "react";
import { Card, CardContent } from "../ui/card";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import axios from "axios";

function CarouselAction() {
  const [movieGenreIdAction, setMovieGenreIdAction] = useState([]);
  const [movieGenreId, setMovieGenreId] = useState([]);
  const [movieGenreIdR, setMovieGenreIdR] = useState([]);
  const [movieGenreIdF, setMovieGenreIdF] = useState([]);
  const [movieGenreIdA, setMovieGenreIdA] = useState([]);
  const [movieGenreIdG, setMovieGenreIdG] = useState([]);

  useEffect(() => {
    const getTopAction = () => {
      axios({
        method: "get",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=e4553f1eb0af7c766ac5a0237ec8baeb&with_genres=28&language=pt-BR`,
      }).then((response) => {
        setMovieGenreIdAction(response.data.results);
      });
    };
    getTopAction();
  }, []);

  useEffect(() => {
    const getTop = () => {
      axios({
        method: "get",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=e4553f1eb0af7c766ac5a0237ec8baeb&with_genres=35&language=pt-BR`,
      }).then((response) => {
        setMovieGenreId(response.data.results);
      });
    };
    getTop();
  }, []);

  useEffect(() => {
    const getTopR = () => {
      axios({
        method: "get",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=e4553f1eb0af7c766ac5a0237ec8baeb&with_genres=10749&language=pt-BR`,
      }).then((response) => {
        setMovieGenreIdR(response.data.results);
      });
    };
    getTopR();
  }, []);

  useEffect(() => {
    const getTopF = () => {
      axios({
        method: "get",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=e4553f1eb0af7c766ac5a0237ec8baeb&with_genres=878&language=pt-BR`,
      }).then((response) => {
        setMovieGenreIdF(response.data.results);
      });
    };
    getTopF();
  }, []);

  useEffect(() => {
    const getTopA = () => {
      axios({
        method: "get",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=e4553f1eb0af7c766ac5a0237ec8baeb&with_genres=16&language=pt-BR`,
      }).then((response) => {
        setMovieGenreIdA(response.data.results);
      });
    };
    getTopA();
  }, []);

  useEffect(() => {
    const getTopG = () => {
      axios({
        method: "get",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=e4553f1eb0af7c766ac5a0237ec8baeb&with_genres=10752&language=pt-BR`,
      }).then((response) => {
        setMovieGenreIdG(response.data.results);
      });
    };
    getTopG();
  }, []);

  return (
    <div className="flex flex-col">
      <Carousel className="w-full">
        <CarouselContent className="-ml-1 flex-nowrap">
          {movieGenreId.map((movie, index) => (
            <CarouselItem key={index} className="basis-1/2 xl:basis-1/6">
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2"
              >
                <img
                  className="rounded-3xl h-80 xl:h-110 cursor-pointer"
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
      <p className="text-white text-2xl font-extrabold ml-15 mt-10 mb-10">
        Ação
      </p>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1 flex-nowrap">
          {movieGenreIdAction.map((movie, index) => (
            <CarouselItem key={index} className="basis-1/2 xl:basis-1/6">
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2"
              >
                <img
                  className="rounded-3xl h-80 xl:h-110 cursor-pointer"
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
      <p className="text-white text-2xl font-extrabold ml-15 mt-10 mb-10">
        Romance
      </p>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1 flex-nowrap">
          {movieGenreIdR.map((movie, index) => (
            <CarouselItem key={index} className="basis-1/2 xl:basis-1/6">
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2"
              >
                <img
                  className="rounded-3xl h-80 xl:h-110 cursor-pointer"
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

      <p className="text-white text-2xl font-extrabold ml-15 mt-10 mb-10">
        Ficção Científica
      </p>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1 flex-nowrap">
          {movieGenreIdF.map((movie, index) => (
            <CarouselItem key={index} className="basis-1/2 xl:basis-1/6">
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2"
              >
                <img
                  className="rounded-3xl h-80 xl:h-110 cursor-pointer"
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
      <p className="text-white text-2xl font-extrabold ml-15 mt-10 mb-10">
        Animação
      </p>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1 flex-nowrap">
          {movieGenreIdA.map((movie, index) => (
            <CarouselItem key={index} className="basis-1/2 xl:basis-1/6">
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2"
              >
                <img
                  className="rounded-3xl h-80 xl:h-110 cursor-pointer"
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

      <p className="text-white text-2xl font-extrabold ml-15 mt-10 mb-10">
        Guerra
      </p>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1 flex-nowrap">
          {movieGenreIdG.map((movie, index) => (
            <CarouselItem key={index} className="basis-1/2 xl:basis-1/6">
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2"
              >
                <img
                  className="rounded-3xl h-80 xl:h-110 cursor-pointer"
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
  );
}

export default CarouselAction;

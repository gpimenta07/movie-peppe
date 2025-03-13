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

function CarouselUp() {
  const [movieComing, setMovieComing] = useState([]);
  useEffect(() => {
    const getTopComing = () => {
      axios({
        method: "get",
        url: "https://api.themoviedb.org/3/movie/upcoming",
        params: {
          api_key: "e4553f1eb0af7c766ac5a0237ec8baeb",
          language: "pt-BR",
        },
      }).then((response) => {
        setMovieComing(response.data.results);
      });
    };
    getTopComing();
  }, []);

  
 
  

  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1 flex-nowrap">
              {movieComing.map((movie, index) => (
                  <CarouselItem key={index} className=" basis-1/6">
            
                  <div key={index} className="flex flex-col items-center justify-center gap-2">
                    
                          <img className="rounded-3xl h-110 cursor-pointer" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                          <p className="text-white text-lg font-bold">{movie.title}</p>
                    
                  </div>;
                
              </CarouselItem>
              ))}
          
        
      </CarouselContent>
    </Carousel>
  );
}

export default CarouselUp;

